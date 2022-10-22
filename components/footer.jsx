import React from 'react'
import Image from 'next/image'
import img from '../public/4.png'
import img2 from '../public/5.png'
import git from '../public/github.png'
const Footer = () => {
  return (
    <div className='footer'>
        <Image className='logo' src={img}  layout="fixed" width= {30}
              height= {30}/>
     <Image className='logo' src={git} layout="fixed" width= {30}
              height= {30}/>
    <Image className='logo' src={img2} layout="fixed" width= {30}
              height= {30}/>
   
    </div>
  )
}

export default Footer