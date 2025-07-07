import React, { useState } from "react";
import styles from "@/styles/components/Layout/FeaturedSection.module.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useRouter } from "next/router";

type ImageSliderItem = {
  url: string;
  heading: string;
}
type ImageSliderProps = {
  slides: ImageSliderItem[];
};



const FeaturedSection = ({ slides }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();

  const imagePaths = [
    "/clinic/1",
    "/clinic/2",
    "/home/findClinicsPage",
  ];

  function showNextImage() {
    setImageIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  }

  function showPreviousImage() {
    setImageIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  }

  function handleImageClick(index: number) {
    router.push(imagePaths[index]);
  }

  return (
    <>
      <div className={styles.featuredSection}>
        <div
          className={styles.sliderWrapper}
          style={{ "--translate-x": `-${imageIndex * 100}%` } as React.CSSProperties}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={styles.imageContainer}
              onClick={() => handleImageClick(index)}
              style={{ cursor: "pointer" }}
            >
              <img src={slide.url} alt={`Image ${index}`} className={styles.imageSliderImage} />
              <h3 className={styles.imageHeading}>{slide.heading}</h3>
            </div>
          ))}
        </div>
        <button onClick={showPreviousImage} className={styles.imageSliderBtn} style={{ left: 0 }}>
          <ArrowBigLeft />
        </button>
        <button onClick={showNextImage} className={styles.imageSliderBtn} style={{ right: 0 }}>
          <ArrowBigRight />
        </button>
      </div>
    </>
  );
};

export default FeaturedSection;
