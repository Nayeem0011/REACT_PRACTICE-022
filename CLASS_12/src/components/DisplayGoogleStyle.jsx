import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherDisplay = () => {
  const { city, weather, loading, error } = useContext(WeatherContext);

  if (loading) {
    return <p className="text-center text-blue-700 text-lg">Loading weather...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 bg-red-100 px-4 py-2 rounded-md font-medium">
        {error}
      </p>
    );
  }

  if (!weather) return null;

  return (
    <div className="mt-8 max-w-sm w-full mx-auto bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center space-y-4 text-gray-800">
      
      {/* City */}
      <h2 className="text-2xl font-bold text-blue-700">{city}</h2>

      {/* Icon & Description */}
      <div className="flex flex-col items-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="w-20 h-20"
        />
        <p className="capitalize text-lg">{weather.weather[0].description}</p>
      </div>

      {/* Temperature */}
      <p className="text-5xl font-extrabold text-blue-800">
        {Math.round(weather.main.temp)}°C
      </p>

      {/* Weather Stats */}
      <div className="grid grid-cols-3 gap-4 w-full text-sm text-center mt-4">
        <div>
          <p className="text-gray-500">Humidity</p>
          <p className="font-medium">{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="text-gray-500">Wind</p>
          <p className="font-medium">{weather.wind.speed} m/s</p>
        </div>
        <div>
          <p className="text-gray-500">Feels Like</p>
          <p className="font-medium">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
