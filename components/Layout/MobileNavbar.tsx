import React, { useState } from "react";
import { FaHome, FaUserMd, FaUser } from "react-icons/fa";
import { MdFolder, MdOutlineAssignment } from "react-icons/md";
import styles from "@/styles/mobileNavbar.module.css";

const MobileNavbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navItem}>
          <FaHome className={styles.icon} />
          <span>Home</span>
        </div>
        <div className={styles.navItem}>
          <MdOutlineAssignment className={styles.icon} />
          <span>Book <br />Appointment</span>
        </div>
        <div className={`${styles.navItem} ${styles.centerItem}`} onClick={toggleDrawer}>
          <MdFolder className={styles.icon} />
          <span>Your Result</span>
        </div>
        <div className={styles.navItem}>
          <FaUserMd className={styles.icon} />
          <span>Treatment</span>
        </div>
        <div className={styles.navItem}>
          <FaUser className={styles.icon} />
          <span>Profile</span>
        </div>
      </div>

      {/* Bottom Drawer */}
      {showDrawer && (
        <div className={styles.drawer}>
          <div className={styles.drawerContent}>
            <h4>Your Links</h4>
            <ul>
              <li><a href="#">Lab Results</a></li>
              <li><a href="#">Scan Reports</a></li>
              <li><a href="#">Prescription History</a></li>
              <li><a href="#">Medical Summary</a></li>
            </ul>
            <button className={styles.closeBtn} onClick={toggleDrawer}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
