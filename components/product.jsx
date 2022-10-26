import React, { useState } from 'react'
import Cart from './cart';
import Stylse from'../styles/Product.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image';
const Product = ({products}) => {
  const [cart,setCart]=useState([]);
 const[cartnum,setCartnum]=useState(0);
 const [total,setTotal]=useState(0);
function addcart(id,img,price,title){
  setTotal(total+price)
  setCartnum(cartnum+1)
   return (
       setCart([...cart,{id:{id},image:{img},price:{price},title:{title}}])
     
   )
}
function carts(){ }
console.log(total)
  return( <>
   <div className={Stylse.allPro}>
        {products.map((products) => {
           return (
               <div className={Stylse.proInfo} >
                 <Image  src={products.image} alt={products.title}  width="120px"
        height="120px" />
                 <div className={Stylse.proTitle}>{products.title}</div>
                 <div>{products.price} $</div>
                 <div>{products.category}</div>
                    <button className={Stylse.btn} onClick={()=>{addcart(products.id,products.image  ,products.price,products.title );carts()}} 
                >Add to card</button>
                </div>
           );
         })}
      
  
   </div>
   <div className={Stylse.carts}>
    <div><Cart cart={cart}/></div> 
    <div className={Stylse.tot}>
     <p>cart: {cartnum} </p>   
     <p>total={total.toFixed(2)}$</p>
     <button className={Stylse.button}> Pay</button>
    </div>

 </div>
   </>)
}

export default Product