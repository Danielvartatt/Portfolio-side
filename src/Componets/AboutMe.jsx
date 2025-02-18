import { Link } from "react-router-dom";
import styles from "./Component.module.css";

export default function AboutMe() {
  return (
    <div className={styles.PageCard}>
      <div className={styles.Gridaboutme}>
        <div className={styles.Font24}>
          <h2>Hei,</h2>
          <p>Mitt navn er Daniel</p>
          <Link>
            <button className={styles.button}>Last ned CV</button>
          </Link>
        </div>
        <div>
          <img
            alt="manul"
            src="./src/assets/Image/backimg.jpg"
            className={styles.imgAboutme}
          ></img>
        </div>
      </div>
    </div>
  );
}
