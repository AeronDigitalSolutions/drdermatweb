"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/clinicdashboard/clinicservices.module.css";

// Dynamically import ReactQuill (for Next.js SSR)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const CreateClinic = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, image, details, price, discountedPrice });
    // Add your backend logic here
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Clinic Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.input}
        />

        <label className={styles.label}>Details</label>
        <div className={styles.quillContainer}>
          <ReactQuill value={details} onChange={setDetails} />
        </div>

        <label className={styles.label}>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>Discounted Price</label>
        <input
          type="number"
          value={discountedPrice}
          onChange={(e) => setDiscountedPrice(e.target.value)}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Create Clinic
        </button>
      </form>
    </div>
  );
};

export default CreateClinic;
