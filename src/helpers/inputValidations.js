import { VALIDATION_NAMES } from "../constants/validations";  
  
  // runs one validation of one input
  const performValidation = (validation, value) => {
    switch (validation[0]) {
      case VALIDATION_NAMES.NO_EMPTY:
        return !!value;
      case VALIDATION_NAMES.MIN_LENGTH:
        return value.length >= validation[1];
      case VALIDATION_NAMES.MAX_LENGTH:
        return value.length <= validation[1];
      case VALIDATION_NAMES.MIN_VALUE:
        return value >= validation[1];
      default:
        return false;
    }
  };
  // runs every validation of a single input
  export const validateInput = (value, validations) => {
    const valid = Object.entries(validations).reduce((accumulator, current) => {
      const isValid = performValidation(current, value);
      return accumulator && isValid;
    }, true);
    return valid;
  };