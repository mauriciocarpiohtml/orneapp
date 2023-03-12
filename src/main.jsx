import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MyContext } from './Context/MyContext'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Pacientes from './pages/Pacientes'
import PaginaPaciente from './pages/PaginaPaciente'
import Calendario from './pages/Calendario'

const router = createBrowserRouter([
  {path:'/', element:<Pacientes/>},
  {path:'/calendario', element:<Calendario/>},
  {path:'/paciente/:id', element:<PaginaPaciente/>}
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MyContext>
    
  </React.StrictMode>,
)
