import React from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import OrneContext from '../Context/MyContext';

function ControlCard({resultado}) {
    const {controles, setControles} = useContext(OrneContext)

  function borrarControl(id){
    const controlesActualizados = controles.filter((control) => control.id !== id);
    setControles(controlesActualizados);
  }

  return (
    <>
        <div className='rounded-lg w-[255px] h-[250px] bg-white shadow-md p-3 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col'>
          <h4 className='font-bold text-stone-500 text-center mb-1'>{resultado.fecha}</h4>

            <div className='mt-1 flex justify-start items-center gap-3'>
              <ControlPointIcon className='text-indigo-600'/>
              <p className='font-bold text-stone-600'> Control: <span className='font-medium text-stone-500'>{resultado.control}</span></p>
            </div>

            <div className='mt-3 flex justify-start items-center gap-3'>
              <FitnessCenterIcon className='text-indigo-600'/>
              <p className='font-bold text-stone-600'> Peso Actual: <span className='font-medium text-stone-500'>{resultado.pesoActual} kg</span></p>
            </div>

            <div className='mt-3 flex justify-start items-center gap-3'>
              <AccessibilityNewIcon className='text-indigo-600'/>
              <p className='font-bold text-stone-600'> Brazo relajado: <span className='font-medium text-stone-500'>{resultado.brazoRelajado} cm</span></p>
            </div>

            <div className='mt-3 flex justify-start items-center gap-3'>
              <EmojiPeopleIcon className='text-indigo-600'/>
              <p className='font-bold text-stone-600'> Brazo en Tensión: <span className='font-medium text-stone-500'>{resultado.brazoTension} cm</span></p>
            </div>

            <div className='mt-5 flex justify-between items-center'>
              <button className='ml-1 p-1 rounded-lg bg-cyan-600 text-white cursor-pointer'> <CreateIcon/> </button>
              <button 
                className='p-1 rounded-lg bg-red-500 text-white cursor-pointer mr-1'
                onClick={()=> borrarControl(resultado.id)}>
                <DeleteIcon/> 
              </button>

            </div>
        </div>
        
    </>
  )
}

export default ControlCard
