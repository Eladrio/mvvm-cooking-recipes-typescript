import { fireEvent, render, screen } from "@testing-library/react";
// component
import FormComponent from "../formComponent";

describe("Tests FormComponent", () => {
  it("mounts the component", () => {
    render(
      <FormComponent handleSubmit={() => {}}>
        <div>Children</div>
      </FormComponent>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it("calls handleSubmit on a click of the button element", () => {
    const mockedSubmit = jest.fn();
    render(
      <FormComponent handleSubmit={mockedSubmit}>
        <div>Children</div>
      </FormComponent>
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(mockedSubmit).toHaveBeenCalled();
  });
});
