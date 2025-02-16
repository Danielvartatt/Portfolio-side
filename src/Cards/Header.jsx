import { Link } from "react-router-dom";
import styles from "./Cardstyles.module.css";
export default function Header() {
  return (
    <div className={styles.NavBack}>
      <nav className={styles.Nav}>
        <Link
          to="https://github.com/Danielvartatt"
          className={styles.NavButton}
        >
          Gitbub
        </Link>
        <Link to="/Prosjekt/" className={styles.NavButton}>
          Prosjekt Arkiv
        </Link>
        <Link to="/" className={styles.NavButton}>
          Hjem
        </Link>
      </nav>
    </div>
  );
}
