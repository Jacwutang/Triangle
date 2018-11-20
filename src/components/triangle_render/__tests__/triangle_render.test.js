import React from 'react';
import ReactDOM from 'react-dom';
import TriangleRender from '../triangle_render';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TriangleRender />, div);
  ReactDOM.unmountComponentAtNode(div);
});
