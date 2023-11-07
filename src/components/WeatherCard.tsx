import { WeatherData } from "../types";
import { toFahrenheit } from "../utils/toFahrenheit";

type WeatherCardProps = {
  units: string;
  weatherData: WeatherData;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, units }) => {
  if (weatherData) {
    return (
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">{weatherData.name}</h2>
        <p className="mb-2">
          Temperature:{" "}
          {units === "imperial"
            ? toFahrenheit(weatherData.main.temp) + "° F"
            : Math.floor(weatherData.main.temp) + "° C"}
        </p>
        <p className="mb-2">
          Description: {weatherData.weather[0].description}
        </p>
        <p className="mb-2">
          Feels like :{" "}
          {units === "imperial"
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
