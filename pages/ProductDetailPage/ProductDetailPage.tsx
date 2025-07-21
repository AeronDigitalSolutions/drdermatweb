import React from "react";
import styles from "@/styles/ProductDetailPage/ProductDetailPage.module.css";
import Image from "next/image";
import mainImage from "@/assets/labrada-main.png";
import img1 from "@/assets/thumb1.png";
import img2 from "@/assets/thumb2.png";
import img3 from "@/assets/thumb3.png";
import img4 from "@/assets/thumb4.png";

const ProductDetailPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.thumbnailList}>
          {[img1, img2, img3, img4].map((img, i) => (
            <div key={i} className={styles.thumbnail}>
              <Image src={img} alt="thumb" />
            </div>
          ))}
        </div>
        <div className={styles.mainImage}>
          <Image src={mainImage} alt="Labrada" />
        </div>
      </div>

      <div className={styles.rightColumn}>
        <p className={styles.breadcrumb}>
          Sports Nutrition &gt; Weight Management &gt; Mass Gainers &gt; Labrada
        </p>
        <p className={styles.category}>Mass Gainers</p>
        <h1 className={styles.title}>
          Labrada Muscle Mass Gainer, 5 kg (11 lb), Chocolate
        </h1>
        <p className={styles.brand}>By <span>Labrada</span></p>
        <div className={styles.ratingRow}>
          <div className={styles.stars}>★★★★☆</div>
          <span className={styles.rating}>4.4 (735 Reviews)</span>
        </div>
        <p className={styles.mrp}>MRP: ₹6,599</p>
        <p className={styles.price}>
          Price: <span>₹5,399</span> <b>18% off</b>
        </p>
        <p className={styles.taxNote}>Inclusive of all taxes</p>
        <div className={styles.premiumBox}>₹5,129 for Premium Member</div>
        <div className={styles.emi}>3 interest free payments of ₹1799.68 with Simpl</div>
        <p className={styles.cashback}>
          Get Flat Rs 300 Cashback (New Users) or Rs 150 cashback (Repeat users) on orders above Rs 2,599 via Simpl pay-in-3
        </p>

        <div className={styles.cartRow}>
          <div className={styles.quantity}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className={styles.cartBtn}>Add To Cart</button>
          <button className={styles.buyBtn}>Buy Now</button>
        </div>

        <div className={styles.weightToggle}>
          <span>Weight</span>
          <button className={styles.selected}>KG</button>
          <button>LB</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
