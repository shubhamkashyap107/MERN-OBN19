import React from 'react'

const SaleWrapper = ({children}) => {

  return (
    <div className='relative'>
        <div className='absolute right-0 bg-red-400 text-white'>ON Sale</div>
        {children}
    </div>
  )
}

export default SaleWrapper