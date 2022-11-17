import React from 'react'
import SavedCoin from '../components/SavedCoin'
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Account = () => {

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

 if(user){
  return ( 
  
    <div>
          <div className='rounded-div min-h-[600px]'> 
             
             <div className='flex justify-between p-5 shadow-box-shadow rounded-lg mt-5'>
                      <div className=''>
                        <p className='text-xl font-bold'>Account</p>
                        <p>Welcome,<span className='text-xl font-bold'> {user?.email}</span></p>
                      </div>

                        <button 
                        onClick={handleSignOut}
                        className='bg-blue-700 p-2 text-white rounded-lg ease-in-out duration-300 hover:tracking-widest'>Sign Out</button>

             </div>



             <div className='shadow-box-shadow p-5 min-h-[399px] mt-4'>

               <p className='font-bold text-xl'>Watch List</p>
               <SavedCoin />


             </div>




          </div>
    </div>
  );
 } else {
  return <Navigate to='/signin' />;
 }

 
}

export default Account
