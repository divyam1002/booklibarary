import React from "react";
import RecomendedCard from "./RecomendedCard";

function Search() {
  const genres = [
    "Romance",
    "Scifi",
    "Fantasy",
    "Paranormal",
    "Horror",
    "Mystery",
    "Thriller",
  ];

  return (
    <>
      <div className="w-[95%] mx-auto mt-[-80px] p-6 rounded-3xl bg-[#1E293B] flex flex-col justify-center items-center shadow-xl">
        <div className="mt-15">
          <h2 className="font-bold text-4xl lg:text-5xl xl:text-[112px] font-Inter text-[#E3B778] m-10 text-center select-none tracking-tight">
            Seek, Read, Grow
          </h2>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="bg-[#F1F5F9] text-[#1E293B] font-Inter rounded-2xl w-[250px] xl:w-[1000px] h-10 xl:h-16 px-5 mb-6 outline-none text-base xl:text-2xl placeholder:font-medium focus:ring-4 focus:ring-[#FBBF24] transition-all duration-300"
        />

        <div className="flex flex-wrap justify-center gap-2 xl:gap-4 mb-4">
          {genres.map((genre, index) => (
            <button
              key={index}
              className="bg-[#E3B778] hover:bg-[#E3B763] transform hover:scale-105 transition-all duration-200 font-Inter font-semibold text-[#1E293B] rounded-[12px] p-2 w-[68px] xl:w-[120px] xl:p-4 text-[10px] xl:text-[16px] shadow-md"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-6">
        <RecomendedCard />
      </div>
    </>
  );
}

export default Search;
