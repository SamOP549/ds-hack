import React from "react";
import BanksComponent from "../components/Banks/BanksComponent";
import CafesComponent from "../components/Cafes/CafesComponent";
import ClubsComponent from "../components/Clubs/ClubsComponent";
import LogisticsComponent from "../components/Logistics/LogisticsComponent";
import MedicalsComponent from "../components/Medicals/MedicalsComponent";

export default function Hero() {
  return (
    <>
      <div className="h-screen bg-gray-800 ">
        <div className="flex h-screen justify-center items-center">
          <div className="text-center">
            <h1 className="text-[84px] font-sans font-extrabold tracking-widest ">
              COLLEGE NOTITIA
            </h1>
            <p className="text-xl text-white pb-[70px]">
              a place where you can find all places
            </p>
          </div>
        </div>
        <div className="flex rounded-lg h-64 justify-center items-center bg-gray-400 -my-64 mb-64">
          <div className="w-1/6 text-center">logistics</div>
          <div className="w-1/6 text-center">banks</div>
          <div className="w-1/6 text-center">medicals</div>
          <div className="w-1/6 text-center">cafe/restaurants</div>
          <div className="w-1/6 text-center">rentals</div>
          <div className="w-1/6 text-center">clubs</div>
        </div>
      </div>
      <LogisticsComponent />
      <MedicalsComponent />
      <BanksComponent />
      <CafesComponent />
      <ClubsComponent />
    </>
  );
}
