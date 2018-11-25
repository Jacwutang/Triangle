/* Define error messages */
export const NON_NUMERIC_VAL = "Enter a numeric value";
export const NEGATIVE_OR_ZERO_VAL = "Enter a value greater than 0";

/* Define triangle types */
export const NOT_POSSIBLE = "NOT POSSIBLE";
export const EQUILATERAL = "EQUILATERAL";
export const SCALENE = "SCALENE";
export const ISOCELES = "ISOCELES";

/* Returns an error message if input is invalid */
export const validateSide = side => {
  /* NaN types */
  if (isNaN(side)) {
    return {
      error: NON_NUMERIC_VAL,
      valid: false
    }
  }

  /* Numeric type */
  let length = parseFloat(side);
  if (length <= 0) {
    return {
      error: NEGATIVE_OR_ZERO_VAL,
      valid: false

    };
  } else {
    return {
      error: "",
      valid: true
    }
  }
};

/* Returns whether or not all sides are valid */
export const validateAllSides = (...sides) => {
  return sides.every(side => side > 0 && validateSide(side).valid);
};

export const determineType = (side_one, side_two, side_three) => {
  if (
    side_one > side_two + side_three ||
    side_two > side_one + side_three ||
    side_three > side_one + side_two
  ) {
    return NOT_POSSIBLE;
  } else if (side_one === side_two && side_one === side_three) {
    return EQUILATERAL;
  } else if (
    side_one === side_two ||
    side_one === side_three ||
    side_two === side_three
  ) {
    return ISOCELES
  } else {
    return SCALENE;
  }
};
