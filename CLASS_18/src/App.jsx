import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 tracking-wide drop-shadow-sm">🛒 Nayeem's Product Store</h1>
          <p className="text-gray-600 text-md mt-2">Browse and explore our premium products</p>
        </header>
        <div className='grid grid-cols-3 gap-4'> 
          <div className='col-span-2'><ProductList></ProductList></div>
          <Card/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App