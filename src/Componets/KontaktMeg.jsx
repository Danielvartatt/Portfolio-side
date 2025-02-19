import { Link } from "react-router-dom";
import styles from "./Component.module.css";
export default function KontaktMeg() {
  return (
    <div className={styles.PageCardkontakt} id="Manul">
      <h2> Kontakt Informasjon </h2>
      <div className={styles.Contactme}>
        <img
          src="./src/assets/Image/icons/gmail.png"
          className={styles.Iconstyle}
        ></img>
        <p> : daniel1.kodehode@gmail.com</p>
      </div>
      <div className={styles.Contactme}>
        <img
          src="./src/assets/Image/icons/discord.png"
          className={styles.Iconstyle}
        ></img>
        <p>:daniel1_kodehode</p>
      </div>
      <div className={styles.Contactme}>
        <img
          src="./src/assets/Image/icons/github.png"
          className={styles.Iconstyle}
        ></img>
        <p> : Danielvartatt</p>
      </div>
      <div></div>
    </div>
  );
}
