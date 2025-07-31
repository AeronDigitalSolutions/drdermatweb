
import styles from "@/styles/quiz/ques1.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "@/components/Layout/Footer";
import Topbar from "@/components/Layout/Topbar";
import React, { useState } from 'react';
const ChooseConcern = () => {
  const router = useRouter();

  const handleClick = (concern: string) => {
    router.push("/quiz/ques2"); // Redirect to /quiz/skin or /quiz/hair
  };


// const [selectedOption, setSelectedOption] = useState<string>('');
//   const router = useRouter();

//   const handleOptionChange = (value: string) => {
//     setSelectedOption(value);

//     // Simulate saving the answer and navigate to next step
//     setTimeout(() => {
//       router.push('ques2'); // Update this to your actual next page route
//     }, 300);
//   };



  return (
    <>
    <div className={styles.topbar}>
    <Topbar/>

    </div>
    <div className={styles.container}>
      <div className={styles.card}>
                <h2 className={styles.heading}>Take A Test</h2>
        <h2 className={styles.heading}>Choose Your Concern</h2>
        <div className={styles.options}>
          <div className={styles.optionCard}>
            <Image
              src="/skin1.png" // Place image in public/images folder
              alt="Skin"
              width={120}
              height={120}
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
              width={120}
              height={120}
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


    {/* <div className={styles.container}>
      <div className={styles.header}>
        <a className={styles.backLink} href="#">← Previous</a>
        <a className={styles.exitLink} href="#">Exit</a>
      </div>

      <div className={styles.stepper}>
        <div className={`${styles.step} ${styles.completed}`}>About<br />You</div>
        <div className={`${styles.step} ${styles.completed}`}>Hair<br />Health</div>
        <div className={`${styles.step} ${styles.active}`}>Internal<br />Health</div>
        <div className={styles.step}>Scalp<br />Assessment</div>
      </div>


      <h2 className={styles.title}>How stressed are you?</h2>

      <form className={styles.form}>
        {['None', 'Low', 'Moderate(work, family etc )', 'High (Loss of close one, separation, home, illness)'].map(option => (
          <label key={option} className={styles.radioLabel}>
            <input type="radio"
              name="stress"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </form>
    </div> */}
<Footer/>
    
    
</>
  );
};

export default ChooseConcern;
