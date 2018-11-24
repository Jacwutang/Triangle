/* Returns an error message if input is invalid */
export const validateSide = side => {
  /* Filter NaN types */
  if (isNaN(side)) {
    return "Enter a numeric value";
  }

  /* Filter leading zeroes (maybe)
  if (side[0] === "0") {
    return "Remove leading zeroes";
  }
  */

  /* Numeric type */
  let length = parseFloat(side);
  if (length <= 0) {
    return "Enter a value greater than 0";
  } else {
    return "";
  }
};

/* Returns whether or not all sides are valid */
export const validateAllSides = (...sides) => {
  return sides.every(side => side > 0 && !isNaN(side));
};
