import React, { useState } from "react";
import styles from "@/styles/Dashboard/adminpages.module.css";

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Admin</h2>

        <label htmlFor="name">Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="number">Phone Number</label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          id="number"
          value={formData.number}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className={styles.button}>Create Admin</button>
      </form>
    </div>
  );
};

export default CreateAdmin;
