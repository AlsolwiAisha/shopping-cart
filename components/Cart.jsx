import React, { useState } from 'react'
import update from 'immutability-helper'

const Cart = ({cart}) => {
 
  return (
    <div >
      your Cart is:
       {cart.map((crt) => {
           return (
        <div className='cartMain'>
            <img src={crt.image.img} alt="" />
            <div>{crt.price.price}</div>
            <div className='proTitle'>{crt.title.title}</div>
            {/* <button onClick={()=>{removeItem({image:{img},price:{price},title:{title}})}} >del</button> */}
        </div>)}
        )}
       
     </div>
    
  )
}

export default Cart