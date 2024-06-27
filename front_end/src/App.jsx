import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<MainPage />
  }
])

function App() {
  return <RouterProvider router={routes}/>
}

export default App