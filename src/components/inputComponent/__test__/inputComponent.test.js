import { fireEvent, render, screen } from "@testing-library/react";
// component
import InputComponent from "../inputComponent";

describe("Tests Input Component", () => {
  it("mounts the component", () => {
    render(
      <InputComponent
        name="name"
        value="value"
        valid={true}
        label="label"
        type="text"
        id="id"
        handleInputChange={() => {}}
        handleInputBlur={() => {}}
      />
    );
    expect(screen.getByLabelText("label")).toBeInTheDocument();
  });

  it("mounts the component with textarea type", () => {
    render(
      <InputComponent
        name="name"
        value="value"
        valid={true}
        label="label"
        type="textarea"
        id="id"
        handleInputChange={() => {}}
        handleInputBlur={() => {}}
      />
    );
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toBeInTheDocument();
  });

  it("renders the errorElement when valid equals false", () => {
    const mockedChange = jest.fn();
    const mockedBlur = jest.fn();
    render(
      <InputComponent
        name="name"
        value="value"
        valid={false}
        label="label"
        type="textarea"
        id="id"
        handleInputChange={mockedChange}
        handleInputBlur={mockedBlur}
      />
    );
    const errorElement = screen.getByText("There is an error in this input");
    expect(errorElement).toBeInTheDocument();
  });

  it("calls the handleInputChange function onChange of the input", () => {
    const mockedChange = jest.fn();
    render(
      <InputComponent
        name="name"
        value="value"
        valid={true}
        label="label"
        type="text"
        id="id"
        handleInputChange={mockedChange}
        handleInputBlur={() => {}}
      />
    );
    const inputComponent = screen.getByLabelText("label");
    fireEvent.change(inputComponent, { target: { value: "pizza" } });
    expect(mockedChange).toHaveBeenCalled();
  });

  it("calls the handleInputBlur function onBlur of the input", () => {
    const mockedBlur = jest.fn();
    render(
      <InputComponent
        name="name"
        value="value"
        valid={true}
        label="label"
        type="text"
        id="id"
        handleInputChange={() =>{}}
        handleInputBlur={mockedBlur}
      />
    );
    const inputComponent = screen.getByLabelText("label");
    fireEvent.blur(inputComponent);
    expect(mockedBlur).toHaveBeenCalled();
  });

  it("calls the handleInputChange function onChange of the textarea", () => {
    const mockedChange = jest.fn();
    render(
      <InputComponent
        name="name"
        value="value"
        valid={true}
        label="label"
        type="textarea"
        id="id"
        handleInputChange={mockedChange}
        handleInputBlur={() => {}}
      />
    );
    const inputComponent = screen.getByLabelText("label");
    fireEvent.change(inputComponent, { target: { value: "pizza" } });
    expect(mockedChange).toHaveBeenCalled();
  });

  it("calls the handleInputBlur function onBlur of the textarea", () => {
    const mockedBlur = jest.fn();
    render(
      <InputComponent
        name="name"
        value="value"
        valid={true}
        label="label"
        type="textarea"
        id="id"
        handleInputChange={() =>{}}
        handleInputBlur={mockedBlur}
      />
    );
    const inputComponent = screen.getByLabelText("label");
    fireEvent.blur(inputComponent);
    expect(mockedBlur).toHaveBeenCalled();
  });
});
