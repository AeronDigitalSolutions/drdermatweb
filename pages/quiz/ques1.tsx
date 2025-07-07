import React from "react";
import styles from "@/styles/quiz/ques1.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "@/components/Layout/Footer";
import Topbar from "@/components/Layout/Topbar";

const ChooseConcern = () => {
  const router = useRouter();

  const handleClick = (concern: string) => {
    router.push("/quiz/ques2"); // Redirect to /quiz/skin or /quiz/hair
  };

  return (
    <>
    <div className={styles.topbar}>
    <Topbar/>

    </div>
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Choose Your Concern</h2>
        <div className={styles.options}>
          <div className={styles.optionCard}>
            <Image
              src="/skin.png" // Place image in public/images folder
              alt="Skin"
              width={100}
              height={100}
              className={styles.image}
            />
            <p className={styles.label}>Skin</p>
            <button className={styles.button} onClick={() => handleClick("skin")}>
              Click Here
            </button>
          </div>
          <div className={styles.optionCard}>
            <Image
              src="/hair.png" // Place image in public/images folder
              alt="Hair"
              width={100}
              height={100}
              className={styles.image}
            />
            <p className={styles.label}>Hair</p>
            <button className={styles.button} onClick={() => handleClick("hair")}>
              Click Here
            </button>
          </div>
        </div>
      </div>
    </div>
<Footer/>
    
    
</>
  );
};

export default ChooseConcern;
