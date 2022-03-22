import React from "react";

const Box = (props) => {
  return (
    <div class="card">
      <div>
        <h2>{props.name}</h2>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
        <p>Languages:</p>
      </div>
    </div>
  );
};

export default Box;
