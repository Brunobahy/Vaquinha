import React, { useState } from "react";
import styles from "./Mensagem.module.css";
import { motion } from "framer-motion";

export default function Mensagem({ texto, foto, textoVermelho }) {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className={styles.mensagem}>
        <span className={styles.clip}></span>
        <div className={styles.container}>
          {foto ? (
            <div className={styles.conteudo}>
              {foto && (
                <img
                  className={styles.foto}
                  src={foto}
                  alt=""
                  onClick={() => setClick(!click)}
                />
              )}
              <p className={styles.texto}>{texto}</p>
            </div>
          ) : (
            <p className={styles.texto}>{texto}</p>
          )}
          <span className={styles.horario}>16:04</span>
          <p className={styles.visto}>&#10003;&#10003;</p>
        </div>
      </div>
      {click && (
        <div className={styles.container__foto__grande}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              className={styles.foto__grande}
              src={foto}
              alt=""
              onClick={() => setClick(!click)}
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
