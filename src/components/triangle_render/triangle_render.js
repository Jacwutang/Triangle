import React from 'react';
import './triangle_render.css';

const TriangleRender = (props) => {
  return(
    <div>

      <h2> The Triangle is: {props.type} </h2>

    </div>
  )
}

// {props.side_one}
// {props.side_two}
// {props.side_three}

export default TriangleRender;
