import Image from 'next/image'
const Cart = ({cart}) => {
 
  return (
    <div className='cart'>
     <h2>your Cart is:</h2> 
       {cart.map((crt) => {
           return (
        <div className='cartMain'>
          <div key={crt.id.id}>
            <Image src={crt.image.img} alt={crt.title.title} layout="fixed" width= {30}
              height= {30} />
            <div>{crt.price.price}</div>
            <div className='proTitle'>{crt.title.title}</div>
            {/* <button onClick={()=>{removeItem({image:{img},price:{price},title:{title}})}} >del</button> */}
       </div>
        </div>)}
        )}
       
     </div>
    
  )
}

export default Cart