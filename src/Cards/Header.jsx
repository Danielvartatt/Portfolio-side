import { Link } from "react-router-dom";
import styles from "./Cardstyles.module.css";
export default function Header() {
  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles.NavDiv}>
          <Link to="" className={styles.NavButton}>
            Hjem
          </Link>
          <Link to="/Portfolio-side/Prosjekt/" className={styles.NavButton}>
            Prosjekter
          </Link>

          <Link to="/Portfolio-side/Kontaktmeg/" className={styles.NavButton}>
            Kontakt Meg
          </Link>
        </div>
        <div>
          <div>
            <a
              href="./assets/Nedlastninger/CV.jpg"
              download="CV.jpg"
              className={`${styles.NavButtonBold} ${styles.NavButton}`}
            >
              <p>Last ned CV</p>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
