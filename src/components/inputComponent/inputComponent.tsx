import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FocusEvent,
  HTMLInputTypeAttribute,
} from "react";
import { InputNames } from "../../types/recipeTypes";
import { InputComponentBlock, InputComponentContainer, InputComponentElement, InputComponentError, InputComponentTextArea } from "./styledComponents";

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
    <InputComponentError className="input-component__error">There is an error in this input</InputComponentError>
  );

  return (
    <InputComponentContainer>
      <label htmlFor={id}>
        {label}
      </label>
      <InputComponentBlock>
        {type === "textarea" ? (
          <InputComponentTextArea
            id={id}
            name={name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={value}
          />
        ) : (
          <InputComponentElement
            autoComplete="off"
            id={id}
            name={name}
            type={type}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={value}
          />
        )}

        {!valid && errorElement}
      </InputComponentBlock>
    </InputComponentContainer>
  );
};

export default InputComponent;
