
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset} from './redux/store'

function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h1 className='text-4xl font-bold'>Redux Counter App</h1>
        <p className='bg-pink-500 p-2 rounded font-medium text-xl'>Count : {count}</p>

        <div className='flex justify-center gap-4'>
          <button 
          onClick={()=>dispatch(increment())}
          className='py-2 px-4 bg-red-500 text-xl font-medium rounded hover:bg-red-600 gap-3'>Increment</button>
          <button 
          onClick={()=>dispatch(decrement())}
          className='py-2 px-4 bg-green-500 text-xl font-medium rounded hover:bg-green-600'>Decrement</button>
        </div>
          <button 
          onClick={()=>dispatch(reset())}
          className='py-2 px-4 bg-blue-500 text-xl font-medium rounded hover:bg-blue-600'>Reset</button>
      </div>

    </>
  )
}

export default App
