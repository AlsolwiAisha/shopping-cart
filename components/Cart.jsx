import React from 'react'

const Cart = ({cart}) => {
  return (
    <div >
      your Cart is:
       {cart.map((crt) => {
           return (
        <div className='cartMain'>
            <img src={crt.image.img} alt="" />
            <div>{crt.price.price}</div>
            <div>{crt.title.title}</div>
        </div>)}
        )}
       
     </div>
    
  )
}

export default Cart