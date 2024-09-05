// unit
import { validateInput } from "../inputValidations";

describe("Tests inputValidations", () => {
  it("validates no empty rule", () => {
    const validations = {
      noEmpty: true,
    };
    
    const noValidValue = "";
    const noValidResult = validateInput(noValidValue, validations);

    const validValue = "pizza";
    const validResult = validateInput(validValue, validations);

    expect(validResult).toEqual(true);
    expect(noValidResult).toEqual(false);    
  });

  it("validates min length rule", () => {
    const validations = {
      minLength: 5,
    };
    
    const noValidValue = "pizz";
    const noValidResult = validateInput(noValidValue, validations);

    const validValue = "pizza";
    const validResult = validateInput(validValue, validations);

    expect(validResult).toEqual(true);
    expect(noValidResult).toEqual(false);    
  });

  it("validates max length rule", () => {
    const validations = {
      maxLength: 5,
    };
    
    const noValidValue = "pizzas";
    const noValidResult = validateInput(noValidValue, validations);

    const validValue = "pizza";
    const validResult = validateInput(validValue, validations);

    expect(validResult).toEqual(true);
    expect(noValidResult).toEqual(false);    
  });

  it("validates min value rule", () => {
    const validations = {
      minValue: 5,
    };
    
    const noValidValue = 4;
    const noValidResult = validateInput(noValidValue, validations);

    const validValue = 5;
    const validResult = validateInput(validValue, validations);

    expect(validResult).toEqual(true);
    expect(noValidResult).toEqual(false);    
  });

  it("validates default value when validation rule's name is not recognized", () => {
    const validations = {
      wrongName: 5,
    };
    
    const noValidValue = 4;
    const noValidResult = validateInput(noValidValue, validations);

    const validValue = 5;
    const validResult = validateInput(validValue, validations);

    expect(validResult).toEqual(false);
    expect(noValidResult).toEqual(false);    
  });
});
