import React, { useEffect, useState } from "react";

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
import Appointment from "@/components/ClinicAdmin/Appointment";
import Doctors from "@/components/ClinicAdmin/Doctors";
import ProfileSection from "@/components/ClinicAdmin/EditProfile";
import ClinicServices from "@/components/ClinicAdmin/ClinicServices";


const ClinicDashboard = () => {
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
              <li onClick={() => { setActiveSection("appointment"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Appointments</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("doctors"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Doctors</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("profilesection"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Edit Clinic</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("clinicsecrvies"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Create Clinic </span>
                </span>
              </li>

 <p className={styles.sectionTitle}>List</p>
              

              <li onClick={() => { setActiveSection("doctorslist"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Doctors List</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("appointmentslist"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Appointments List</span>
                </span>
              </li>
              <li onClick={() => { setActiveSection("serviceslist"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Services List</span>
                </span>
              </li>


              <li onClick={() => { setActiveSection("review"); setSidebarOpen(false); }} className={styles.menuItem}>
                <span className={styles.iconLabel}>
                  <FiUserPlus className={styles.icon} />
                  <span className={styles.label}>Review</span>
                </span>
              </li>

            </ul>
          </aside>

          {/* Main Content */}
          <div className={styles.mainContent}>
            {activeSection === "appointment" && <Appointment />}
            {activeSection === "doctors" && <Doctors />}
            {activeSection === "profilesection" && <ProfileSection />}
            {activeSection === "clinicsecrvies" && <ClinicServices/>}
                       
           
          </div>
        </div>
      </div>

      <Footer />
      <MobileNavbar />
    </>
  );
};

export default ClinicDashboard;
