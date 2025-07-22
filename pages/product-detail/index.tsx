import React, { useState } from 'react';
import styles from '@/styles/ProductDetailPage/ProductDetailPage.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import product1 from "@/public/demo-clinic.jpg";
import Image from 'next/image';
import blackImage from '@/public/card-2.png';


const imageList = [
  product1,
  product1,
  product1,
  product1,
];

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(imageList[0]);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState<'KG' | 'LB'>('KG');

  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <div className={styles.leftColumn}>
          <div className={styles.thumbnailList}>
            {imageList.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="thumb"
                className={`${styles.thumb} ${activeImage === img ? styles.active : ''}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
          <div className={styles.mainImageWrapper}>
            <Image src={activeImage} alt="Main" className={styles.mainImage} />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.breadcrumb}>Sports Nutrition &gt; Weight Management &gt; Mass Gainers &gt; Labrada Muscle Mass Gainer</p>
          <h1 className={styles.title}>Labrada Muscle Mass Gainer, 5 kg (11 lb), Chocolate</h1>
          <p className={styles.brand}>By <span>Labrada</span></p>

          <div className={styles.rating}>
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.halfStar} />
            <span>4.4 (735 Reviews)</span>
            <FaRegHeart className={styles.icon} />
            <FiShare2 className={styles.icon} />
          </div>

          <div className={styles.priceBox}>
            <p className={styles.mrp}>MRP: <span>₹6,599</span></p>
            <p className={styles.price}>Price: <span>₹5,399</span> <span className={styles.discount}>18% off</span></p>
            <p className={styles.tax}>Inclusive of all taxes</p>
            <p className={styles.delivery}>Delivery by 10 today</p>
            <div className={styles.memberPrice}>₹5,129 for Premium Member</div>
          </div>

          <div className={styles.paymentInfo}>
            <p>3 interest free payments of ₹1799.68 with <span className={styles.simpl}>Simpl</span></p>
            <p >Get Rs 300 Cashback (New Users) or Rs 150 cashback (Repeat users)<br/> on orders above Rs 2,599 via Simpl pay-in-3</p>
          </div>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}><AiOutlineMinus /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(prev => prev + 1)}><AiOutlinePlus /></button>
            </div>
            <button className={styles.addToCart}>Add To Cart</button>
            <button className={styles.buyNow}>Buy Now</button>
          </div>

          <div className={styles.weightSwitch}>
            <p>Weight</p>
            <button onClick={() => setUnit('KG')} className={unit === 'KG' ? styles.activeUnit : ''}>KG</button>
            <button onClick={() => setUnit('LB')} className={unit === 'LB' ? styles.activeUnit : ''}>LB</button>
          </div>
        </div>
      </div>




      {/* Additional Details Section Below */}
     
<section className={styles.detailsSection}>
      <h2 className={styles.title}>Product Details of MuscleBlaze Micronised Creatine Monohydrate, 100 g</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.leftBox}>
          <ul className={styles.bulletList}>
            <li><strong>Strength & Power Boost</strong> - 3g of pure creatine monohydrate enhances muscle strength and explosive power for intense workouts.</li>
            <li><strong>Improves Lean Muscle Mass</strong> - Helps fuel muscle growth, making it ideal for athletes and fitness enthusiasts.</li>
            <li><strong>Enhanced Endurance</strong> - Supports prolonged performance by reducing muscle fatigue.</li>
            <li><strong>Boosts ATP Production</strong> - Aids in rapid energy release, ensuring sustained power during training.</li>
            <li><strong>Fast Absorption, No Grit</strong> - Micronised for better solubility and faster absorption, ensuring no residue or bloating.</li>
          </ul>
        </div>
        <div className={styles.rightBox}>
          <h4>Seller Information</h4>
          <p><strong>Sold By:</strong> <span className={styles.highlight}>Bright Nutricare Private Limited</span></p>
          <p>Wing A, B and C, 1st Floor, Tower B, The Presidency Tower, Opp. Govt. Girls College, Sector 14, MG Road, Gurugram 122001, Haryana</p>

          <p><strong>Marketed By:</strong> BRIGHT LIFECARE PVT. LTD. Wing C, 2nd Floor, Tower-B, The Presidency, Anamika Enclave, Sector-14, Mehrauli Gurgaon Road, Opposite Govt. Girls College, Gurugram, Haryana-122001, Gurgaon, Gurugram Haryana-122001</p>
          <p>Fulfilled by MuscleBlaze</p>

          <p><strong>Manufactured By:</strong> Sapiens Labs, Village Dhana, Bagbania, P.O. Manpura, Tehsil Nalagarh, Solan (Himachal Pradesh), 174101, Email: <span className={styles.email}>care@healthkart.com</span></p>

          <p><strong>Brand:</strong> <span className={styles.brand}>MuscleBlaze</span></p>

          <h4>Customer Care Details:</h4>
          <p>Contact: 0124-461-64444</p>
          <p>Email: <span className={styles.email}>care@healthkart.com</span></p>
        </div>
      </div>
    </section>


<section>
<div className={styles.detailsSection}>
      <div className={styles.infoBox}>
        <h2 className={styles.title}>Product Information of MuscleBlaze Micronised Creatine Monohydrate, 100 g</h2>
        <h4 className={styles.subheading}>Supplement Info</h4>

        <div className={styles.section}>
          <h3>Additional Information</h3>
          <div className={styles.infoGrid}>
            <div>
              <strong>Country of Origin</strong>
              <p>India</p>
            </div>
            <div>
              <strong>Flavour</strong>
              <p>Unflavoured</p>
            </div>
            <div>
              <strong>Brand Origin</strong>
              <p>Indian</p>
            </div>
            <div>
              <strong>Form</strong>
              <p>Powder</p>
            </div>
            <div>
              <strong>Goal</strong>
              <p>Increases Stamina, Muscle Building</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>General Traits</h3>
          <div className={styles.infoGrid}>
            <div>
              <strong>Weight</strong>
              <p>100 g</p>
            </div>
            <div>
              <strong>Number of Servings</strong>
              <p>33</p>
            </div>
            <div>
              <strong>Serving Size</strong>
              <p>3 g</p>
            </div>
            <div>
              <strong>Vegetarian/Non-Vegetarian</strong>
              <p>Vegetarian</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Other Traits</h3>
          <div className={styles.infoGrid}>
            <div>
              <strong>Product Code/UPC</strong>
              <p>8906165788642</p>
            </div>
            <div>
              <strong>Flavour Base</strong>
              <p>Others</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageBox}>
        <Image src={blackImage} alt="Creatine Label" className={styles.image} />
      </div>
    </div>


</section>

    </div>
  );
}

