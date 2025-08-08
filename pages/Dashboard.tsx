import React, { useEffect, useState } from "react";
import CreateAdmin from "@/components/AdminPanel/CreateAdmin";
import CreateCategory from "@/components/AdminPanel/CreateCategory";
import CreateClinic from "@/components/AdminPanel/CreateClinic";
import CreateProduct from "@/components/AdminPanel/CreateProduct";
import Dashboard from "@/components/AdminPanel/Dashboard";
import ListOfAdmin from "@/components/AdminPanel/ListOfAdmin";
import ListOfCategory from "@/components/AdminPanel/ListOfCategory";
import ListOfClinic from "@/components/AdminPanel/ListOfClinic";
import ListOfProduct from "@/components/AdminPanel/ListOfProduct";
import styles from "@/styles/dashboard.module.css";
import {
  FiUsers,
  FiUserPlus,
  FiList,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Topbar from "@/components/Layout/Topbar";
import Footer from "@/components/Layout/Footer";
import MobileNavbar from "@/components/Layout/MobileNavbar";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashBoard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (sidebarOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen, isMobile]);

  return (
    <>
      <Topbar hideHamburgerOnMobile />

      {/* Mobile Sidebar Toggle */}
      {isMobile && (
        <div className={styles.mobileTopbar}>
          <button
            className={styles.menuToggle}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      )}

      <div className={styles.wrapper}>
        <div className={styles.mainArea}>
          {/* Sidebar */}
          <aside
            className={`${styles.sidebar} ${
              isMobile ? (sidebarOpen ? styles.sidebarMobile : styles.sidebarHidden) : ""
            }`}
          >
            <p className={styles.sectionTitle}>Menu</p>
            <ul className={styles.menu}>
              <li onClick={() => { setActiveSection("dashBoard"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUsers className={styles.icon} />
                  <span className={styles.label}>Dashboard</span>
                </span>
              </li>

              <p className={styles.sectionTitle}>Create</p>
              <li onClick={() => { setActiveSection("createAdmin"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Create Admin</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("createCategory"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Create Category</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("createClinic"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Create Clinic</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("createProduct"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Create Product</span>
                </span>
              </li>

              <p className={styles.sectionTitle}>List</p>
              <li onClick={() => { setActiveSection("listOfAdmin"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiList className={styles.icon} />
                  <span className={styles.label}>List of Admin</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("listOfCategory"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiList className={styles.icon} />
                  <span className={styles.label}>List of Category</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("listOfClinic"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiList className={styles.icon} />
                  <span className={styles.label}>List of Clinic</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("listOfProduct"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiList className={styles.icon} />
                  <span className={styles.label}>List of Product</span>
                </span>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <div className={styles.mainContent}>
            {activeSection === "dashBoard" && <Dashboard />}
            {activeSection === "createAdmin" && <CreateAdmin />}
            {activeSection === "createCategory" && <CreateCategory />}
            {activeSection === "createClinic" && <CreateClinic />}
            {activeSection === "createProduct" && <CreateProduct />}
            {activeSection === "listOfAdmin" && <ListOfAdmin />}
            {activeSection === "listOfCategory" && <ListOfCategory />}
            {activeSection === "listOfClinic" && <ListOfClinic />}
            {activeSection === "listOfProduct" && <ListOfProduct />}
          </div>
        </div>
      </div>

      <Footer />
      <MobileNavbar />
    </>
  );
};

export default AdminDashboard;
