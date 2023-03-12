import Sidebar from "../components/Sidebar"

function Calendario() {
  return (
    <div className='flex'>
      <div className='md:w-[20%]'>
        <Sidebar />
      </div>
      <div className='md:w-[80%] ml-auto mr-auto'>
        <div className='mt-5 p-5 '>
            <h3>Calendario aca</h3>
        </div>

      </div>
    </div>
  )
}

export default Calendario
