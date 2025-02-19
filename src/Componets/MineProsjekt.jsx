import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./assets/MineProsjekt.module.css";
import { Link } from "react-router-dom";
//du må finne noen prosjekt du kan legge til et skjerm bilde av.
const Prosjekt = {
  prosjekt1: {
    title: "Meny oppgave",
    description: "Meny oppgaven, består av 2 deler.",
    image: "./src/assets/Image/Prosjekt/placeholder.png",
    alt: "Placeholder image",
    id: 1,
  },
  prosjekt2: {
    title: "Prosjekt 2",
    description: "Om prosjektet...",
    image: "./src/assets/Image/Prosjekt/github.jpg",
    alt: "Placeholder image",
    id: 2,
  },
  prosjekt3: {
    title: "Prosjekt 3",
    description: "Om prosjektet...",
    image: "./src/assets/Image/Prosjekt/Gitoppgave.jpg",
    alt: "Placeholder image",
    id: 3,
  },
  prosjekt4: {
    title: "Prosjekt 4",
    description: "Om prosjektet...",
    image: "./src/assets/Image/Prosjekt/github.jpg",
    alt: "Placeholder image",
    id: 4,
  },
  prosjekt5: {
    title: "Arbeids Arkiv",
    description: (
      <Link to="/Portfolio-side/Prosjekt/" className={styles.LinkButton}>
        Prosjekt Arkiv
      </Link>
    ),
    image: "./src/assets/Image/Prosjekt/pallascat.jpg",
    alt: "Placeholder image",
    id: 5,
  },
};
//når du endre på
export default function MineProsjekt() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };
  return (
    <div className={`${styles.carouselContainer}`}>
      <h2 className={styles.CardProdjekt}>Mine Prosjekter</h2>
      <Slider {...settings}>
        {Object.entries(Prosjekt).map(([key, value]) => (
          <div
            key={key}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={`${value.image}`}
              className={styles.ProsjektCardDataImg}
              alt={`${value.alt}`}
            ></img>
            <h3>{value.title}</h3>
            <div className={styles.ProsjektCardData}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
//Denne siden skal du prøve på en ny React Dokument for å få det til å fungere,
//det er vikitg at du tester ut at den fungere før du deployer den.
//Tips: det Kan ha noe med hvordan index.css og Apps.css brukest. Du kan teste det ut
//svar:
//det var at Stylene må gå direkte inn i filen.
