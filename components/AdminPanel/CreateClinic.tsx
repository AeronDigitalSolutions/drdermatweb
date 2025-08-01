import React, { useState } from "react";
import styles from "@/styles/Dashboard/createclinic.module.css";

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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, type, value } = e.target;

  if (type === "checkbox") {
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ ...prev, [name]: checked }));
  } else {
    setFormData(prev => ({ ...prev, [name]: value }));
  }
};


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: file, imagePreview: preview }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Further submit logic
  };

  return (
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
          <label>Mobile No</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>WhatsApp No</label>
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
          ></textarea>
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Create Clinic
      </button>
    </form>
  );
};

export default CreateClinic;
