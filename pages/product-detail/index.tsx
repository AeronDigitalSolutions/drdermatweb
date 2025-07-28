import React, { useState } from 'react';
import styles from '@/styles/ProductDetailPage/ProductDetailPage.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import product1 from "@/public/demo-clinic.jpg";
import product2 from "@/public/womens_health.jpg";
import product3 from "@/public/product2.jpg";
import product4 from "@/public/product3.jpg";
import Image from 'next/image';
import MobileNavbar from "@/components/Layout/MobileNavbar";
import Topbar from "@/components/Layout/Topbar";
import Footer from "@/components/Layout/Footer";


const imageList = [
  product1,
  product2,
  product3,
  product4,
];

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(imageList[0]);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState<'KG' | 'LB'>('KG');

  return (
    <>
    <Topbar/>
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
            <p className={styles.delivery}>Delivery by 10:00 PM today</p>
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

{/* Existing content remains unchanged... */}

{/* Screenshot-Based Section - Added Below */}
<section className={styles.creatineInfoSection}>
  <h2 className={styles.creatineTitle}>Product Information of MuscleBlaze Micronised Creatine Monohydrate, 100 g</h2>
  <p className={styles.subTitle}>Supplement Info</p>

  <div className={styles.creatineWrapper}>
    <div className={styles.infoLeft}>
      <h4 className={styles.infoHeading}>Additional Information</h4>
      <ul>
        <li><strong>Country of Origin:</strong> India</li>
        <li><strong>Flavour:</strong> Unflavoured</li>
        <li><strong>Brand Origin:</strong> Indian</li>
        <li><strong>Form:</strong> Powder</li>
        <li><strong>Goal:</strong> Increases Stamina, Muscle Building</li>
      </ul>

      <h4 className={styles.infoHeading}>General Traits</h4>
      <ul>
        <li><strong>Weight:</strong> 100 g</li>
        <li><strong>Number of Servings:</strong> 33</li>
        <li><strong>Serving Size:</strong> 3 g</li>
        <li><strong>Vegetarian/Non-Vegetarian:</strong> Vegetarian</li>
      </ul>

      <h4 className={styles.infoHeading}>Other Traits</h4>
      <ul>
        <li><strong>Product Code/UPC:</strong> 8906165788642</li>
        <li><strong>Flavour Base:</strong> Others</li>
      </ul>
    </div>

    <div className={styles.infoRight}>
      <div className={styles.imageBlock}>
        <p className={styles.creatineLabel}>Creatine Monohydrate.</p>
        <p className={styles.creatineSubLabel}>CONTAINS NO DOPING INGREDIENTS (As per WADA/NADA list)</p>
        <p className={styles.creatineCompany}>Bright Lifecare Pvt. Ltd., CPCB REGN. No. <br />BO-23-000-08-AAECB5311J-23</p>
        <div className={styles.fssai}>
          <p>Lic. No. <strong>10015064000576</strong></p>
        </div>
        <div className={styles.iconRow}>
          <div className={styles.trashIcon}></div>
          <div className={styles.recycleIcon}></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* MuscleBlaze Creatine Information Section */}
<section className={styles.creatineSection}>
  <h2 className={styles.creatineHeading}>
    Other Information of MuscleBlaze Micronised Creatine Monohydrate, 100 g
  </h2>
  <p className={styles.creatineSubtext}>
    MuscleBlaze® Micronised Creatine Monohydrate is designed for those who refuse to settle for average. 
    With 3g of ultra-pure, fast-absorbing creatine monohydrate per serving, it fuels your muscles with continuous energy, 
    helping you train harder, lift heavier, and perform longer.
  </p>
  <p className={styles.creatineSubtext}>
    This unflavoured creatine powder blends seamlessly into water, protein shakes, or fruit juice without any grittiness or bloating. 
    Micronised for superior mixability, it ensures better absorption for maximum performance and minimal waste. 
    Whether you’re an athlete, bodybuilder, or fitness enthusiast, this formula is built to support muscle strength, endurance, 
    and overall workout efficiency.
  </p>

  <div className={styles.benefitsSection}>
    <h3 className={styles.benefitsHeading}>Product Benefits</h3>
    <ul className={styles.benefitList}>
      <li><strong>Increases Strength & Power</strong> – Helps push beyond limits for peak performance.</li>
      <li><strong>Supports Muscle Growth</strong> – Ideal for those looking to build lean mass.</li>
      <li><strong>Enhances Stamina & Endurance</strong> – Delays fatigue for prolonged training sessions.</li>
      <li><strong>Faster Recovery</strong> – Reduces muscle soreness post-workout, ensuring quicker recovery.</li>
      <li><strong>Zero Fillers, Zero Additives</strong> – No unnecessary ingredients, just pure creatine monohydrate.</li>
    </ul>
  </div>
</section>
    </div>
        <MobileNavbar/>
        <Footer/>
    </>
  );
}

