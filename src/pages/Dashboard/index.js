import React from "react";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";

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
    </div>
  );
}
