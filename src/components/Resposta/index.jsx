import React, { useState } from "react";
import styles from "./Resposta.module.css";
import { motion } from "framer-motion";
import art from "./art.jpg";
import liv from "./liv.jpg";
export default function Resposta({
  texto,
  foto,
  pessoa,
  textoVermelho,
  tempo,
}) {
  const [click, setClick] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: tempo, type:"just"}}
        className={styles.mensagem}
      >
        {pessoa === "art" ? (
          <img src={art} alt="" className={styles.pessoa} />
        ) : (
          <img src={liv} alt="" className={styles.pessoa} />
        )}
        <span className={styles.clip}></span>
        <div className={styles.container}>
          {pessoa === "art" ? (
            <h3 className={styles.nome} style={{ color: "#A5A234" }}>
              Arthur
            </h3>
          ) : (
            <h3 className={styles.nome} style={{ color: "#e26ab6" }}>
              Livian
            </h3>
          )}
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
            <p className={styles.texto}>
              {texto}
              <strong style={{ color: "red", fontWeight: "700" }}>
                {textoVermelho}
              </strong>
            </p>
          )}
          <span className={styles.horario}>16:04</span>
        </div>
      </motion.div>
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
