import styles from "./Component.module.css";
export default function MineSkils() {
  return (
    <div className={styles.PageCard}>
      <div className={styles.MineSkilsstlye}>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
      </div>
      <div>
        <p>Mine erfaringer innen for front-end er:</p>
        <ul>
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>React</li>
          <li>Figma</li>
        </ul>
      </div>
    </div>
  );
}
