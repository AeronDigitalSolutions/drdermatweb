import React, { useState } from 'react';
import ClinicCard from '@/components/Layout/clinicCard';
import SideCategories from '@/components/Layout/SideCategories';
import styles from '@/styles/pages/findClinicsPage.module.css';
import clinics from '@/data/ClinicsData'; // Static clinic data with IDs
import Footer from '@/components/Layout/Footer';
import Topbar from '@/components/Layout/Topbar';

const clinicCategories = [
  { image: "/doctor1.jpg", label: "General Physician" },
  { image: "/doctor1.jpg", label: "Ear, Nose, Throat" },
  { image: "/doctor1.jpg", label: "Skin & Hair" },
  { image: "/doctor1.jpg", label: "Mental Wellness" },
  { image: "/doctor1.jpg", label: "Women’s Health" },
  { image: "/doctor1.jpg", label: "Dental Care" },
  { image: "/doctor1.jpg", label: "Child Specialist" },
  { image: "/doctor1.jpg", label: "More" },
];

const ITEMS_PER_PAGE = 6;

const FindClinicsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedClinics = clinics.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(clinics.length / ITEMS_PER_PAGE);

  return (
    <>
      <Topbar />
      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <SideCategories categories={clinicCategories} />
        </aside>

        {/* Main content */}
        <main className={styles.main}>
         <div className={styles.headerRow}>
  <h2 className={styles.title}>Find Clinics</h2>
  <input
    type="text"
    placeholder="Search clinics..."
    className={styles.searchBar}
  />
</div>
 

          {paginatedClinics.map(clinic => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}

          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`${styles.pageButton} ${currentPage === idx + 1 ? styles.active : ''}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default FindClinicsPage;
