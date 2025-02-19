import InlineDecor from "../Componets/InlineDecor.jsx";
import OutlineDecor from "../Componets/OutlineDecor.jsx";
import AboutMe from "../Componets/AboutMe.jsx";
import KontaktMeg from "../Componets/KontaktMeg.jsx";
import MineProsjekt from "../Componets/MineProsjekt.jsx";
import MineSkils from "../Componets/MineSkils.jsx";
import OmMeg from "../Componets/OmMeg.jsx";
import styles from "./Pages.module.css";
import PlaceholderComp from "../Componets/PlaceholderComp.jsx";
export function MainPage() {
  //Fjern Inline style, gjør den til en Component? det må du sjekke
  return (
    <div>
      <OutlineDecor />
      <InlineDecor />
      <div className={styles.Page}>
        <div>
          <div>
            <AboutMe />
          </div>
          <div className={styles.Spacebetween}></div>
          <div>
            <OmMeg />
          </div>
          <div className={styles.Spacebetween}></div>
          <div>
            <MineSkils />
          </div>
          <div className={styles.Spacebetween}></div>
          <div>
            <PlaceholderComp />
          </div>
          <div className={styles.Spacebetween}></div>
          <div>
            <KontaktMeg />
          </div>
        </div>
      </div>
    </div>
  );
}
// <MineProsjekt/> blir lagt til sennere
