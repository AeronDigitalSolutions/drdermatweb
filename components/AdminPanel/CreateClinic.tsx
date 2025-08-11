import React, { useState } from "react";
import styles from "@/styles/Dashboard/createclinic.module.css";
import MobileNavbar from "../Layout/MobileNavbar";

const CreateClinic = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    mapLink: "",
    address: "",
    verified: false,
    trusted: false,
    image: null as File | null,
    imagePreview: "",
    base64Image: "",
  });

  const [imageError, setImageError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        setImageError("Image must be ≤ 1MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: base64,
          base64Image: base64,
        }));
        setImageError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.base64Image) {
      setImageError("Please upload an image.");
      return;
    }

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      whatsapp: formData.whatsapp,
      mapLink: formData.mapLink,
      address: formData.address,
      verified: formData.verified,
      trusted: formData.trusted,
      imageUrl: formData.base64Image,
    };

    try {
      const response = await fetch("http://localhost:5000/api/clinics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Failed to create clinic.");
      alert("Clinic created successfully!");

      setFormData({
        name: "",
        mobile: "",
        whatsapp: "",
        mapLink: "",
        address: "",
        verified: false,
        trusted: false,
        image: null,
        imagePreview: "",
        base64Image: "",
      });
    } catch (error: any) {
      alert(error.message || "Something went wrong.");
    }
  };

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Create Clinic</h2>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Upload Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imageError && <p className={styles.error}>{imageError}</p>}
            {formData.imagePreview && (
              <img
                src={formData.imagePreview}
                alt="preview"
                className={styles.imagePreview}
              />
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>WhatsApp</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Google Map Link</label>
            <input
              type="url"
              name="mapLink"
              value={formData.mapLink}
              onChange={handleChange}
            />
          </div>

          <div className={styles.fieldCheckboxes}>
            <label>
              <input
                type="checkbox"
                name="verified"
                checked={formData.verified}
                onChange={handleChange}
              />
              Verified
            </label>
            <label>
              <input
                type="checkbox"
                name="trusted"
                checked={formData.trusted}
                onChange={handleChange}
              />
              Trusted
            </label>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>Create Clinic</button>
      </form>
      <MobileNavbar />
    </div>
  );
};

export default CreateClinic;
