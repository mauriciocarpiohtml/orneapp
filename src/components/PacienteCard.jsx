import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import OrneContext from '../Context/MyContext'

function PacienteCard({paciente}) {
  const {obtenerPaciente} = useContext(OrneContext)

  return (
    <Link to={`/paciente/${paciente.id}`}>
        <div
        onClick={()=> obtenerPaciente(paciente) } 
        className='rounded-lg w-[180px] h-[200px] bg-indigo-600 shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 flex flex-col'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person-vcard text-white w-[50%] p-1 mx-auto" viewBox="0 0 16 16">
            <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
        </svg>

        <div className='flex flex-col justify-center items-center'>
            <h3 className='uppercase text-white font-bold'>{paciente.nombre}</h3>
            <h3 className='uppercase text-white font-semibold'>{paciente.apellido}</h3>
            <h3 className='uppercase text-white font-semibold mt-3'>{paciente.telefono}</h3>
        </div>
        </div>
    </Link>
  )
}

export default PacienteCard
