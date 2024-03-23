import React from "react";
import TopBar from "./Topbar";
import cloud  from "../Assets/wind.png";
import { MdSearch } from "react-icons/md";
export const WeatherApp = () => {
  let api_key = "80485c9a94bd69ae60472df3302dc072";
  
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&units=metric&q=${element[0].value}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity");
    const temperature = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("location");
    const icon = document.getElementsByClassName("weather-icon");

    humidity[0].innerHTML = data.main.humidity + "%";
    temperature[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name ;
    icon[0].src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  };

  return (
    <div className="w-1/4 m-10 h-1/4 shadow-lg right-0 items-center hover:scale-105 transistion duration-500 rounded-[8px] grad relative">
      <div className="flex p-4 pb-4 justify-evenly items-center">
        <input
          type="text"
          className="cityInput w-5/6 h-14 pl-3 hover:opacity-100 opacity-80 transition duration-500 hover:shadow-lg border-textPrimary rounded-full"
          placeholder="Search location..."
        />
        <div
          className="bg-green w-14 h-14 text-transparent rounded-full items-center border-textPrimary hover:border-2 cursor-pointer hover:opacity-100 opacity-95 transition duration-500 hover:shadow-md justify-center pt-0.5 pl-0.5 flex"
          onClick={() => {
            search();
          }}
        >
          <MdSearch size={30} />
        </div>
      </div>
      <div className="items-center pt-5 z-0 justify-center flex">
      <img
          className="weather-icon"
          src={cloud}
          alt="Weather Icon"
          
        style={{ position: "absolute", zIndex: "1", height: "100px" }} />
        <div className="text-white ml-auto mr-auto mt-0 mb-0 text-8xl opacity-40 font-semibold flex items-center justify-center pb-10 location">
          London
        </div>
      </div>
      <div className="p-5">
        <div className="text-white temp justify-center flex text-8xl font-bold place-items-center">
          24°C
        </div>
        <div className="text-3xl text-blue font-bold justify-center flex opacity-20">
          Temperature
        </div>
      </div>
      <div className="pb-10">
        <div className="text-white humidity text-7xl justify-center flex font-bold place-items-center">
          <div>60%</div>
        </div>
        <div className="text-3xl text-blue font-bold justify-center flex opacity-20">
          Humidity
        </div>
      </div>
      <div className="flex justify-center">
        
      </div>
    </div>
  );
};
