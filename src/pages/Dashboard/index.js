import React from "react";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import NothingFoundAlert from "../../components/common/NothingFoundAlert";

export default function Dashboard() {
  return (
    <div>
      <GenericOutletHeader
        pageTitle="Dashboard"
        inputSearchConfig={{ inputExist: false }}
        addItemConfig={{
          addItemExist: false,
        }}
      />

      <NothingFoundAlert message="Nenhuma informação do dashboard foi encontrada" />
    </div>
  );
}
