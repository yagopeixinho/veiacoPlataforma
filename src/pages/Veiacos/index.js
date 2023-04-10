import React, { useEffect, useState } from "react";
import VeiacoCard from "../../components/common/VeiacoCard";
import ListContentMainStructure from "../../components/layout/GenericOutletHeader";
import VeiacoService from "../../service/veiaco.service";
import NothingFoundAlert from "../../components/common/NothingFoundAlert";

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
        inputSearchConfig={{
          inputExist: false,
        }}
        addItemConfig={{
          addItemExist: true,
          addItemLabel: "Adicionar Veiaco",
          addItemLink: "/veiaco/adicionar",
        }}
      />

      {veiacosList.length ? (
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
      ) : (
        <NothingFoundAlert message="Olha só... Você não tem nenhum veiaco..." />
      )}
    </>
  );
}
