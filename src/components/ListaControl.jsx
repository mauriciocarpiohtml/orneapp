import React, { useEffect } from 'react'
import BotonControl from './BotonControl'
import ControlCard from './ControlCard'
import { useContext,useState } from 'react'
import OrneContext from '../Context/MyContext'

function ListaControl() {

    const {resultadosControl, controles, setControles} = useContext(OrneContext)
    console.log(controles)

    useEffect(()=>{
      setControles([resultadosControl])
   },[])
    console.log(controles)
  return (
    <>
        <div className='my-3 p-3 '>
            <h3 className='text-stone-600 text-xl font-bold ml-10'>Resultados</h3>
        </div>

         <div className='w-[85%] flex flex-wrap gap-5 mt-3 mb-3 mx-auto'>
            {controles.map((resultado=>
                                    <ControlCard
                                    resultado={resultado}
                                    key={resultado.id}/>))}
        </div> 
        <BotonControl/>
    </>
  )
}

export default ListaControl
