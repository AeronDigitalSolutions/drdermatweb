import React, { useRef, useState } from "react";
import styles from "@/styles/Treatment.module.css";

const reels = [
  "https://www.youtube.com/embed/1ROYHJfG8ic?autoplay=1&mute=1&loop=1&playlist=1ROYHJfG8ic",
  "https://www.youtube.com/embed/K4TOrB7at0Y?autoplay=1&mute=1&loop=1&playlist=K4TOrB7at0Y",
  "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&playlist=tgbNymZ7vqY",
];

const Treatment = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50 && current < reels.length - 1) {
      setCurrent((prev) => prev + 1);
    } else if (delta < -50 && current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.reelWrapper}>
      <h2 className={styles.title}>Treatment Procedures</h2>
      <div
        className={styles.carousel}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {reels.map((url, index) => (
          <div key={index} className={styles.reel}>
            <iframe
              src={url}
              title={`Reel ${index + 1}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {reels.map((_, idx) => (
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

export default Treatment;
