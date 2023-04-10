import React, { useContext } from "react";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import NothingFoundAlert from "../../components/common/NothingFoundAlert";
import { context } from "../../context/context";

export default function Dashboard() {
  const { user } = useContext(context);

  return (
    <div>
      <GenericOutletHeader
        pageTitle="Dashboard"
        inputSearchConfig={{ inputExist: false }}
        addItemConfig={{
          addItemExist: false,
        }}
      />
      {console.log(user)}
      <NothingFoundAlert
        message={`Olá, ${user?.name}! Você não possui nenhuma dívida`}
      />
    </div>
  );
}
