import React from "react";
import styles from "@/styles/components/forms/Signup.module.css";
import Image from "next/image";
import illustration from "../public/register.png"; // adjust path if needed
import Topbar from "@/components/Layout/Topbar";
import Footer from "@/components/Layout/Footer";

const ModularForm: React.FC = () => {
  return (
    <>
    <Topbar/>
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.imageContainer}>
          <div className={styles.logo}>
            <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              dr.<span style={{ color: "#b39b53" }}>dermat</span>
            </span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={illustration}
            alt="Illustration"
            className={styles.image}
          />
        </div>

        <div className={styles.head}>Add your information…</div>

        <div className={styles.inputDiv}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="address" className={styles.label}>
            Your Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            className={styles.input}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Register</button>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  );
};

export default ModularForm;
