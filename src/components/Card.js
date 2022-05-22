import React from "react";

function Card({ value, isClicked, addCardClicked, cardIndex }) {
  return (
    <div
      className={`border-2 py-8 px-6 flex justify-center border-gray-400 rounded-md cursor-pointer select-none ${
        isClicked && "border-gray-800"
      } hover:border-gray-800`}
      onClick={() => addCardClicked(cardIndex)}
    >
      <div className={isClicked ? "block" : "invisible" }>{value}</div>
    </div>
  );
}

export default Card;
