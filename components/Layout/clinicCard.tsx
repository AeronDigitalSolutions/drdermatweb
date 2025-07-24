import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/Layout/clinicCard.module.css';
import { useRouter } from 'next/router';
import { Phone } from 'lucide-react';
import MobileNavbar from './MobileNavbar';

interface Clinic {
  id: number;
  name: string;
  doctorName: string;
  images: string[];
  reviews: number;
  address: string;
  description: string;
}

interface ClinicCardProps {
  clinic: Clinic;
  selectedImage?: string;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ clinic }) => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % clinic.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clinic.images.length]);

  const handleClick = () => {
    router.push(`/clinics/${clinic.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.leftSection}>
        <img
          src={clinic.images[currentImageIndex]}
          alt={clinic.name}
          className={styles.image}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{clinic.name}</span>
          <span className={styles.verified}>✔ Verified</span>
        </div>

        <div className={styles.ratingReviewRow}>
          <span className={styles.rating}>⭐ 4.5</span>
          <span className={styles.reviews}>{clinic.reviews} Reviews</span>
          <span className={styles.trust}>Trust</span>
          <span className={styles.topSearch}>🔍 Top Search</span>
        </div>

        <div className={styles.addressRow}>
          📍 {clinic.address}
        </div>

        <div className={styles.descriptionRow}>
          Open 24 Hrs • 12 Years in Healthcare • <b>"Quick service"</b> 7 Suggestions
        </div>

        <div className={styles.buttons}>
          <button className={styles.call}><Phone size={16} /> Call</button>
          <button className={styles.whatsapp}>💬 Whatsapp</button>
          <button className={styles.direction}>📍 Direction</button>
          <button className={styles.details}>👁 See Details</button>
        </div>
      </div>

      <MobileNavbar />
    </div>
  );
};

export default ClinicCard;
