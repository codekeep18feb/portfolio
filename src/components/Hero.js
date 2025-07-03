"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import styles from "./hero.module.css";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles loaded", engine);
  }, []);

  return (
    <section className={styles.heroSection}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#ffffff" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              repulse: { distance: 100 }
            }
          },
          particles: {
            number: { value: 35 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            links: {
              enable: true,
              distance: 130,
              color: "#1976d2",
              opacity: 0.4,
              width: 1
            }
          },
          detectRetina: true
        }}
      />
      <div className={styles.heroText}>
        <h1>Deepak Singh</h1>
        <p>Solo Founder · Sr. Frontend Engineer · Indie Maker</p>
        <a href="https://magicchat.io" target="_blank" rel="noopener noreferrer">
          🚀 Visit MagicChat.io
        </a>
      </div>
    </section>
  );
}
