import React from "react";
import styles from "@/styles/components/homePage/categories.module.css";
import { useRouter } from "next/router";

interface Category {
  name: string;
  image: string;
}

interface ClinicCategoryProps {
  title: string;
  categories?: Category[];
  backgroundColor?: string;
  textBg?: string;
  border?: string;
}

const categories: Category[] = [
  { name: "General Physician", image: "/cat-1.png" },
  { name: "Skin & Hair", image: "/cat-2.png" },
  { name: "Women's Health", image: "/cat-3.png" },
  { name: "Child Specialist", image: "/cat-4.png" },
  { name: "Ear, Nose, Throat", image: "/cat-5.png" },
  { name: "Mental Wellness", image: "/cat-6.png" },
  { name: "Dental Care", image: "/cat-7.png" },
  { name: "More", image: "/cat-8.png" },
  { name: "20+ More ", image: "/cat-9.png" },
];

const ClinicCategories: React.FC<ClinicCategoryProps> = ({
  title,
  backgroundColor,
  textBg,
  border,
}) => {
  const router = useRouter();

  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === "More") {
      router.push("/products/productListing");
    }
  };

  return (
    <div
      className={styles.cliniContainer}
      style={{ backgroundColor: backgroundColor || "#f0f0f0" }}
    >
      <h2 className={styles.clinicTitle}>{title}</h2>
      <div className={styles.gridContainer}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${styles.categoryCard} ${
              category.name === "More" ? styles.mobileOnly : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
            style={{
              cursor: "pointer",
              backgroundColor: textBg || "#D9EBFD",
              border: border || "none",
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              className={styles.categoryImg}
            />
            <p className={styles.categoryText}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicCategories;
