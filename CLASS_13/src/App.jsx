
import { lazy, Suspense, useCallback, useState } from 'react'
import './App.css'
import ExpensivChild from './components/ExpensivChild'
import MemoizedButton from './components/MemoizedButton'
const LazyComponent = lazy(()=>import("./components/LazyLoadedComponent"))

function App() {
  const [count, setCount] = useState(0)
  const [showLazy, setShowLazy] = useState(false)

  const increment = useCallback(() =>{
    setCount((prev)=> prev + 1)
  },[])

  return (
    <>
    <div style={{textAlign:"center", padding:"2rem"}}>
      <h1>React Memoization Demo</h1>
      <p>Count:{count}</p>
      <MemoizedButton onClick={increment} label="increment"/>
      <ExpensivChild count={count}/>
      <button onClick={()=>setShowLazy(true)}>Load Lazt Component</button>
       
        <Suspense fallback={<div>Loading....</div>}>
        {showLazy && <LazyComponent/>}
        </Suspense>
    </div>
    </>
  )
}

export default App
