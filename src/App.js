import React from 'react'
import AddTransaction from './component/AddTransaction'


const App = () => {
  return (
    <>
      <div
     className='h-[600px] w-[500px] my-[40px] mx-[500px] bg-[#0a3f0a] rounded-3xl font-[cursive] font-semibold text-4xl absolute text-[#e5ffdb]'>
      <span className='mt-4 grid justify-center'>Expense-Tracker</span> 
    
      <div className='h-[450px] w-[500px] bg-[#7bdd7b] rounded-3xl top-[180px] absolute'>
      <AddTransaction />
      </div>

        <div
         className='h-[250px] w-[500px] rounded-3xl top-[400px] absolute bg-[#e5ffdb]'>
  
        </div>

      </div>
      
    </>
  )
}

export default App
