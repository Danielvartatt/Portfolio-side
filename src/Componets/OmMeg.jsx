import styles from "./Component.module.css";
export default function OmMeg() {
  return (
    <div className={styles.PageCardaboutme}>
      <div className={styles.textbox}>
        <h2 className={styles.PageCardaboutmetext}>Om Meg</h2>
        <div>
          <p>Hei, mitt navn er Daniel, jeg kommer fra Sunnmøre.</p>
          <p>mine interesser er Gaming, tur, lage mat og kode.</p>
          <p>
            Jeg har alltid vært intressert i det kreative,<br></br> når jeg var
            yngre så lærte jeg meg bruk av <br />
            Source Engine (1) til Half life 2.
          </p>
          <p>
            Intressen for å sette seg ned lære seg noe nytt er der alltid der.
          </p>
        </div>
      </div>
    </div>
  );
}
