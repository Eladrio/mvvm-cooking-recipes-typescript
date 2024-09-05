import React from "react";
import "./inputComponent.scss";

const InputComponent = ({
  handleInputChange,
  handleInputBlur,
  value,
  valid,
  label,
  type,
  name,
  id,
}) => {
  const errorElement = (
    <span className="input-component__error">
      There is an error in this input
    </span>
  );

  return (
    <div className="input-component">
      <label className="input-component__label" htmlFor={id}>
        {label}
      </label>
      <div className="input-component__block">
        {type === "textarea" ? (
          <textarea
            className="input-component__input-element input-component__input-element--textarea"
            id={id}
            name={name}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleInputBlur(e)}
            value={value}
          />
        ) : (
          <input
            autoComplete="off"
            className="input-component__input-element"
            id={id}
            name={name}
            type={type}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleInputBlur(e)}
            value={value}
          />
        )}

        {!valid && errorElement}
      </div>
    </div>
  );
};

export default InputComponent;
