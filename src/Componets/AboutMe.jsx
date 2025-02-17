import { Link } from "react-router-dom";
import styles from "./Component.module.css";

export default function AboutMe() {
  return (
    <div className={styles.PageCard}>
      <div className={styles.Gridaboutme}>
        <div>
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
      <div>
        <div>
          <div
            className={styles.SquareInline}
            style={{
              position: "absolute",
              rotate: "30deg",
              left: 600,
              top: 488,
              zIndex: 1,
            }}
          ></div>
          <div
            className={styles.SquareInline}
            style={{
              position: "absolute",
              rotate: "64deg",
              left: 681,
              top: 88,
            }}
          ></div>
          <div
            className={styles.SquareInline}
            style={{
              position: "absolute",
              rotate: "64deg",
              left: 46,
              top: 299,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
