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
          className={styles.TriangleSmall}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 900,
            top: 50,
          }}
          id=" 4 - om meg"
        ></div>
      </div>
      <div id="About me">
        <div
          className={styles.TriangleSmall}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 900,
            top: 1000,
          }}
          id="1"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 600,
            top: 1200,
          }}
          id="2"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "30deg",
            left: 1000,
            top: 1300,
          }}
          id="2"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "60deg",
            left: 500,
            top: 1400,
          }}
          id="3"
        ></div>
      </div>
      <div id="Mine Ferdigheter">
        <div
          className={styles.TriangleSmall}
          style={{
            position: "absolute",
            rotate: "38deg",
            left: 800,
            top: 1700,
          }}
          id="1"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "97deg",
            left: 900,
            top: 2000,
          }}
          id="2"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "43deg",
            left: 500,
            top: 2100,
          }}
          id="3"
        ></div>
        <div
          className={styles.CircleInline}
          style={{
            position: "absolute",
            rotate: "98deg",
            left: 100,
            top: 1800,
          }}
          id="4"
        ></div>
        <div
          className={styles.CircleSmallInline}
          style={{
            position: "absolute",
            rotate: "0deg",
            left: 500,
            top: 2300,
          }}
          id="5"
        ></div>
      </div>
      <div id="Prosjekter">
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "88deg",
            left: 500,
            top: 2888,
          }}
          id="1"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "99deg",
            left: 999,
            top: 2900,
          }}
          id="2"
        ></div>
        <div
          className={styles.CircleInline}
          style={{
            position: "absolute",
            rotate: "10deg",
            left: 101,
            top: 2400,
          }}
          id="3"
        ></div>
        <div
          className={styles.CircleSmallInline}
          style={{
            position: "absolute",
            rotate: "0deg",
            left: 333,
            top: 2600,
          }}
          id="4"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "46deg",
            left: 1100,
            top: 2700,
          }}
          id="5"
        ></div>
        <div
          className={styles.TriangleSmall}
          style={{
            position: "absolute",
            rotate: "33deg",
            left: 200,
            top: 2800,
          }}
          id="6"
        ></div>
      </div>

      <div id="Kontakt info">
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "88deg",
            left: 500,
            top: 2888,
          }}
          id="1"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "33deg",
            left: 333,
            top: 3333,
          }}
          id="1"
        ></div>
        <div
          className={styles.SquareSmallInline}
          style={{
            position: "absolute",
            rotate: "33deg",
            left: 900,
            top: 3500,
          }}
          id="2"
        ></div>
        <div
          className={styles.SquareInline}
          style={{
            position: "absolute",
            rotate: "33deg",
            left: 900,
            top: 3233,
          }}
          id="3"
        ></div>
      </div>
    </>
  );
}
