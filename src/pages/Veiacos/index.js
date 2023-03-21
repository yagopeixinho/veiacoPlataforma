import React from "react";
import VeiacoCard from "../../components/common/VeiacoCard";
import ListContentMainStructure from "../../components/layout/GenericOutletHeader";

const dataVeiaco = [
  { name: "Yago" },
  { name: "Yuri" },
  { name: "Billie" },
  { name: "Gustavo" },
  { name: "Alex" },
  { name: "Alex" },
  { name: "Alex" },
];

export default function Veiacos() {
  return (
    <>
      <ListContentMainStructure pageTitle="Veiacos" />

      <div className="veiacos-grid">
        {dataVeiaco.map((veiaco) => (
          <VeiacoCard name={veiaco.name} />
        ))}
      </div>
    </>
  );
}
