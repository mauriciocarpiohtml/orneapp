
import { useState, createContext } from 'react'

const OrneContext = createContext()

function MyContext({children}) {

  // estados pagina de añadir
    const [pacientes, setPacientes] = useState([])
    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [pacienteBuscado, setPacienteBuscado] = useState('')
   
    // estados formulario 

    const [fecha, setFecha] = useState('')
    const [pesoActual, setPesoActual] = useState('')
    const [brazoRelajado, setBrazoRelajado] = useState('')
    const [brazoTension, setBrazoTension] = useState('')  
    const [control, setControl] = useState('')

    //estados pagina paciente
    const [resultadosControl, setResultadosControl] = useState([])
    const [controles, setControles] = useState([])

    const [formularioControl, setFormularioControl] = useState(false)

    function abrirFormularioControl(){
      setFormularioControl(true)
    }
    
    function abrirFormulario(){
        setMostrarFormulario(true)
    }

    function obtenerPaciente(datosPaciente){
      setResultadosControl(datosPaciente)
    }
    
  return (
    <OrneContext.Provider 
    value={{abrirFormulario, mostrarFormulario, setMostrarFormulario, 
    pacientes, setPacientes, pacienteBuscado, setPacienteBuscado,
    resultadosControl, setResultadosControl, obtenerPaciente, controles, setControles, 
    formularioControl, setFormularioControl, abrirFormularioControl, fecha, setFecha, pesoActual,
    setPesoActual, brazoRelajado, setBrazoRelajado,brazoTension, setBrazoTension, control, setControl }}>
        {children}
    </OrneContext.Provider>
  )
}

export default OrneContext

export {MyContext}
