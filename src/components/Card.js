import React from "react";
import "../index.css";

function Card({ children, isClicked, addCardClicked, cardIndex, pairFinded }) {
  return (
    <div
      className={`border-4 py-8 px-6 flex justify-center border-gray-400 rounded-md select-none w-16 xl:w-10
      ${!pairFinded && "cursor-pointer"}
      ${isClicked && !pairFinded && "border-gray-800 flip-2-ver-right-2"} 
      ${pairFinded && "border-green-600"}
      ${pairFinded || `hover:border-gray-800`}
      `}
      onClick={() => addCardClicked(children, cardIndex)}
    >
      <div className={isClicked || pairFinded ? "block" : "invisible"}>
        {children}
      </div>
    </div>
  );
}

export default Card;
