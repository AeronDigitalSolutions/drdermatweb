"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/clinicdashboard/editprofile.module.css";
import MobileNavbar from "../Layout/MobileNavbar";

const EditProfile = () => {
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

  const [imageError, setImageError] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  // Simulate backend data fetching
  useEffect(() => {
    const fetchClinicData = async () => {
      const fetchedData = {
        name: "Sunrise Health Clinic",
        mobile: "9876543210",
        whatsapp: "9876543210",
        mapLink: "https://maps.google.com/example",
        address: "123 Main Street, City, State",
        verified: true,
        trusted: false,
        imagePreview: "/clinic-placeholder.jpg", // Replace with actual path or leave blank
      };

      setFormData((prev) => ({ ...prev, ...fetchedData }));
    };

    fetchClinicData();
  }, []);

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
        setImageError("Image must be less than or equal to 1MB.");
        setFormData((prev) => ({
          ...prev,
          image: null,
          imagePreview: "",
        }));
        return;
      }

      const preview = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: preview,
      }));
      setImageError(""); // Clear error if valid
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Send data to backend here
  };

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Clinic Details</h2>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditable}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={!isEditable}
            />
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
            <label>Mobile No</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              disabled={!isEditable}
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
              disabled={!isEditable}
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
              disabled={!isEditable}
            />
          </div>

          <div className={styles.fieldCheckboxes}>
            <label>
              <input
                type="checkbox"
                name="verified"
                checked={formData.verified}
                onChange={handleChange}
                disabled={!isEditable}
              />
              Verified
            </label>

            <label>
              <input
                type="checkbox"
                name="trusted"
                checked={formData.trusted}
                onChange={handleChange}
                disabled={!isEditable}
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
              disabled={!isEditable}
            ></textarea>
          </div>
        </div>

        {isEditable ? (
          <button type="submit" className={styles.submitBtn}>
            Save Changes
          </button>
        ) : (
          <button
            type="button"
            onClick={toggleEdit}
            className={styles.editBtn}
          >
            Edit Clinic
          </button>
        )}
      </form>

      <MobileNavbar />
    </div>
  );
};

export default EditProfile;
