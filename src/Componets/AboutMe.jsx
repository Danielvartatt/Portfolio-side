import { Link } from "react-router-dom";
import styles from "./Component.module.css";

export default function AboutMe() {
  return (
    <div className={styles.PageCard}>
      <h2>Hei,</h2>
      <p>Mitt navn er Daniel</p>
      <Link>
        <button className={styles.button}>Last ned CV</button>
      </Link>
      <img src="./assets/image/Backimg.jpg"></img>
    </div>
  );
}
