import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSkullCrossbones} from 'react-icons/fa';
import { FcHome} from 'react-icons/fc';
import {RiAccountPinBoxFill } from 'react-icons/ri';
import {GrContact } from 'react-icons/gr';


const Navbar = () => {
 
  const [menu,setMenu]= React.useState(false)

  const handleChange = () =>{
    setMenu (prev => !prev)
  }
 

  return (
    <div className='flex justify-between items-center rounded-div2 font-bold h-20 sticky top-0'>
     
     {/* Logo */}
     <Link to="/">
        <h1 className='text-2xl'>CryptoZen</h1>
     </Link>
     {/* /////////// */}

   {/*SignupPage */}
    <div className='hidden md:flex items-center '>
    <Link to="/signin"> 
        <button className='mr-2' >Sign in </button>
    </Link> 
    <Link to="/signup"> 
        <button className='bg-blue-500 text-yellow-50 rounded-3xl px-5 py-2   hover:w-[130px] '> Sign Up </button>
    </Link> 
    </div>
   {/* ////////////////////// */}

    {/* Mobile Hamburger */}
   <div className=' cursor-pointer m-4' onClick={handleChange}>
        {menu ? <FaSkullCrossbones size={25}/> : <GiHamburgerMenu size={25} />}     
   </div>
   {/* ////////////////////////////////////////// */}
   

    {/* Mobile menu */}
    <div className= {menu ? 'flex flex-col gap-1  fixed top-20 items-center rounded-div2 w-full min-h-[60%]  font-mono z-20 text-xl' : "hidden"}>
      <Link to="/" className='border-b rounded-div  w-full hover:tracking-[2px] hover:bg-blue-400 hover:border-black flex items-center gap-2' onClick={handleChange}> <FcHome/> - Home  </Link>
      <Link to="/account" className='border-b rounded-div  w-full hover:tracking-[2px] hover:bg-blue-400  hover:border-black flex items-center gap-2' onClick={handleChange}> <RiAccountPinBoxFill /> - Account  </Link>
      <Link to="/" className='border-b rounded-div w-full hover:tracking-[2px] hover:bg-blue-400  hover:border-black flex items-center gap-2' onClick={handleChange}> <GrContact /> - Contact</Link>

      <div className='flex flex-col absolute bottom-4 gap-2 items-center w-full p-6 text-center m-4 '>
      <Link to="/signin" className='border-b rounded-div w-full hover:tracking-[2px] hover:bg-blue-100 hover:border-black' onClick={handleChange}>Sign In</Link>
      <Link to="/signup" className='border-b bg-blue-500 text-white p-2 rounded-full w-full hover:tracking-[2px] hover:border-black' onClick={handleChange}> Sign Up</Link>
    </div>
     
    </div>
  {/*/////////////////////////// */}



    </div>
  )
}

export default Navbar
