import React, {useState} from 'react'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import Balance from './Balance'



const AddTransaction = () => {
const [des, setdes]=useState('')
const [amount, setAmount]=useState()
const [type, setType]=useState('Income')
// const [del,setdel]=useState('')
const [list,setlist]=useState([])
const [idCounter,setIdCounter]=useState(1)


const transac=()=>{

 const calculatedAmount = type === 'Expense' ? -amount : amount;

 
 const data = { id: idCounter, des, amount: calculatedAmount, type };
  
  if (des&&amount&&type) {
    // console.log(des,amount,type)
    setlist((cur)=>[...cur,data])
    setdes('')
    setAmount(0)
    setType('Expense')
    setIdCounter((prevCounter) => prevCounter + 1);
  }

}

const handledel=(id)=>{
  const updatedItem=list.filter((cur)=>{
            return cur.id !==id;
  })
  setlist(updatedItem)
}

  return (
    <>
    
    <div className=' space-x-6 mt-[10px]'>
        <span  className='text-[24px] ml-[40px] '>Add Transaction</span>
     </div>
      <div className='flex flex-col mt-[10px]'>

        <form className='ml-[25px]'>
        <div className='flex flex-row text-[18px]  text-[#0a3f0a] text-lg gap-3'>
          <div className='flex flex-col h-8 w-[220px]'>
        <label for='des'>Description</label>
        <input type='text' required='required' id='des' placeholder='Enter Description...' value={des} onChange={(e)=>setdes(e.target.value)}></input>
        </div>

        <div className='flex flex-col  h-8 w-[220px]'>
        <label for='Amount'>Amount</label>
        <input type='Number' required='required' id='Number' value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))}></input>
        </div>
         </div>

         <div className='text-[#0a3f0a] text-lg mt-7 gap-5'>
         <input
            type='radio'
             value='Income'
             name='type'
            checked={type === 'Income'}
           onChange={(e) => setType(e.target.value)}
              />
        <label htmlFor='income'>Income</label>

        <input
          type='radio'
          value='Expense'
          name='type'
          checked={type === 'Expense'}
           onChange={(e) => setType(e.target.value)}
           className='ml-3'
           />
<label htmlFor='Expense'>Expense</label>
         </div>
         
        <button type='button' onClick={transac}
         className='bg-[#0a3f0a] text-[#e5ffdb] rounded-[40px] mt-3 h-[40px] w-[80px] text-[15px] cursor-pointer'>
          ADD
          </button>

        </form>
        <div className='mt-6 z-10'>
      {
  list.map((cur) => (
    <div className='text-[#0a3f0a] bg-[#e5ffdb] text-lg align-center justify-center z-10 w-[400px]'>
      <li key={cur.id} className='flex flex-row ml-10 my-5'>
        {cur.des}
        <div className='grid ml-auto'>
          <span>${cur.amount}</span>
        </div>
        <div className='cursor-pointer ml-auto'>
          <RiDeleteBack2Fill className='size:[2rem] scroll-mr-4' onClick={() => handledel(cur.id)} />
        </div>
      </li>
    </div>
  ))
}

        </div>
      </div>
      {/* <Expenses amount={amount} /> */}
      <Balance list={list}/>
    </>
  )
}

export default AddTransaction
