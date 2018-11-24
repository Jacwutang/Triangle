import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../calculator';
import {validateSide, validateAllSides, NON_NUMERIC_VAL, NEGATIVE_VAL} from '../util/validation';

/* Component Tests */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* Helper method tests */
test('error message when invalid input detected', () => {
  expect(validateSide('a')).toBe(NON_NUMERIC_VAL);
});
