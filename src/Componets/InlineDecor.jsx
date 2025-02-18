import styles from "./Component.module.css";
/* <div className={styles.SquareInline}></div> */
export default function InlineDecor() {
  return (
    <>
      {" "}
      <div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 600,
            top: 488,
            zIndex: 1,
          }}
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "64deg",
            left: 681,
            top: 88,
          }}
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "64deg",
            left: 46,
            top: 299,
          }}
        ></div>
      </div>
    </>
  );
}
