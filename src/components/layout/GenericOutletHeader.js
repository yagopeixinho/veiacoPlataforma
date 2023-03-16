import React from "react";

export default function GenericOutletHeader({ pageTitle }) {
  return (
    <div className="generic-outlet-header">
      <h1>{pageTitle}</h1>
      <hr />
    </div>
  );
}
