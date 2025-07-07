// pages/clinics/[clinicId].tsx
import { useRouter } from 'next/router';
import clinics from '@/data/ClinicsData'; // Adjust path as needed
import styles from '@/styles/pages/clinicDetailPage.module.css';
import { useState } from 'react';
import ClinicCard from '@/components/Layout/clinicCard';
import Footer from '@/components/Layout/Footer';
import Ratings from '@/components/Layout/Reviews';
import reviews from "@/data/reviews"; // Import reviews data
import Topbar from '@/components/Layout/Topbar';


const icons = [
    { label: 'Dye Free', img: '/icons/dye-free.png' },
    { label: 'Mineral Oil Free', img: '/icons/mineral-free.png' },
    { label: 'Paraben Free', img: '/icons/paraben-free.png' },
    { label: 'Sulfate Free', img: '/icons/sulfate-free.png' },
  ];


const ClinicDetailPage = () => {
  const router = useRouter();
  const { clinicId } = router.query;

  const clinic = clinics[Number(clinicId)];

  const [selectedImage, setSelectedImage] = useState(clinic?.images?.[0]);
  const [activeTab, setActiveTab] = useState('Details');

  if (!clinic) return <div>Loading clinic info...</div>;


  return (
    <>
    <div className={styles.pageWrapper}>
      <Topbar />

      <div className={styles.topSection}>
        <div className={styles.imageSection}>
          {clinic.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setSelectedImage(img)}
              className={`${styles.sideImage} ${selectedImage === img ? styles.active : ''}`}
              alt="Clinic preview"
            />
          ))}
        </div>

        <div className={styles.clinicCardSection}>
        <ClinicCard clinic={clinic} selectedImage={selectedImage}/>
        <span></span>
        </div>
      </div>

      {/* Tabs Section */}
      <div className={styles.tabContainer}>
    <button
      className={`${styles.tabButton} ${activeTab === 'Details' ? styles.activeTab : ''}`}
      onClick={() => setActiveTab('Details')}
    >
      Details
    </button>
    <button
      className={`${styles.tabButton} ${activeTab === 'Services' ? styles.activeTab : ''}`}
      onClick={() => setActiveTab('Services')}
    >
      Services
    </button>
    <button
      className={`${styles.tabButton} ${activeTab === 'Reviews' ? styles.activeTab : ''}`}
      onClick={() => setActiveTab('Reviews')}
    >
      Reviews
    </button>
</div>

    


    {activeTab === 'Details' && 
          (<section>
            <div className={styles.detailsContainer}>
              <div className={styles.codShipping}>
                <div>
                  <img src="/icons/cod.png" alt="COD" />
                  <p><strong>COD Available</strong><br />@ ₹19 per Order</p>
                </div>
                <div>
                  <img src="/icons/shipping.png" alt="Shipping" />
                  <p><strong>Free Shipping</strong><br />Above ₹399</p>
                </div>
              </div>

              <div className={styles.contactSection}>
                <p>Have Queries or Concerns? Contact Us</p>
                <button className={styles.contactButton}>Contact Us</button>
              </div>

              <div className={styles.features}>
                {icons.map((item, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <img src={item.img} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>

              <div className={styles.paymentSection}>
                <p>Pay Using</p>
                <img src="/icons/payment-methods.png" alt="Payments" />
                <div className={styles.securePayment}>
                  <img src="/icons/secure-payment.png" alt="Secure Payment" />
                  <p>100% Secure Payment</p>
                </div>
              </div>

              <div className={styles.socials}>
                <img src="/icons/socials.png" alt="Social Icons" />
              </div>
            </div>
          </section>
        )}
          
      
  

   { activeTab === 'Reviews' &&
        
        (<section>
          <div className={styles.reviewsContainer}>
            {activeTab === 'Reviews' && (
            <section className={styles.reviewSection}>
              {/* ... static review stats ... */}

              <Ratings />
              
              {reviews.map((review: { initials: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; verified: any; date: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; rating: number; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; content: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, idx: React.Key | null | undefined) => (
                <div className={styles.reviewCard} key={idx}>
                  <div className={styles.avatar}>{review.initials}</div>
                  <div className={styles.reviewContent}>
                    <div className={styles.reviewTop}>
                      <strong>{review.name}</strong>
                      {review.verified && <span className={styles.verified}>Verified User</span>}
                      <span className={styles.reviewDate}>{review.date}</span>
                    </div>
                    <div className={styles.reviewStars}>{"★".repeat(review.rating)}</div>
                    <p className={styles.reviewText}>
                      <strong>{review.title}</strong><br />
                      {review.content}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}

          </div>
        </section>
      )}
        
    
  
        {activeTab === 'Services' && (
  <div className={styles.servicesTabContainer}>
    {[1, 2, 3].map((_, index) => (
      <div key={index} className={styles.serviceCard}>
        <div className={styles.serviceContent}>
          <img
            src="/skin_hair.jpg"
            alt="Service"
            className={styles.serviceImage}
          />
          <div className={styles.serviceText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec est vel nisi tincidunt
              maximus quis sit amet arcu. Phasellus fringilla diam et dui hendrerit blandit.
            </p>
          </div>
        </div>
        <p className={styles.serviceLabel}>Service</p>
      </div>
    ))}
  </div>
)}

    </div>
    {/* Footer */}
    <Footer/>
    </>
    
  );
};

export default ClinicDetailPage;
