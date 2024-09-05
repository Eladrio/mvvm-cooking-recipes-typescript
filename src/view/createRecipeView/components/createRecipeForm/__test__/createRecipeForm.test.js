import { fireEvent, render, screen } from "@testing-library/react";
// component
import CreateRecipeForm from "../createRecipeForm";

jest.mock(
  "../../../../../components/inputComponent/inputComponent",
  () =>
    ({ label, id, name, type, value, handleInputBlur, handleInputChange }) => {
      if (type !== 'textarea') {
        return (
          <div>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              name={name}
              type={type}
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => handleInputBlur(e)}
              value={value}
            />
          </div>
        );
      } else {
        return (
          <div>
            <label htmlFor={id}>{label}</label>
            <textarea
            id={id}
            name={name}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleInputBlur(e)}
            value={value}
          />
          </div>
        )
      }
    }
);

const initialInputs = {
  name: {
    value: "name",
    valid: true,
  },
  description: {
    value: "description",
    valid: true,
  },
  time: {
    value: "time",
    valid: true,
  },
  ingredients: {
    value: "ingredients",
    valid: true,
  },
};

const produceProps = ({
  handleBlur = () => {},
  handleChange = () => {},
  handleSubmit = () => {},
  inputs = initialInputs,
}) => {
  return {
    handleInputBlur: handleBlur,
    handleInputChange: handleChange,
    handleSubmit,
    inputs,
  };
};

describe("Tests SearchRecipeView", () => {
  it("mounts the view", () => {
    render(<CreateRecipeForm {...produceProps({})} />);

    expect(
      screen.getByLabelText("Give your recipe a name")
    ).toBeInTheDocument();
  });

  it("handles inputs changes", () => {
    const mockedOnChange = jest.fn(() => {});
    render(
      <CreateRecipeForm
        {...produceProps({
          handleChange: mockedOnChange,
        })}
      />
    );
    const nameInput = screen.getByLabelText("Give your recipe a name");
    const descriptionInput = screen.getByLabelText(
      "Enter a description of your recipe"
    );
    const ingredientsInput = screen.getByLabelText(
      "Enter the ingredients of your recipe"
    );
    const timeInput = screen.getByLabelText(
      "Enter the time of preparation of your recipe"
    );

    fireEvent.change(nameInput, { target: { value: "pizza" } });

    fireEvent.change(descriptionInput, { target: { value: "pizza desc" } });

    fireEvent.change(ingredientsInput, { target: { value: "pizza ingrs" } });

    fireEvent.change(timeInput, { target: { value: 33 } });

    expect(mockedOnChange).toHaveBeenNthCalledWith(1,"name","pizza");
    expect(mockedOnChange).toHaveBeenNthCalledWith(2,"description","pizza desc");
    expect(mockedOnChange).toHaveBeenNthCalledWith(3,"ingredients","pizza ingrs");
    expect(mockedOnChange).toHaveBeenNthCalledWith(4,"time","33");
  });

  it("handles inputs blurs", () => {
    const mockedOnBlur = jest.fn(() => {});
    render(
      <CreateRecipeForm
        {...produceProps({
          handleBlur: mockedOnBlur,
        })}
      />
    );
    const nameInput = screen.getByLabelText("Give your recipe a name");
    const descriptionInput = screen.getByLabelText(
      "Enter a description of your recipe"
    );
    const ingredientsInput = screen.getByLabelText(
      "Enter the ingredients of your recipe"
    );
    const timeInput = screen.getByLabelText(
      "Enter the time of preparation of your recipe"
    );

    fireEvent.blur(nameInput);

    fireEvent.blur(descriptionInput);

    fireEvent.blur(ingredientsInput);

    fireEvent.blur(timeInput);

    expect(mockedOnBlur).toHaveBeenCalled();
    expect(mockedOnBlur).toHaveBeenCalled();
    expect(mockedOnBlur).toHaveBeenCalled();
    expect(mockedOnBlur).toHaveBeenCalled();
  });
});
