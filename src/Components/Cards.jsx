import React from "react";

function Cards({ bookName, imgSrc }) {
  return (
    <div className="w-36 lg:w-64 flex flex-col rounded-xl mt-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div>
        <img src={imgSrc} alt={bookName} className="rounded-t-xl w-full" />
      </div>
      <div className="flex flex-col py-1 px-3 bg-[#1A2E3B] rounded-b-xl">
        <h1 className="text-[#F5E9DC] flex justify-center items-center font-Inter text-center">
          {bookName}
        </h1>
      </div>
    </div>
  );
}

export default Cards;
