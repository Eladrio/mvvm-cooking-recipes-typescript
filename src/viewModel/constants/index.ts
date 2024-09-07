export type NameValidationRuleType = {
  noEmpty: true;
  minLength: 5;
}

export type DescriptionValidationRuleType = {
  noEmpty: true;
  maxLength: 200;
}

export type IngredientsValidationRuleType = {
  noEmpty: true;
  minLength: 2;
  maxLength: 200;
}

export type TimeValidationRuleType = {
  noEmpty: true;
  minValue: 1;
}

export type ValidationsEntryType = NameValidationRuleType | DescriptionValidationRuleType | IngredientsValidationRuleType | TimeValidationRuleType;

type ValidationRulesType = {
  name: NameValidationRuleType;
  description: DescriptionValidationRuleType;
  ingredients: IngredientsValidationRuleType;
  time: TimeValidationRuleType;
}

export const VALIDATION_RULES: ValidationRulesType = {
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