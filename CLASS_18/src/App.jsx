import './App.css'
import Footer from './components/Footer'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <ProductList></ProductList>
        <Footer/>
      </div>
    </>
  )
}

export default App
