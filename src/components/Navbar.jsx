import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSkullCrossbones} from 'react-icons/fa';
import { FcHome} from 'react-icons/fc';
import {RiAccountPinBoxFill } from 'react-icons/ri';
import {GrContact } from 'react-icons/gr';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

  const [menu,setMenu]= useState(false)
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleChange = () =>{
    setMenu (prev => !prev)
  }

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };


  return (
    <div className='flex justify-between items-center rounded-div2 font-bold h-20 sticky top-0'>
     
     {/* Logo */}
     <Link to="/">
        <h1 className='text-2xl'>CryptoZen</h1>
     </Link>
     {/* /////////// */}


 
   {/*SignupPage */}
   {user?.email? (<div className='hidden md:flex items-center'>
          <Link to='/account' className='p-4'>
            Account
          </Link>
          <button onClick={handleSignOut} className="text-blue-500 hover:text-red-500" >Sign out</button>
        </div>)  
        
         : 

         ( <div className='hidden md:flex items-center '>
    <Link to="/signin"> 
        <button className='mr-2' >Sign in </button>
    </Link> 
    <Link to="/signup"> 
        <button className='bg-blue-500 text-yellow-50 rounded-3xl px-5 py-2   hover:w-[130px] '> Sign Up </button>
    </Link> 
    </div>)}


   
   {/* ////////////////////// */}

    {/* Mobile Hamburger */}
   <div className=' cursor-pointer m-4' onClick={handleChange}>
        {menu ? <FaSkullCrossbones size={25}/> : <GiHamburgerMenu size={25} />}     
   </div>
   {/* ////////////////////////////////////////// */}
   

    {/* Mobile menu */}
    <div className= {menu ? 'flex flex-col gap-1  fixed top-20  items-center  max-w-[1140px] w-full shadow-box-shadow bg-white rounded-3xl min-h-[60%]  font-mono text-xl '  : "hidden"}>
      <Link to="/" className='border-b rounded-div   hover:tracking-[2px] hover:bg-blue-400 hover:border-black flex items-center gap-2' onClick={handleChange}> <FcHome/> - Home  </Link>
      <Link to="/account" className='border-b rounded-div  w-full hover:tracking-[2px] hover:bg-blue-400  hover:border-black flex items-center gap-2' onClick={handleChange}> <RiAccountPinBoxFill /> - Account  </Link>
      <Link to="/" className='border-b rounded-div w-full hover:tracking-[2px] hover:bg-blue-400  hover:border-black flex items-center gap-2' onClick={handleChange}> <GrContact /> - Contact</Link>


     
    {user?.email? (<div className='flex flex-col absolute bottom-4 gap-2 items-center w-96 p-6 text-center mr-10 font-bold font-sans'>
          <button onClick={ handleSignOut} className="bg-blue-700 p-2 text-white rounded-lg ease-in-out w-full duration-300 hover:tracking-widest">Sign out</button>
        </div>)  
        
         : 

         (<div className='flex flex-col absolute bottom-4 gap-2 items-center w-96 p-6 text-center mr-10 font-normal'>
      <Link to="/signin" className='border-b rounded-div ease-in-out duration-300 hover:tracking-[2px] hover:bg-blue-100 hover:border-black' onClick={handleChange}>Sign In</Link>
      <Link to="/signup" className='bg-blue-700 p-2 text-white rounded-lg ease-in-out duration-300 hover:tracking-widest w-full mt-6' onClick={handleChange}> Sign Up</Link>
    </div>)}

     
    </div>
  {/*/////////////////////////// */}



    </div>
  )
}

export default Navbar
