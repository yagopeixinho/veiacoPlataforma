import React, { useEffect, useState } from "react";
import VeiacoCard from "../../components/common/VeiacoCard";
import ListContentMainStructure from "../../components/layout/GenericOutletHeader";
import VeiacoService from "../../service/veiaco.service";

export default function Veiacos() {
  const [veiacosList, setVeiacoList] = useState([]);

  useEffect(() => {
    async function init() {
      const _veiacoService = new VeiacoService();
      const veiacoResponse = await _veiacoService.list();

      setVeiacoList(veiacoResponse);
    }

    init();
  }, []);

  return (
    <>
      <ListContentMainStructure
        pageTitle="Veiacos"
        buttonConfig={{
          buttonExist: true,
          buttonLabel: "Adicionar Veiaco",
          linkRedirect: "/veiaco/create",
        }}
        inputSearchConfig={{
          inputExist: true,
          inputPlaceholder: "Buscar veiaco",
        }}
      />

      <div className="veiacos-grid">
        {veiacosList.map((veiaco, index) => (
          <VeiacoCard
            id={veiaco.id}
            name={veiaco.name}
            phone={veiaco.phone}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
