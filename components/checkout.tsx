import React from 'react'
import Image from 'next/image'
import locate from "../public/maps.svg"
import bill from "../public/bill.svg"
export default function Checkout() {
  return (
    <div className='flex flex-col justify-center p-[12px] h-[146px] m-[14px] border-2 w-[90%] rounded-[10px] bg-white'>
       <div className='flex flex-row border-b-2 mb-2'>
        <div><Image src={locate} alt="bill"/></div>
        <div className='mb-2'>
            <p>Deliver to</p>
            <p>23rd Avenue, JP, Banglore</p>
        </div>
       </div>
       <div className='flex flex-row'>
        <div className='flex flex-col'><Image src={bill} alt="locate"/>
            <p>Deliver to</p>
            <p>23rd Avenue, JP, Banglore</p>
        </div>
        <div>
            $ 54
        </div>
       </div>
    </div>
  )
}
