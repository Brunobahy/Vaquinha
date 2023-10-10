import React from "react";
import styles from "./Figurinha.module.css";
import figurinhaArt from "./figArt.webp";
import figurinhaLiv from "./figLiv.webp";
import { motion } from "framer-motion";

export default function Figurinha({ figurinha, horario, tempo }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: tempo, type: "just" }}
      className={styles.box}
    >
      {figurinha === "art" ? (
        <img src={figurinhaArt} alt="" className={styles.figurinha} />
      ) : (
        <img src={figurinhaLiv} alt="" className={styles.figurinha} />
      )}
      <span className={styles.horario}>{horario}</span>
    </motion.div>
  );
}
