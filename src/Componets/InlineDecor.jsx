import styles from "./Component.module.css";
/* <div className={styles.SquareInline}></div> */
export default function InlineDecor() {
  return (
    <>
      <div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 356,
            top: 253,
          }}
          id="1 - om meg"
        ></div>
        <div
          className={styles.CircleSmallInline}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 496,
            top: 450,
          }}
          id="2 - om meg"
        ></div>
        <div
          className={styles.SquareSmallInline}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 50,
            top: 600,
          }}
          id="3 - om meg"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 900,
            top: 50,
          }}
          id=" 4 - om meg"
        ></div>
      </div>
    </>
  );
}
