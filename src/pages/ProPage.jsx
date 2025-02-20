//Prosjekt side, den skal inneholde "Display av oppgaver"
import OutlineDecor from "../Componets/OutlineDecor.jsx";
import ProsjektArkivTekst from "../Componets/ProsjektarkivTekst.jsx";
import { Link } from "react-router-dom";
export function ProPage() {
  return (
    <>
      <ProsjektArkivTekst />
      <Link to="/Portfolio-side/Prosjekt/:ProsjektName">test side</Link>
    </>
  );
}
