import { WeatherData } from "../types";
import { toFahrenheit } from "../utils/toFahrenheit";

type WeatherCardProps = {
  units: string;
  weatherData: WeatherData;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, units }) => {
  if (weatherData) {
    return (
      <div className="bg-white p-4 rounded-md shadow-md w-96 border-2 border-slate-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold mb-2">{weatherData.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Icon"
          />
        </div>
        <p className="mb-2">
          Temperature:{" "}
          {units === "fahrenheit"
            ? toFahrenheit(weatherData.main.temp) + "° F"
            : Math.floor(weatherData.main.temp) + "° C"}
        </p>
        <p className="mb-2">
          Description: {weatherData.weather[0].description}
        </p>
        <p className="mb-2">
          Feels like :{" "}
          {units === "fahrenheit"
            ? toFahrenheit(weatherData.main.feels_like) + "° F"
            : Math.floor(weatherData.main.feels_like) + "° C"}
        </p>
        <p className="mb-2">Humidity: {weatherData.main.humidity}%</p>
        <p className="mb-2">Pressure: {weatherData.main.pressure}</p>
        <p className="mb-2">Wind Speed: {weatherData.wind.speed}m/s</p>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-200 p-4 rounded-md shadow-md">
        Search for a city
      </div>
    );
  }
};

export default WeatherCard;
