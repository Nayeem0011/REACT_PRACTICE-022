import { createContext, useState } from "react";

// export const WeatherContext = createContext
export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState ('')
    const [weather, setWeather] = useState(null);

    // const [weather,setWather] = useState (null)

    const [loading, setLoading] = useState (false)
    const [error, setError] = useState ('')
    const fetchWeather = async (cityName) => {
        setLoading (true)
        setError('')
        setCity(cityName)


        try {
            // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=$
            // {cityName}&appid=2e758dbdde0c313750d78fa22ce2a9fb&units=metric`)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2e758dbdde0c313750d78fa22ce2a9fb&units=metric`)
            // const data = await response.json
            const data = await response.json();
            console.log(data)
            if(response.ok){
                setWeather(data)
            }else{
                // setError(data, massage || 'fetching weather Error')
                setError(data.message || 'Fetching weather error');

            }
        
        
        } catch (error) {
            setError ('Network Error', error)
            // setError('Network Error');  
        }finally{
            setLoading(false)
        }

    }

    return (
        <WeatherContext.Provider value={{city, weather,loading,error,fetchWeather}}>
            {/* (children) */}
            {children}

        </WeatherContext.Provider>
    )

}