import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../calculator';
import {validateSide, validateAllSides, determineType, NON_NUMERIC_VAL, NEGATIVE_OR_ZERO_VAL, NOT_POSSIBLE, SCALENE, ISOCELES, EQUILATERAL} from '../util/validation';

/* Component Tests */
describe('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* Helper method tests */
describe('Renders error message when invalid input', () => {
  it('handles characters', () => {
    expect(validateSide('a').error).toBe(NON_NUMERIC_VAL);
    expect(validateSide('.').error).toBe(NON_NUMERIC_VAL);
    expect(validateSide('-').error).toBe(NON_NUMERIC_VAL);
  });

  it('handles zeroes', () => {
    expect(validateSide('0').error).toBe(NEGATIVE_OR_ZERO_VAL);

  });

  it('handles negatives', () => {
    expect(validateSide('-9').error).toBe(NEGATIVE_OR_ZERO_VAL);
    expect(validateSide('-.009').error).toBe(NEGATIVE_OR_ZERO_VAL);
  });

});

describe('Does not render an error message when valid input', () => {
  it('handles positive integer values', () => {
    expect(validateSide('1').error).toBe("");
    expect(validateSide('01').error).toBe("");
  });

  it('handles floats', () => {
    expect(validateSide('.01').error).toBe("");
    expect(validateSide('.1').error).toBe("");
    expect(validateSide('1.01').error).toBe("");
  });

});

describe('Returns true when all sides are valid inputs', () => {
  expect(validateAllSides( parseFloat('1'), parseFloat('1'), parseFloat('1'))).toBe(true);
  expect(validateAllSides( parseFloat('.1'), parseFloat('.2'), parseFloat('.3'))).toBe(true);
  expect(validateAllSides( parseFloat('.1'), parseFloat('1.01'), parseFloat('1'))).toBe(true);
});

describe('Returns false when not all sides are valid inputs', () => {

  it('handles 1 or more missing inputs', () => {
      expect(validateAllSides(parseFloat(''), parseFloat(''), parseFloat(''))).toBe(false);
      expect(validateAllSides(parseFloat('1'), parseFloat(''), parseFloat(''))).toBe(false);
      expect(validateAllSides(parseFloat('1'), parseFloat('2'), parseFloat(''))).toBe(false);
  });

  it('handles 1 or more negative/zero inputs', () => {
    expect(validateAllSides(parseFloat('-9'), parseFloat('1'), parseFloat('1'))).toBe(false);
    expect(validateAllSides(parseFloat('0'), parseFloat('1'), parseFloat('1'))).toBe(false);
  });

  it('handles 1 or more non-numeric inputs', () => {
    expect(validateAllSides(parseFloat('a'), parseFloat('1'), parseFloat('1'))).toBe(false);
  });

});

describe('Correctly determines type of triangle', () => {
  it('Returns NOT_POSSIBLE when one side is greater than the other two sides combined', () => {
    expect(determineType(parseFloat('100'), parseFloat('1'), parseFloat('1'))).toBe(NOT_POSSIBLE);
  });

  it('Returns EQUILATERAL when all sides equal', () => {
    expect(determineType(parseFloat('1'), parseFloat('1'), parseFloat('1'))).toBe(EQUILATERAL);
  });

  it('Returns ISOCELES when 2 sides are same', () => {
    expect(determineType(parseFloat('1'), parseFloat('1'), parseFloat('2'))).toBe(ISOCELES);
  });

  it('Returns SCALENE when all sides differ', () => {
      expect(determineType(parseFloat('1'), parseFloat('2'), parseFloat('3'))).toBe(SCALENE);
  });

});
