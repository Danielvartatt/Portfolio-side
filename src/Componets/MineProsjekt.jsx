import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Prosjekt = {
  prosjekt1: {
    title: "Prosjekt 1",
    description: "Om prosjektet...",
  },
  prosjekt2: {
    title: "Prosjekt 2",
    description: "Om prosjektet...",
  },
  prosjekt3: {
    title: "Prosjekt 3",
    description: "Om prosjektet...",
  },
  prosjekt4: {
    title: "Prosjekt 4",
    description: "Om prosjektet...",
  },
};

export default function MineProsjekt() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };
  return (
    <div>
      <p></p> Mine Prosjekt
      <Slider {...settings}>
        {Object.entries(Prosjekt).map(([key, value]) => (
          <div key={key}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
//Denne siden skal du prøve på en ny React Dokument for å få det til å fungere,
//det er vikitg at du tester ut at den fungere før du deployer den.
//Tips: det Kan ha noe med hvordan index.css og Apps.css brukest. Du kan teste det ut
