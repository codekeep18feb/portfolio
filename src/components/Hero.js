// src/components/Hero.js
"use client";

import { motion } from "framer-motion";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.gradientBackground}></div>

      <motion.div
        className={styles.heroText}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Deepak Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Solo Founder · Sr. Frontend Engineer · Indie Maker
        </motion.p>

        <motion.a
          href="https://magicchat.io"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.cta}
        >
          🚀 Visit MagicChat.io
        </motion.a>
      </motion.div>
    </section>
  );
}
