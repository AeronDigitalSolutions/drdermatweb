import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/HappyStories.module.css";

const YOUTUBE_REELS = [
  "LjpGh3jfLn4",
  "LjpGh3jfLn4",
  "LjpGh3jfLn4",
  "LjpGh3jfLn4",
  "LjpGh3jfLn4",
  "LjpGh3jfLn4",
];

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const HappyStories = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isApiReady, setIsApiReady] = useState(false);
  const [mutedStates, setMutedStates] = useState(YOUTUBE_REELS.map(() => true));

  const playerInstances = useRef<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load YouTube iframe API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      setIsApiReady(true);
    };

    if (window.YT && window.YT.Player) {
      setIsApiReady(true);
    }
  }, []);

  // Initialize players when API is ready
  useEffect(() => {
    if (!isApiReady) return;

    YOUTUBE_REELS.forEach((videoId, index) => {
      const player = new window.YT.Player(`player-${index}`, {
        height: "100%",
        width: "100%",
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
          fs: 0,
          disablekb: 1,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
      playerInstances.current[index] = player;
    });
  }, [isApiReady]);

  // Autoplay scroll logic
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % YOUTUBE_REELS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.offsetWidth * 0.8;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrent(index % YOUTUBE_REELS.length);
  };

  const toggleMute = (index: number) => {
    const player = playerInstances.current[index];
    if (!player) return;

    const isMuted = mutedStates[index];
    if (isMuted) {
      player.unMute();
    } else {
      player.mute();
    }

    const newStates = [...mutedStates];
    newStates[index] = !isMuted;
    setMutedStates(newStates);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider} ref={containerRef} onScroll={handleScroll}>
        {YOUTUBE_REELS.map((videoId, index) => (
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
            <div className={styles.videoWrapper}>
              <div id={`player-${index}`} />
              <button
                className={styles.muteButton}
                onClick={() => toggleMute(index)}
              >
                {mutedStates[index] ? "🔇" : "🔊"}
              </button>
            </div>
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

export default HappyStories;
