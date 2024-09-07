import { VALIDATION_NAMES, ValidationKeyType } from "../constants/validations";  
import { ValidationsEntryType } from "../viewModel/constants";
  
  // runs one validation of one input
  const performValidation = (validation: [ValidationKeyType, number | boolean], value: string): boolean => {
    const [key, val] = validation;
    switch (key) {
      case VALIDATION_NAMES.NO_EMPTY:
        return !!value;
      case VALIDATION_NAMES.MIN_LENGTH:
        return value.length >= (val as number);
      case VALIDATION_NAMES.MAX_LENGTH:
        return value.length <= (val as number);
      case VALIDATION_NAMES.MIN_VALUE:
        return parseFloat(value) >= (val as number);
      default:
        return false;
    }
  };
  // runs every validation of a single input
  export const validateInput = (value: string, validations: ValidationsEntryType) => {
    const valid = Object.entries(validations).reduce((accumulator, current) => {
      const isValid = performValidation(current as [ValidationKeyType, number | boolean], value);
      return accumulator && isValid;
    }, true);
    return valid;
  };