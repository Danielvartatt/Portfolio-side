import { Link } from "react-router-dom";
import styles from "./Cardstyles.module.css";
export default function Header() {
  return (
    <>
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
        <Link to="/" className={styles.NavButtonInportant}>
          Hjem
        </Link>
        <Link to="" className={styles.NavButtonDownload}>
          Last ned CV
        </Link>
      </nav>
    </>
  );
}
