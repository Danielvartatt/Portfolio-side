import styles from "./Pages.module.css";
import AboutMe from "../Componets/AboutMe.jsx";
import KontaktMeg from "../Componets/KontaktMeg.jsx";
import MineProsjekt from "../Componets/MineProsjekt.jsx";
import MineSkils from "../Componets/MineSkils.jsx";
import OmMeg from "../Componets/OmMeg.jsx";
export function MainPage() {
  return (
    <>
      <div className={styles.Page}>
        <div className={styles.PageCard}>
          <AboutMe />
        </div>
        <div>
          <OmMeg />
        </div>
        <div>
          <MineSkils />
        </div>
        <div>
          <KontaktMeg />
        </div>
      </div>
    </>
  );
}
// <MineProsjekt/> blir lagt til sennere
