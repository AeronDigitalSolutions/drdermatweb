"use client";
import React, { useState } from "react";
import styles from "@/styles/clinicdashboard/doctors.module.css";

const Doctor = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    specialist: "",
  });

  const titles = ["Dr.", "Prof.", "Mr.", "Ms."];
  const specialists = ["Dermatologist", "Cardiologist", "Neurologist", "Pediatrician"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Doctor Data:", formData);
    // Add API/backend logic here
  };

  return (
    <div className={styles.doctorContainer}>
      <h1 className={styles.pageTitle}>Create New Doctor</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Title First */}
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <select
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.selectField}
            required
          >
            <option value="" disabled>Select Title</option>
            {titles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </select>
        </div>

        {/* First Name */}
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>

        {/* Last Name */}
        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>

        {/* Specialist */}
        <div className={styles.formGroup}>
          <label htmlFor="specialist" className={styles.label}>Specialist</label>
          <select
            id="specialist"
            name="specialist"
            value={formData.specialist}
            onChange={handleChange}
            className={styles.selectField}
            required
          >
            <option value="" disabled>Select Specialist</option>
            {specialists.map((spec, index) => (
              <option key={index} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>Create Doctor</button>
      </form>
    </div>
  );
};

export default Doctor;
