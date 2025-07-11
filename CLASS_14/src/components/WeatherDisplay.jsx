import React, { Fragment, useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

function WeatherDisplay() {
    // const {Weather, Loading, Error, City } = useContext(WeatherContext)
    const { weather, loading, error, city } = useContext(WeatherContext);


    if(loading){
        return <p className="text-center text-blue-600">Loading weather... </p>
    }
        if(error){
            return <p className="text-center text-red-500 ">{error}</p>
        }
         

       if(!weather) return null



            
        
  return (
    <Fragment>
      <div className="mt-4 p-6 bg-blue-50 rounded-xl shadow-inner text-center ">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">{city}</h2>
        {/* <p>{Math.round(Weather.main.trmp)}degre celsius</p> */}
        {/* <p>{Weather.Weather[0].description}</p> */}
        <p>{Math.round(weather.main.temp)}°C</p>
        <div className="flex justify-center text-sm text-blue-600 mt-4">
        </div>

        <p className="font-medium">Humidity</p>
        {/* <p>{Weather.main.humidity}%</p> */}
        <p>{weather.weather[0].description}</p>

      </div>
      <div>
        <p className="font-medium">Feels like </p>
        {/* <p>{Math.round(Weather.main_like)} degree celsius</p> */}
        <p>{Math.round(weather.main.feels_like)}°C</p>

      </div>
      <div>
        <p className="font-medium">Wind</p>
        {/* <p>{Weather.wind.speed} m/s</p> */}
         <p>{weather.wind.speed} m/s</p>
      </div>
    </Fragment>
  )
}

export default WeatherDisplay