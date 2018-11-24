/* Define error messages */
export const NON_NUMERIC_VAL = "Enter a numeric value";
export const NEGATIVE_VAL = "Enter a value greater than 0";

/* Returns an error message if input is invalid */
export const validateSide = side => {
  /* NaN types */
  if (isNaN(side)) {
    return NON_NUMERIC_VAL;
  }

  /* Filter leading zeroes (maybe not needed)
  if (side[0] === "0") {
    return "Remove leading zeroes";
  }
  */

  /* Numeric type */
  let length = parseFloat(side);
  if (length <= 0) {
    return NEGATIVE_VAL;
  } else {
    return "";
  }
};

/* Returns whether or not all sides are valid */
export const validateAllSides = (...sides) => {
  return sides.every(side => side > 0 && !isNaN(side));
};
