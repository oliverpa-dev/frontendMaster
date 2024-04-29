import React from "react";
  const { handleCheckType } = props;
  const [isChecked, setIsChecked] = useState<boolean>();
  const [inputValue, setInputValue] = useState<string>("");

export const Field = () => {
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
        <button>confirm</button>
      </div>
    </div>
  );
};
