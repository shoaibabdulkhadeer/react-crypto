import React from 'react'
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className='border rounded-div'>
    <div className='max-w-[540px] min-h-[600px] px-4 py-20 my-4 mx-auto shadow-box-shadow rounded-lg bg-slate-100 '>
                 <h1 className='text-2xl font-bold'>Sign Up</h1>
                 <div className='py-4'>
                    <form >
                         <label>Email </label>

                      <div className='w-full mt-2 flex items-center '>
                      <input className='border shadow-box-shadow  rounded-lg w-full p-1 mb-4' type="email" placeholder='Enter your email'  />
                      <MdEmail className=' m-2 text-slate-400' size={20} />
                      </div>
                         
                      <label>Password</label>

                        <div className='mt-2 flex items-center'>                             
                            <input className='shadow-box-shadow w-full rounded-lg border p-1' type="text" placeholder='Enter Password' />
                               <AiFillLock  className=' m-2 text-slate-400' size={20}/>
                        </div>
                          
                          <button  className='bg-blue-700 p-2 text-white rounded-lg ease-in-out duration-300 hover:tracking-widest w-full mt-6'>Sign up </button>
                             
                           <p className='mt-4'> Already have an Account? <Link to={'/Signin'} className="text-blue-500 font-bold">Signin </Link></p>  

                    </form>
                 </div>




    </div>
</div>
  )
}

export default Signup
