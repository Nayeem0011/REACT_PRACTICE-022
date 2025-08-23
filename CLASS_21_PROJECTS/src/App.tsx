import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
