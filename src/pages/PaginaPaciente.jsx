import React from 'react'
import { useContext } from 'react'
import ListaControl from '../components/ListaControl'
import FormularioControl from '../components/FormularioControl'
import OrneContext from '../Context/MyContext'
import BarPeso from '../components/BarPeso'

// aca pondria el whatsapp y el email y aparte los pondria en display flex con el logo de whatsapp y el emaill para que
// se vea mejor

function PaginaPaciente() {
  const {resultadosControl, formularioControl} = useContext(OrneContext)
  const datosContacto = resultadosControl
  const {nombre, apellido, telefono} = datosContacto
  return (
    <>
    <div className='mt-5 p-5 flex flex-col'>
      <h3 className='text-indigo-800 font-bold text-3xl text-center uppercase'>{`${nombre} ${apellido}`}</h3>
      <h4 className='text-indigo-600 font-bold text-xl text-center mt-3'>{`${telefono}`}</h4>
    </div>
    <ListaControl/>
    {formularioControl && <FormularioControl/>}
    <div className='mt-5 mb-10 w-[85%] h-[85%] md:w-[65%] md:h-[45%] p-3 mx-auto'>
     <BarPeso/>
    </div>
    
    </>
  )
}

export default PaginaPaciente
