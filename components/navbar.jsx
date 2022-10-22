import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='nav'>
      <Link href="/"> home</Link>   
      <Link href="/about"> about</Link>   

 </div>
  )
}

export default Navbar

