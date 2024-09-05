import React from "react";

const FormComponent = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
