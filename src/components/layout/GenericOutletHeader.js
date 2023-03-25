import React from "react";
import { useNavigate } from "react-router-dom";

export default function GenericOutletHeader({
  pageTitle,
  buttonConfig,
  inputSearchConfig,
}) {
  const navigate = useNavigate();

  return (
    <div className="generic-outlet-header">
      <div className="generic-outlet-content-info">
        <div className="headline">
          <h1>{pageTitle}</h1>
        </div>

        <div className="right-side">
          {inputSearchConfig.inputExist && (
            <input placeholder={inputSearchConfig.inputPlaceholder} />
          )}

          {buttonConfig.buttonExist && (
            <button
              onClick={() => {
                navigate(buttonConfig.linkRedirect);
              }}
            >
              {buttonConfig.buttonLabel}
            </button>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}
