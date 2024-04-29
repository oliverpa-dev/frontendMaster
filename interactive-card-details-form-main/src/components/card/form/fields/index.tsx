import React, { useState } from "react";
// import { Checker } from "..";

interface FieldProps {
  handleCheckType: (value: string, cb: () => void) => void;
}

export const Field: React.FC<FieldProps> = (props) => {
  const { handleCheckType } = props;
  const [isChecked, setIsChecked] = useState<boolean>();
  const [inputValue, setInputValue] = useState<string>("");

  // Callback function that is passed into the handleCheckType
  const callback = () => {
    if (isChecked === undefined) {
      setIsChecked(true);
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="card-fields">
      <div className="card-fields__field">
        <div className="card-fields__field-label">
          <label>cardholder name</label>
        </div>
        <div className="card-fields__field-input">
          <input type="string" />
        </div>
        <div className="card-fields__field-error">
          <span>Error</span>
        </div>
      </div>
      <div className="card-fields__field">
        <div className="card-fields__field-label">
          <label>card number</label>
        </div>
        <div className="card-fields__field-input">
          <input type="string" />
        </div>
        <div className="card-fields__field-error">
          <span>Error</span>
        </div>
      </div>
      <div className="card-fields__button">
        <button onClick={() => handleCheckType(inputValue, callback)}>
          confirm
        </button>
      </div>
    </div>
  );
};
