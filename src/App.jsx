
import Navbar from "./componentes/navbar/index.jsx"
import Home from "./Pages/Home/index.jsx"
import React from "react"
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from "./Context/index.jsx"


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  ])
  return routes
}





function App() {

  return (
    <>
      <CartContextProvider>
        
        <BrowserRouter>
        <Navbar />
        <AppRoutes />
        </BrowserRouter>
      
      </CartContextProvider>
    </>

  )
}

export default App
