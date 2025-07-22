import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/HappyStories.module.css";

const YOUTUBE_REELS = [
  "https://www.youtube.com/embed/LjpGh3jfLn4?autoplay=1&mute=1&controls=0&loop=1&playlist=LjpGh3jfLn4",
  "https://www.youtube.com/embed/LjpGh3jfLn4?autoplay=1&mute=1&controls=0&loop=1&playlist=LjpGh3jfLn4",
  "https://www.youtube.com/embed/LjpGh3jfLn4?autoplay=1&mute=1&controls=0&loop=1&playlist=LjpGh3jfLn4",
  "https://www.youtube.com/embed/LjpGh3jfLn4?autoplay=1&mute=1&controls=0&loop=1&playlist=LjpGh3jfLn4",
  "https://www.youtube.com/embed/LjpGh3jfLn4?autoplay=1&mute=1&controls=0&loop=1&playlist=LjpGh3jfLn4",
  "https://www.youtube.com/embed/LjpGh3jfLn4?autoplay=1&mute=1&controls=0&loop=1&playlist=LjpGh3jfLn4",
];

const Treatment = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) return; // pause autoplay when hovering

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % YOUTUBE_REELS.length);
    }, 3000); // autoplay every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.offsetWidth * 0.8; // card = 80% width
    const index = Math.round(scrollLeft / cardWidth);
    setCurrent(index % YOUTUBE_REELS.length);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.slider}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {YOUTUBE_REELS.map((url, index) => (
          <div
            className={`${styles.card} ${
              index === current ? styles.active : styles.inactive
            }`}
            key={index}
            onMouseEnter={() => {
              setCurrent(index);
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            <iframe
              src={url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`Reel ${index}`}
            />
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {YOUTUBE_REELS.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.activeDot : ""}`}
            onClick={() => {
              setCurrent(i);
              containerRef.current?.scrollTo({
                left: i * containerRef.current.offsetWidth * 0.8,
                behavior: "smooth",
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Treatment;
