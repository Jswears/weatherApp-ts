import axios from "axios";
import React, { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { WeatherData } from "../types";
const weatherApi = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [units, setUnits] = useState<string>("celsius");

  const getWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}&units=metric`
    );
    setWeatherData(res.data);
    setCity("");
    console.log(res.data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getWeather();
  };

  const toggleUnits = () => {
    if (units === "celsius") {
      setUnits("fahrenheit");
    } else {
      setUnits("celsius");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col justify-center items-center border-slate-700">
      <h1 className="text-3xl font-semibold mb-4">Weather App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="city" className="mr-2"></label>
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button className="p-2 bg-blue-500 text-white rounded-md ml-2">
          See Weather
        </button>
      </form>
      <button
        onClick={toggleUnits}
        className="p-2 bg-blue-500 text-white rounded-md mb-2"
      >
        {units.toUpperCase()}
      </button>
      {weatherData && <WeatherCard weatherData={weatherData} units={units} />}
    </div>
  );
};

export default WeatherPage;
