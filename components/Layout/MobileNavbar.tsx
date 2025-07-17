import React from "react";
import { FaHome, FaUserMd, FaUser } from "react-icons/fa";
import { MdFolder } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import styles from '@/styles/mobileNavbar.module.css'

const MobileNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <FaHome className={styles.icon} />
        <span>Home</span>
      </div>
      <div className={styles.navItem}>
        <MdOutlineAssignment className={styles.icon} />
        <span>Book Appointment</span>
      </div>
      <div className={`${styles.navItem} ${styles.centerItem}`}>
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
  );
};

export default MobileNavbar;
