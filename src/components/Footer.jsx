import React from 'react'
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='rounded-div2 min-h-[30vh] flex flex-col items-center justify-center'>

       <div className='text-center font-medium '>
            <p className='hover:text-blue-600 cursor-pointer'>ABOUT US</p>
            <p className='hover:text-blue-600 cursor-pointer'>CONTACT</p>
            <p className='hover:text-blue-600 cursor-pointer'>API STATUS</p>
         <Link to="/" ><p className='hover:text-blue-600 cursor-pointer'>HOME</p></Link>
              
      </div>

      <div className='flex p-3 gap-4  text-blue-500 scale-125 cursor-pointer '>
         <FaTwitter className='hover:scale-150'/>
         <FaFacebook  className='hover:scale-150'/>
         <FaReddit  className='hover:scale-150'/>
         <FaGithub  className='hover:scale-150'/>
       </div>

       <div className='text-center'>
        <h2>- Made by Shoaib Abdul Khadeer -❤</h2>
        <p>Powered By Coin Gecko</p>
       </div>

    </div>
  )
}

export default Footer
