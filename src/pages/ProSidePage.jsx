//denne siden skal linkes fra ProPage.jsx når du kliker på siden
import { useParams } from "react-router-dom";
export function ProSidePage() {
  const Prosjektnamn = useParams();
  return (
    <div>
      <p>her ligger {Prosjektnamn}</p>
    </div>
  );
}
