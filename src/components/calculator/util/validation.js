/* Returns an error message if invalid side */
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

export const validateAllSides = (...sides) => {
  return sides.every(side => parseFloat(side) > 0 && !isNaN(parseFloat(side)));
};
