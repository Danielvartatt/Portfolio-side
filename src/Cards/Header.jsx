import { Link } from "react-router-dom";
import styles from "./Cardstyles.module.css";
export default function Header() {
  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles.NavDiv}>
          <Link to="/Portfolio-side/Prosjekt/" className={styles.NavButton}>
            Prosjekt Arkiv
          </Link>
          <Link to="" className={styles.NavButton}>
            Hjem
          </Link>
          <Link className={styles.NavButton}> Kontakt Meg</Link>
        </div>
        <div>
          <Link to="" className={`${styles.NavButtonBold} ${styles.NavButton}`}>
            Last ned CV
          </Link>
        </div>
      </nav>
    </>
  );
}
