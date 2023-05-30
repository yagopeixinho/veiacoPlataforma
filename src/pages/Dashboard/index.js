import React, { useContext } from "react";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import NothingFoundAlert from "../../components/common/NothingFoundAlert";
import { AppContext } from "../../context/context";

export default function Dashboard() {
  const { user } = useContext(AppContext);

  console.log(user)

  return (
    <div>
      <GenericOutletHeader
        pageTitle="Dashboard"
        inputSearchConfig={{ inputExist: false }}
        addItemConfig={{
          addItemExist: false,
        }}
      />

      <NothingFoundAlert
        message={`Olá, ${user?.name}! Você não possui nenhuma dívida`}
      />
    </div>
  );
}
