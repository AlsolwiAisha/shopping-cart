import React, { useState } from 'react'
import update from 'immutability-helper'
import Image from 'next/image'
const Cart = ({cart}) => {
 
  return (
    <div >
      your Cart is:
       {cart.map((crt) => {
           return (
        <div className='cartMain'>
            <Image src={crt.image.img} alt={crt.title.title} layout="fixed" width= {30}
  height= {30} />
            <div>{crt.price.price}</div>
            <div className='proTitle'>{crt.title.title}</div>
            {/* <button onClick={()=>{removeItem({image:{img},price:{price},title:{title}})}} >del</button> */}
        </div>)}
        )}
       
     </div>
    
  )
}

export default Cart