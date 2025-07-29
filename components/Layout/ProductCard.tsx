import React from "react";
import styles from "@/styles/pages/ProductListingPage.module.css";
import { useRouter } from "next/router";
import { Product } from "../types/product";

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const router = useRouter();

  const buttonAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Product added!");
  };

  return (
    <section className={styles.shopSection}>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div
            key={index}
            className={styles.productCard}
            onClick={() => router.push('/product-detail')}
          >
            <div className={styles.productItem}>
              {product.isBestseller && (
                <span className={styles.bestsellerBadge}>
                  Bestseller <sup style={{ fontSize: "0.8em" }}>✶</sup>
                </span>
              )}

              <img
                src={product.image[0]}
                alt={product.name}
                className={styles.productImage}
              />

              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productSize}>{product.size}</p>

              <div className={styles.productPriceContainer}>
                <p className={styles.productPrice}>{product.price}</p>
                <p className={styles.productMrp}>{product.mrp}</p>
                <p className={styles.productDiscount}>{product.discount}</p>
              </div>

              <button className={styles.productButton} onClick={buttonAction}>
                {product.buttonText || "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
