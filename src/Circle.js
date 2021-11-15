import React from "react";

const Circle = (props) => {
  return <div className={`circle ${props.color}`}>{props.id} </div>;
};

export default Circle;
