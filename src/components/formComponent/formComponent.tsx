import { FormEvent, ReactNode } from "react";
import { SubmitButton } from "./styledComponents";

type FormComponentPropsType = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const FormComponent = ({ handleSubmit, children }: FormComponentPropsType) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {children}
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
};

export default FormComponent;
