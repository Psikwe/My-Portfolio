import React from "react";

function Card({ image, title, passage }) {
  return (
    <>
      <div className="bg-white p-2">
        <img src={image} />
        <div>{title}</div>
        <div>{passage}</div>
      </div>
    </>
  );
}

export default Card;
