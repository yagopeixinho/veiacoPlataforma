import React from "react";
import { useNavigate } from "react-router-dom";
import VeiacoCard from "../../components/common/VeiacoCard";
import ListContentMainStructure from "../../components/layout/GenericOutletHeader";

const dataVeiaco = [
  { name: "Yago", id: 1 },
  { name: "Yuri", id: 2 },
  { name: "Billie", id: 3 },
  { name: "Gustavo", id: 4 },
  { name: "Alex", id: 5 },
  { name: "Alex", id: 6 },
  { name: "Alex", id: 7 },
];

export default function Veiacos() {
  return (
    <>
      <ListContentMainStructure pageTitle="Veiacos" />

      <div className="veiacos-grid">
        {dataVeiaco.map((veiaco) => (
          <VeiacoCard name={veiaco.name} id={veiaco.id} />
        ))}
      </div>
    </>
  );
}
