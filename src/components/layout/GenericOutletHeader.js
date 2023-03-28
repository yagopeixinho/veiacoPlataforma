import React from "react";
import { useNavigate } from "react-router-dom";
import addItemIcon from "../../assets/icons/add-item-icon.svg";

export default function GenericOutletHeader({
  pageTitle,
  inputSearchConfig,
  addItemConfig,
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

          {addItemConfig?.addItemExist && (
            <label
              onClick={() => {
                navigate(addItemConfig.addItemLink);
              }}
              className="add-item-generic-outlet"
            >
              <span>
                <img src={addItemIcon} alt="" />
              </span>
              {addItemConfig.addItemLabel}
            </label>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}
