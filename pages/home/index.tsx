import React from "react";
import { useRouter } from "next/router";
import Topbar from "@/components/Layout/Topbar";
import Footer from "@/components/Layout/Footer";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/Layout/SearchBar"; 
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "@/components/Layout/ProductCard";
import ClinicCategories from "@/components/homePage/categories";
import OfferCard from "@/components/homePage/offerCard";
import FeaturedSection from "@/components/Layout/FeaturedSection";
import {productsCardListData} from "@/data/productsCardListData";
import Offer from "./Offer";
import Treatment from "./Treatment";
import HappyStories from "./HappyStories";


const index = () => {
  const router = useRouter(); // Initialize router for navigation

  return (
    <>
      <Topbar />

      <div className={styles.blueBackground}>
            <SearchBar/>
        <div style={{position:"relative"}}>
          <FeaturedSection 
          slides={[
            {url: "/card-1.png", heading: "Book A Clinic Appointment"},
            {url: "/card-2.png", heading: "Book A Video Consultation"},
            {url: "/card-3.png", heading: "Top Dermatology Clinics"}
          ]}/>
        </div>
      </div>

<div className={styles.bgcolor}>
       {/* //8 boxes  find top derma clinic*/}
       <ClinicCategories title="Find Top Dermatology Products" backgroundColor="white" textBg="#D9EBFD" border="2px solid #D9EBFD" />

       <div style={{
        padding: "16px 20px",
        backgroundColor: "#ffffff", // Optional: to visually separate from above
        marginTop: "1rem" // Creates spacing between sections
      }}>
        {/* <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Exclusive Offers</h1> */}
       
      {/* featured section */}
      <h1 style={{ textAlign: "center", marginBottom: "0px" , textDecoration:"underline"}}>Top Products</h1>

      <ProductCard products={productsCardListData.slice(0,12)}/>


       <div style={{
        padding: "0px 20px",
        backgroundColor: "#ffffff", // Optional: to visually separate from above
        marginTop: "0px" // Creates spacing between sections
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" , textDecoration:"underline" }}>Exclusive Offers</h2>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "nowrap"
        }}>
          <Offer></Offer>
        </div>
      </div>
      </div>


      {/* //8 boxes  find top derma clinic*/}
      <div style={{  padding: "0px 0 40px 0"}}>
      <ClinicCategories title="Popular Product Categories" backgroundColor="#D3D3D3" textBg="white" border="7px solid white"/>
      </div>

     
       {/* //8 boxes  find top derma clinic*/}
      <ClinicCategories title="Find The Best Treatment Plans" backgroundColor="white" textBg="#D9EBFD" border="2px solid #D9EBFD"  />

    </div>

     {/* Section: Offers */}
      <div style={{
        padding: "10px 20px",
        backgroundColor: "#ffffff", // Optional: to visually separate from above
        marginTop: "-40px" // Creates spacing between sections
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" , marginTop: "50px", textDecoration:"underline" }}>Exclusive Offers</h2>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
<Offer></Offer>
        </div>
      </div>



     {/* Section: Offers */}
      <div style={{
        padding: "10px 20px",
        backgroundColor: "#ffffff", // Optional: to visually separate from above
        marginTop: "-40px" // Creates spacing between sections
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" , marginTop: "50px", textDecoration:"underline" }}>Treatment Procedure</h2>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
<Treatment/>
        </div>
      </div>



      
     {/* Section: Offers */}
      <div style={{
        padding: "10px 20px",
        backgroundColor: "#ffffff", // Optional: to visually separate from above
        marginTop: "-40px" // Creates spacing between sections
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" , marginTop: "50px", textDecoration:"underline" }}>Happy Stories</h2>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
<HappyStories/>
        </div>
      </div>


       {/* footer */}
       <Footer />

    </>
  )

};

export default index;
