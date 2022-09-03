import React from "react";

export default function Hero() {
  return <div class="h-screen bg-gray-800 ">
    <div class="flex h-screen justify-center items-center">
    <div class="text-center">
        <h1 class="text-[84px] font-sans font-extrabold tracking-widest ">COLLEGE NOTITIA</h1>
        <p class="text-xl text-white pb-[70px]">a place where you can find all places</p>
    </div>
    </div>
    <div class="flex rounded-lg h-64 justify-center items-center bg-gray-400 -my-64 mb-64">
          <div class="w-1/6 text-center">logistics</div>
          <div class="w-1/6 text-center">banks</div>
          <div class="w-1/6 text-center">medicals</div>
          <div class="w-1/6 text-center">cafe/restaurants</div>
          <div class="w-1/6 text-center">rentals</div>
          <div class="w-1/6 text-center">clubs</div>
    </div> </div>
}
