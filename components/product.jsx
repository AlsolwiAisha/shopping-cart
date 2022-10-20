import React, { useState } from 'react'
import Cart from './cart';
import { useRouter } from 'next/router'
const Product = ({products}) => {
  const [cart,setCart]=useState([]);
 const[cartnum,setCartnum]=useState(0);
 const [total,setTotal]=useState(0);
function addcart(img,price,title){
  setTotal(total+price)
  setCartnum(cartnum+1)
   return (
       setCart([...cart,{image:{img},price:{price},title:{title}}])
     
   )
}
function carts(){ }
console.log(total)
  return( <>
   <div className='allPro'>
        {products.map((products) => {
           return (
               <div className='proInfo' >
                 <img  src={products.image} alt="" />
                 <div className='proTitle'>{products.title}</div>
                 <div>{products.price} $</div>
                 <div>{products.category}</div>
                 <button className='btn' onClick={()=>{addcart(products.image  ,products.price,products.title );carts()}} 
                >Add to card</button>
                </div>
           );
         })}
      
  
   </div>
   <div className="carts">
    <div><Cart cart={cart}/></div> 
    <div>
     <p>cart: {cartnum} </p>   
     <p>total={total}$</p>
     <button> Pay</button>
    </div>

 </div>
   </>)
}

export default Product