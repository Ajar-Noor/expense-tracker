import React from 'react'

const Balance = (props) => {
    const {list}=props;
    const amount=list.map((list=>list.amount))
   const total=amount.reduce((acc, item)=>(acc += item),0)
   const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1);

  return (
    <div>
       <div className='text-[#e5ffdb] text-base ml-[90px]  flex gap-x-16 z-20'>

       <div className='flex flex-col top-[150px] fixed'>
        <span>Income</span>
        <span> +${income}</span>
        </div>

        <div className='flex flex-col top-[150px] left-[710px] fixed'>
        <span>Expense</span>
        <span> -${expense}</span>
        </div>
    
        <div className='flex flex-col top-[150px] left-[840px] fixed'>
        <span>Balance</span>
        <span> ${total}</span>
        </div>
        
      </div>
    </div>
  )
}

export default Balance
