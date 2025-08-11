"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Dashboard/listofclinic.module.css";

type Clinic = {
  _id: string;
  name: string;
  mobile: string;
  whatsapp: string;
  mapLink: string;
  address: string;
  verified: boolean;
  trusted: boolean;
  imageUrl: string;
};

function ListOfClinic() {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [filteredClinics, setFilteredClinics] = useState<Clinic[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingClinic, setEditingClinic] = useState<Clinic | null>(null);

  useEffect(() => {
    fetchClinics();
  }, []);

  useEffect(() => {
    const filtered = clinics.filter((clinic) =>
      clinic.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredClinics(filtered);
  }, [search, clinics]);

  const fetchClinics = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/clinics");
      const data = await response.json();
      setClinics(data);
    } catch (err: any) {
      setError(err.message || "Failed to load clinics.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this clinic?")) return;
    try {
      await fetch(`http://localhost:5000/api/clinics/${id}`, {
        method: "DELETE",
      });
      setClinics((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      alert("Failed to delete clinic.");
    }
  };

  const handleUpdateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!editingClinic) return;
    const { name, value } = e.target;
    setEditingClinic({
      ...editingClinic,
      [name]: name === "verified" || name === "trusted" ? value === "true" : value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingClinic || !e.target.files?.[0]) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditingClinic({ ...editingClinic, imageUrl: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateSubmit = async () => {
    if (!editingClinic) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/clinics/${editingClinic._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingClinic),
        }
      );

      if (!res.ok) throw new Error("Failed to update clinic");

      setClinics((prev) =>
        prev.map((c) => (c._id === editingClinic._id ? editingClinic : c))
      );
      setEditingClinic(null);
    } catch (err) {
      alert("Failed to update clinic");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>List of Clinics</h2>

      <input
        type="text"
        placeholder="Search by clinic name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />

      {loading ? (
        <p className={styles.status}>Loading clinics...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : filteredClinics.length === 0 ? (
        <p className={styles.status}>No clinics found.</p>
      ) : (
        <div className={styles.clinicGrid}>
          {filteredClinics.map((clinic) => (
            <div key={clinic._id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={clinic.imageUrl || "https://via.placeholder.com/200?text=No+Image"}
                  alt={clinic.name}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/200?text=No+Image";
                  }}
                />
              </div>
              <div className={styles.content}>
                <h3>{clinic.name}</h3>
                <p><strong>Mobile:</strong> {clinic.mobile}</p>
                <p><strong>WhatsApp:</strong> {clinic.whatsapp}</p>
                <p><strong>Address:</strong> {clinic.address}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className={clinic.verified ? styles.verified : styles.unverified}>
                    {clinic.verified ? "Verified" : "Unverified"}
                  </span>
                  ,{" "}
                  <span className={clinic.trusted ? styles.trusted : styles.notTrusted}>
                    {clinic.trusted ? "Trusted" : "Not Trusted"}
                  </span>
                </p>
                {clinic.mapLink && (
                  <a href={clinic.mapLink} target="_blank" rel="noreferrer" className={styles.mapLink}>
                    View on Google Maps
                  </a>
                )}
                <div className={styles.buttonGroup}>
                  <button className={styles.updateBtn} onClick={() => setEditingClinic(clinic)}>Update</button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(clinic._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingClinic && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Edit Clinic</h3>
            <input name="name" value={editingClinic.name} onChange={handleUpdateChange} placeholder="Name" />
            <input name="mobile" value={editingClinic.mobile} onChange={handleUpdateChange} placeholder="Mobile" />
            <input name="whatsapp" value={editingClinic.whatsapp} onChange={handleUpdateChange} placeholder="WhatsApp" />
            <input name="mapLink" value={editingClinic.mapLink} onChange={handleUpdateChange} placeholder="Map Link" />
            <input name="address" value={editingClinic.address} onChange={handleUpdateChange} placeholder="Address" />
            <select name="verified" value={String(editingClinic.verified)} onChange={handleUpdateChange}>
              <option value="true">Verified</option>
              <option value="false">Unverified</option>
            </select>
            <select name="trusted" value={String(editingClinic.trusted)} onChange={handleUpdateChange}>
              <option value="true">Trusted</option>
              <option value="false">Not Trusted</option>
            </select>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            <div className={styles.modalButtons}>
              <button onClick={handleUpdateSubmit}>Save</button>
              <button onClick={() => setEditingClinic(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListOfClinic;
