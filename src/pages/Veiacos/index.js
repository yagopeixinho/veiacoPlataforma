import React, { useEffect, useState } from "react";
import VeiacoCard from "../../components/common/VeiacoCard";
import ListContentMainStructure from "../../components/layout/GenericOutletHeader";
import VeiacoService from "../../service/veiaco.service";
import NothingFoundAlert from "../../components/common/NothingFoundAlert";
import LoadingPage from "../../components/common/LoadingPage";

export default function Veiacos() {
  const [veiacosList, setVeiacoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      setLoading(true)
      const _veiacoService = new VeiacoService();
      const veiacoResponse = await _veiacoService.list();

      setVeiacoList(veiacoResponse);
      setLoading(false)
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

      <LoadingPage loading={loading}>
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
      </LoadingPage>
    </>
  );
}
