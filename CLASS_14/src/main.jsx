import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import './index.css'
// import App from './App.jsx'
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router";

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <App />
//     <ReactDOM/>
//   </BrowserRouter>
// );