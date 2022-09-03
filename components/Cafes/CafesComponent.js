import React from "react";
import CardComponent from "../Card/CardComponent";
export default function CafesComponent() {
  const cafes = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Author 1",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Author 2",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Author 3",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Author 4",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-gray-800">
      <div className="flex w-full pt-[60px]"></div>
      <p className="font-sans font-extrabold tracking-widest text-center text-white text-3xl md:text-[25px] ml-[20px] mr-[20px] mt-[10px]">
        CAFE
      </p>
      <div className="flex flex-wrap justify-center mt-[80px]">
        {cafes.map((cafe) => {
          return <CardComponent text={cafe.text} author={cafe.author} />;
        })}
      </div>
    </div>
  );
}
