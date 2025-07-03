"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import styles from "./hero.module.css";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    // you can customize this engine or add presets if needed
    console.log("Particles engine loaded", engine);
  }, []);

  return (
    <div className={styles.heroSection}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#ffffff" }
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 }
            }
          },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            links: {
              enable: true,
              color: "#1976d2",
              distance: 120,
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
    </div>
  );
}
