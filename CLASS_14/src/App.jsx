import './App.css'
import SearchBar from './Components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'
import { WeatherProvider } from './context/WeatherContext'


function App() {     
  return(
    <> 
    <WeatherProvider>
      <div className="max-w-md mx-auto mt-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Weather App</h1>
        <SearchBar/>
        <WeatherDisplay/>
      </div>
    </WeatherProvider>
    </>
  )
}

export default App