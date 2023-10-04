import React from "react";
import styles from "./Cabecalho.module.css";
import {
  BsArrowLeft,
  BsThreeDotsVertical,
  BsFillTelephoneFill,
  BsCameraVideoFill,
} from "react-icons/bs";
import foto from "./foto.jpeg";

export default function Cabecalho() {
  return (
    <ul className={styles.lista}>
      <li className={styles.info}>
        <BsArrowLeft />
        <img src={foto} alt="" className={styles.foto} />
        <div>
          <h1 className={styles.nome}>
            Arthur<strong>♡</strong>Livian
          </h1>
          <h2 className={styles.status}>Arthur,Livia,Você</h2>
        </div>
      </li>
      <li className={styles.icons}>
        <BsCameraVideoFill />
        <BsFillTelephoneFill />
        <BsThreeDotsVertical />
      </li>
    </ul>
  );
}
