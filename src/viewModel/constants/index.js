export const VALIDATION_RULES = {
  name: {
    noEmpty: true,
    minLength: 5,
  },
  description: {
    noEmpty: true,
    maxLength: 200,
  },
  ingredients: {
    noEmpty: true,
    minLength: 2,
    maxLength: 200,
  },
  time: {
    noEmpty: true,
    minValue: 1,
  },
};
