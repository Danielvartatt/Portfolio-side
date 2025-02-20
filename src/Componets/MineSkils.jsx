import styles from "./Component.module.css";
export default function MineSkils() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.SkillPageCard}>
        <h2 style={{ textAlign: "center" }}>Mine Ferdigheter</h2>
        <div className={styles.Gridbox}>
          <div className={styles.GridIcon}>
            <img
              src="./src/assets/Image/Kompetanse/css.png"
              className={styles.Imagestyle}
            ></img>
            <img
              src="./src/assets/Image/Kompetanse/HTML.png"
              className={styles.Imagestyle}
            ></img>
            <img
              src="./src/assets/Image/Kompetanse/JavaScript.png"
              className={styles.Imagestyle}
            ></img>
            <img
              src="./src/assets/Image/Kompetanse/react.png"
              className={styles.Imagestyle}
            ></img>
            <img
              src="./src/assets/Image/Kompetanse/figma.png"
              className={styles.Imagestyle}
            ></img>
          </div>
          <div className={styles.Font24}>
            <p>
              Mine erfaringer innen <br />
              for front-end er:
            </p>
            <ul>
              <li>Javascript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>React</li>
              <li>Figma</li>
            </ul>
          </div>
          {/* fiks <ul> en så dei ikkje har spaceing mellom seg på siden*/}
        </div>
      </div>
    </div>
  );
}
