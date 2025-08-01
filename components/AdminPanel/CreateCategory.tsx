import React, { useState } from "react";
import styles from "@/styles/Dashboard/createcategory.module.css";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [categoryType, setCategoryType] = useState("product");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCategoryImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission logic
    console.log("Category Name:", categoryName);
    console.log("Category Type:", categoryType);
    console.log("Category Image:", categoryImage);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Add New Category</h2>

        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          id="name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
          className={styles.input}
        />

        <label htmlFor="image">Category Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.fileInput}
        />
        {previewUrl && (
          <img src={previewUrl} alt="Preview" className={styles.preview} />
        )}

        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              value="product"
              checked={categoryType === "product"}
              onChange={(e) => setCategoryType(e.target.value)}
            />
            Product Category
          </label>
          <label>
            <input
              type="radio"
              value="service"
              checked={categoryType === "service"}
              onChange={(e) => setCategoryType(e.target.value)}
            />
            Service Category
          </label>
        </div>

        <button type="submit" className={styles.button}>
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
