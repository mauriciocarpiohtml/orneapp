import React from 'react'
import BotonAgregar from '../components/BotonAgregar'
import Formulario from '../components/Formulario'
import OrneContext from '../Context/MyContext'
import { useContext } from 'react'
import Buscador from '../components/Buscador'
import PacienteCard from '../components/PacienteCard'
import Sidebar from '../components/Sidebar'

function Pacientes() {
    // aca se van a mostrar la lista de todos los pacientes 
    // tiene que haber un boton 
    const {pacientes, mostrarFormulario, pacienteBuscado} = useContext(OrneContext)

    let pacientesFiltrados = []

  if(pacienteBuscado.length >= 1){
      pacientesFiltrados = pacientes.filter( pacientes => {
      const nombre = pacientes.nombre.toLowerCase()
      const apellido = pacientes.apellido.toLowerCase()
      const textoBusqueda = pacienteBuscado.toLowerCase()
     return nombre.includes(textoBusqueda) || apellido.includes(textoBusqueda)
    })

    } else{

    pacientesFiltrados = pacientes
  }

  
    return (
      <>
    <div className='flex'>
        <div className='md:w-[20%]'>
          <Sidebar />
        </div>
        <div className='md:w-[80%] ml-auto mr-auto'>
          <div className='mt-8 md:mt-5 p-5'>
            <h3 className='text-indigo-600 font-bold text-3xl text-center uppercase'>Pacientes Ornella Musolino</h3>
          </div>
          <Buscador />
          {mostrarFormulario && <Formulario />}
          <div className='w-full mt-5 p-3 flex flex-wrap gap-5'>
            {pacientesFiltrados.map(paciente => (
              <PacienteCard key={paciente.id} paciente={paciente} />
            ))}
          </div>
          <BotonAgregar />
        </div>
    </div>
    </>
    )
}

export default Pacientes
