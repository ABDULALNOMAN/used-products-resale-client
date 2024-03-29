import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Component/Router/Router'
import { useContext } from 'react'
import { CallContext } from './Component/Context/Context'

function App() {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
