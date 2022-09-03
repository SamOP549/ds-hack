import React from "react";
import CardComponent from "../Card/CardComponent";
export default function ClubsComponent() {
  return (
    <div className="w-full min-h-screen bg-gray-800">
      <div className="flex w-full pt-[60px]">
      </div>
      <p className="font-sans font-extrabold tracking-widest text-center text-white text-3xl md:text-[25px] ml-[20px] mr-[20px] mt-[10px]">
    CLUBS
      </p>
      <div className="flex flex-wrap justify-center mt-[80px]">
        <CardComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." author="Author 1"/>
        <CardComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." author="Author 2"/>
        <CardComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." author="Author 3"/>
        <CardComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." author="Author 4"/>
      </div>
    </div>
  );
}