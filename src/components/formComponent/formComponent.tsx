import { FormEvent, ReactNode } from "react";

type FormComponentPropsType = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const FormComponent = ({ handleSubmit, children }: FormComponentPropsType) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
