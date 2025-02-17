import styles from "./Component.module.css";
/* <div className={styles.SquareInline}></div> */
export default function InlineDecor() {
  return (
    <>
      <div
        className={styles.SquareInline}
        style={{
          position: "relative",
          left: 188,
          top: 184,
        }}
      ></div>
      <div
        className={styles.SquareInline}
        style={{
          position: "absolute",
          left: 21,
          top: 860,
        }}
      ></div>
      <div
        className={styles.SquareInline}
        style={{
          position: "relative",
          left: 188,
          top: 184,
        }}
      ></div>
      <div
        className={styles.SquareInline}
        style={{
          position: "relative",
          left: 188,
          top: 184,
        }}
      ></div>
    </>
  );
}
