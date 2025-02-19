import styles from "./Component.module.css";

export default function PlaceholderComp() {
  return (
    <div className={styles.Placeholder}>
      <div>
        <h1>Å ha noen prosjekt her er viktig</h1>
        <p>
          Prosjekt om det jeg gjør <br />
          Her kan du vise fram hva du gjør
          <br />
          det kunne vært lurt å ha det som en carousel
        </p>
      </div>
    </div>
  );
}
