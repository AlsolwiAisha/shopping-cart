import React from 'react'

const Product = ({products}) => {
  return (
    <div>
         {products.map((products) => {
            return (
              <div className='proInfo' >
               <div>{products.id}</div> 
               <img  src={products.image} alt="" />
              </div>
            );
          })}
    </div>
  )
}

export default Product