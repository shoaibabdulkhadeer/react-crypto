import React from 'react'
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';





const Signin = () => {
  return (
    <div className='border rounded-div'>
           <div className='max-w-[540px] min-h-[600px] px-4 py-20 my-12 mx-auto shadow-2xl rounded-lg bg-slate-100 '>
                        <h1 className='text-2xl font-bold'>Sign In</h1>
                        <div className='py-4'>
                           <form >
                                <label>Email </label>

                             <div className='w-full mt-2 flex items-center '>
                             <input className='border shadow-lg  rounded-lg w-full p-1 mb-4' type="email" placeholder='Enter your email'  />
                             <MdEmail className=' m-2 text-slate-400' size={20} />
                             </div>
                                
                             <label>Password</label>

                               <div className='mt-2 flex items-center'>                             
                                   <input className='shadow-lg w-full rounded-lg border p-1' type="text" placeholder='Enter Password' />
                                      <AiFillLock  className=' m-2 text-slate-400' size={20}/>
                               </div>
                                 
                                 <button  className='bg-blue-700 p-2 text-white rounded-lg ease-in-out duration-300 hover:tracking-widest w-full mt-6'>Sign in </button>
                                    
                                  <p className='mt-4'> Don't have a Account? <Link to={'/Signup'} className="text-blue-500 font-bold">Signup </Link></p>  
   
                           </form>
                        </div>


     

           </div>
    </div>
  )
}

export default Signin
