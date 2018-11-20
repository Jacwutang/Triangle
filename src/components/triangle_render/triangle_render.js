import React from 'react';
import './triangle_render.css';

const TriangleRender = (props) => {
  return(
    <div>
      {props.side_one}
      {props.side_two}
      {props.side_three}
      {props.type}
    </div>
  )
}

export default TriangleRender;
