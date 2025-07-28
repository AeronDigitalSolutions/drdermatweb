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
import { FaShoppingCart } from 'react-icons/fa';
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
          (

                <section className={styles.container}>
      <h2 className={styles.heading}>
        Green Vally Clinic in Uran, Navi Mumbai
      </h2>
      <p className={styles.paragraph}>
        Green Vally Clinic, a dedicated hospital in Children Hospitals located in Uran, Navi Mumbai,
        offers high-quality healthcare services to patients of all ages. The hospital operates from 
        <strong> Monday:- 12:00 am - 11:59 pm, Tuesday:- Open 24 Hrs, Wednesday:- Open 24 Hrs, Thursday:- Open 24 Hrs, Friday:- Open 24 Hrs, Saturday:- Open 24 Hrs, Sunday:- Open 24 Hrs.</strong>
      </p>

      <h3 className={styles.subheading}>History and Commitment</h3>
      <p className={styles.paragraph}>
        Green Vally Clinic has been a pillar in the Children Hospitals sector for many years. Established in 2008, the hospital caters to a wide range of medical needs.
      </p>

      <h3 className={styles.subheading}>Location</h3>
      <p className={styles.paragraph}>
        Green Vally Clinic is located in Uran, Navi Mumbai, making it easily accessible to patients from neighbouring cities and towns.
      </p>

      <h3 className={styles.subheading}>Services Offered</h3>
      <p className={styles.paragraph}>
        At Green Vally Clinic, patients can expect to receive top-notch treatments and surgeries. The hospital offers a range of services, including:
      </p>
      <ul className={styles.list}>
        <li>
          <strong>Treatments:</strong> Patients can expect to receive top-notch treatment for various medical conditions, including Viral Fever. The hospital's team of professionals is highly skilled and well-versed in their respective domains.
        </li>
        <li>
          <strong>Services:</strong> Green Vally Clinic provides comprehensive services to support patient health and well-being, including Neonatal Intensive Care Unit (NICU). These services ensure a full spectrum of care for patients.
        </li>
      </ul>

      <h3 className={styles.subheading}>Team</h3>
      <p className={styles.paragraph}>
        Green Vally Clinic has a team of esteemed doctors who are dedicated to prioritizing patient comfort. The hospital strives to create a relaxing and welcoming environment for everyone who walks through its doors.
      </p>
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
          <section>
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
            <div>
            </div>
          </div>
        </div>           
<button className={styles.addToCart}>
      <FaShoppingCart className={styles.icon} />
      Add to Cart
    </button>
      </div>
      
    ))}
  </div>
  
</section>
)}

    </div>
    {/* Footer */}
    <Footer/>
    </>
    
  );
};

export default ClinicDetailPage;
