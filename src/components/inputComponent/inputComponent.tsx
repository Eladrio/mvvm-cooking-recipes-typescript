import "./inputComponent.scss";
import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FocusEvent,
  HTMLInputTypeAttribute,
} from "react";
import { InputNames } from "../../types/recipeTypes";

type InputComponentPropsType = {
  handleInputBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id: string;
  label: string;
  name: InputNames;
  type: "textarea" | HTMLInputTypeAttribute;
  valid: boolean;
  value: string;
} & ComponentPropsWithoutRef<"input"> &
  ComponentPropsWithoutRef<"textarea">;

const InputComponent: React.FC<InputComponentPropsType> = ({
  handleInputBlur,
  handleInputChange,
  id,
  label,
  name,
  type,
  valid,
  value,
}) => {
  const errorElement: JSX.Element = (
    <span className="input-component__error">There is an error in this input</span>
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
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={value}
          />
        ) : (
          <input
            autoComplete="off"
            className="input-component__input-element"
            id={id}
            name={name}
            type={type}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={value}
          />
        )}

        {!valid && errorElement}
      </div>
    </div>
  );
};

export default InputComponent;
