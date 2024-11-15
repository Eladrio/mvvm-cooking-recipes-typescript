import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FocusEvent,
  HTMLInputTypeAttribute,
} from "react";
import { InputComponentBlock, InputComponentContainer, InputComponentElement, InputComponentError, InputComponentTextArea } from "./styledComponents";
import { InputNames } from "../../types/recipeTypes";

type InputComponentPropsType = {
  errorMessage: string;
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
  errorMessage,
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
    <InputComponentError role="alert" className="input-component__error">{errorMessage}</InputComponentError>
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
            aria-invalid={!valid}
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
            aria-invalid={!valid}
          />
        )}

        {!valid && errorElement}
      </InputComponentBlock>
    </InputComponentContainer>
  );
};

export default InputComponent;
