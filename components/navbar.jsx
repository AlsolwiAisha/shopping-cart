import Link from 'next/link'
import Image from 'next/image'
import img from '../public/shopping-cart.png'
const Navbar = () => {
  return (
    <div className='nav'>
      <Image className='logo' src={img} layout="fixed" width= {50}
              height= {50}/>
      <div className='navLink'>
      <Link href="/"> home</Link>   
      {/* <Link href="/about"> about</Link>    */}
</div>
 </div>
  )
}

export default Navbar

