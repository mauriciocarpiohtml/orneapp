import React from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function ControlCard({resultado}) {
    
  return (
    <>
        <div className='rounded-lg w-[250px] h-[210px] bg-white shadow-md p-3 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col'>
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
        </div>
        
    </>
  )
}

export default ControlCard
