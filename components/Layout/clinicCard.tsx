import React from 'react';
import styles from '@/styles/components/Layout/clinicCard.module.css';
import { useRouter } from 'next/router';
import { Phone } from 'lucide-react';

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

const ClinicCard: React.FC<{ clinic: Clinic, selectedImage?: string }> = ({ clinic, selectedImage }) => {
  const router = useRouter();

  const handleClick=()=> {
    router.push(`/clinics/${clinic.id}`);
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <img 
      src={selectedImage || clinic.images[0]} 
      alt={clinic.name} 
      className={styles.image} 
  
      />

      <div className={styles.info}>
        {/* Clinic Name */}
        <div className={styles.nameRow}>
          <span className={styles.name}>{clinic.name}</span>
          <span className={styles.verified}></span>
        </div>

        {/* Rating and Reviews */}
        <div className={styles.ratingReviewRow}>
          <span className={styles.rating}>⭐ 4.5</span>
          <span className={styles.reviews}>{clinic.reviews} Reviews</span>
        </div>

        {/* Description/Address */}
        <div className={styles.description}>{clinic.address}</div>
      </div>

      {/* Action Buttons */}
      <div className={styles.buttons}>
        <button className={styles.call}> <Phone/> Call</button>
        <button className={styles.whatsapp}>  Whatsapp</button>
        <button className={styles.direction}>📍 Direction</button>
        <button className={styles.details}>👁 See Details</button>
      </div>
    </div>
  );
};

export default ClinicCard;
