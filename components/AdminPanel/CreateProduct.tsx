"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/Dashboard/createproduct.module.css";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const CreateProduct = () => {
  const [image, setImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    category: "",
    company: "",
    name: "",
    quantity: "",
    price: "",
    discountPrice: "",
    description: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescriptionChange = (value: string) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Add New Product</h2>

      <div className={styles.row}>
        <label className={styles.imageUpload}>
          {image ? (
            <img src={image} alt="Preview" className={styles.previewImage} />
          ) : (
            <span>Upload Image</span>
          )}
          <input
            type="file"
            accept="image/*"
            className={styles.imageInput}
            onChange={handleImageUpload}
          />
        </label>
      </div>

      <div className={styles.row}>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Category</option>
          <option value="skincare">Skincare</option>
          <option value="haircare">Haircare</option>
          <option value="health">Health</option>
          <option value="fitness">Fitness</option>
        </select>

        <select
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Company</option>
          <option value="dove">Dove</option>
          <option value="patanjali">Patanjali</option>
          <option value="himalaya">Himalaya</option>
          <option value="vlcc">VLCC</option>
        </select>
      </div>

      <div className={styles.row}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.row}>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="discountPrice"
          placeholder="Discount Price"
          value={formData.discountPrice}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.richTextWrapper}>
        <ReactQuill
          value={formData.description}
          onChange={handleDescriptionChange}
          className={styles.richText}
          modules={{
            toolbar: [
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["clean"],
            ],
          }}
          placeholder="Enter product description..."
        />
      </div>

      <button type="submit" className={styles.button}>
        Add Product
      </button>
    </form>
  );
};

export default CreateProduct;
