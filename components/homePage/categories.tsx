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
  { name: "General Physician", image: "/genral.png" },
  { name: "Skin & Hair", image: "/women.png" },
  { name: "Women's Health", image: "/skin_hair.png" },
  { name: "Child Specialist", image: "/child.png" },
  { name: "Ear, Nose, Throat", image: "/ear.png" },
  { name: "Mental Wellness", image: "/mental.png" },
  { name: "Dental Care", image: "/dental.png" },
  { name: "More", image: "/twenty.png" },
  { name: "20+ More ", image: "/twenty.png" },
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
