import React from "react";
import Cards from "./Cards";

function BookDetails({ bookName }) {
  return (
    <>
      <div className="flex flex-col items-center  lg:flex-row ">
        <img
          src="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
          alt="book-img"
          className="w-42 rounded-2xl my-5 lg:hidden"
        />
        <div className="w-[95%] bg-[#4A3B2D] rounded-2xl p-10 lg:mt-5 m-auto">
          <div className="flex justify-between gap-x-10">
            <img
              src="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
              alt=""
              className="hidden w-64 rounded-2xl my-5 lg:block"
            />
            <div className="flex flex-col">
              <h1 className="font-Inter text-2xl text-[#E3B778] my-2 lg:text-4xl lg:my-4">
                {bookName}
              </h1>
              <p className="text-[#F5E9DC] font-Inter text-[12px] lg:text-[18px] text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                non ad unde veritatis quibusdam fugit nulla id, nihil dolorem
                cupiditate voluptas. Cum vitae quasi reiciendis, laboriosam eius
                ex ab suscipit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nisi non ad unde veritatis quibusdam fugit
                nulla id, nihil dolorem cupiditate voluptas. Cum vitae quasi
                reiciendis, laboriosam eius ex ab
              </p>
              <p className="my-2">Rating - XXX</p>
              <p className="my-2">Genres</p>
              <button className="mt-4 bg-[#D9A08E] p-2 rounded-2xl font-Inter text-[12px] text-[#1A2E3B] font-bold border-none lg:max-w-80 lg:py-3 lg:text-2xl">
                Generate Summary
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-Inter font-medium text-2xl lg:text-3xl text-[#1A2E3B] w-[92%] mx-auto mt-2 lg:mt-6">
          Related :
        </h1>

        <div className="w-[80%] mx-auto lg:mt-6 gap-x-2 flex flex-wrap justify-start">
          <Cards
            imgSrc="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
            bookName="BookName"
          />
          <Cards
            imgSrc="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
            bookName="BookName"
          />
          <Cards
            imgSrc="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
            bookName="BookName"
          />
          <Cards
            imgSrc="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
            bookName="BookName"
          />
          <Cards
            imgSrc="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
            bookName="BookName"
          />
          <Cards
            imgSrc="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
            bookName="BookName"
          />
          <Cards
            imgSrc="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
            bookName="BookName"
          />
          <Cards
            imgSrc="https://m.media-amazon.com/images/I/51CBLURjpWL._AC_UF350,350_QL50_.jpg"
            bookName="BookName"
          />
        </div>
      </div>
    </>
  );
}

export default BookDetails;
