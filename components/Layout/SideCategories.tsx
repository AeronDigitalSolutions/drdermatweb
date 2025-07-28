import React, { useState } from 'react';
import styles from '@/styles/components/Layout/SideCategories.module.css';

interface Category {
  image: string;
  label: string;
}

interface SideCategoriesProps {
  categories: Category[];
}

const SideCategories: React.FC<SideCategoriesProps> = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Categories</h3>
      <div className={styles.categoryList}>
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${styles.card} ${activeIndex === index ? styles.cardActive : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={cat.image} alt={cat.label} className={styles.image} />
            <div className={styles.label}>{cat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCategories;
