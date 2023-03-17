import React from "react";
import VeiacoCard from "../../components/common/VeiacoCard";
import ListContentMainStructure from "../../components/layout/GenericOutletHeader";

const dataVeiaco = [
  { veiaco: "Yago" },
  { veiaco: "Yuri" },
  { veiaco: "Billie" },
];

export default function Veiacos() {
  return (
    <>
      <ListContentMainStructure pageTitle="Veiacos" />

      {dataVeiaco.map((veiaco) => (
        <VeiacoCard />
      ))}
    </>
  );
}
