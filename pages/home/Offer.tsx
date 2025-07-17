import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Offer.module.css";
import offer1 from "@/public/card-1.png"
import offer2 from "@/public/card-2.png"
import offer3 from "@/public/card-3.png"
import Image from "next/image";
const slides = [offer1, offer2, offer3
];

const Offer = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <div
      className={styles.sliderWrapper}
      ref={sliderRef}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div className={styles.slide} key={index}>
            <Image
  src={src}
  alt={`Offer ${index}`}
  fill
  objectFit="cover"
  sizes="(max-width: 768px) 90vw, 80vw"
/>

          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
