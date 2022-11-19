import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine  } from 'react-sparklines';
import { Link } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import {db} from '../firebase';
import { arrayUnion,doc,updateDoc } from 'firebase/firestore';


const CoinItem = ({coin}) => {
  
  const [savedCoin,setSavedCoin] = useState(false);
  const {user} = UserAuth();
  
  const coinPath = doc(db,'users',`${user?.email}`)
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true)
      await updateDoc(coinPath , {
        watchList:arrayUnion({
          id:coin.id,
          name:coin.name,
          image:coin.image,
          rank:coin.market_cap_rank,
          symbol:coin.symbol,
         
        })
      })
    }else{
      alert('Please sign in to save a coin to your watch list')
    }
  }

  return (
    <tr className=' shadow-box-shadow h-[80px] border-b overflow-hidden'>
 
      <td onClick={saveCoin} className='cursor-pointer'>
         {savedCoin ? <AiFillStar /> :  <AiOutlineStar />}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`} className="w-full">
        <div className='flex items-center justify-between h-[50px] hover:scale-110 hover:bg-blue-100 rounded-div2 cursor-pointer '>
                  <img src={coin.image} alt="pic" className='w-8' />
                        <p className='hidden md:block font-bold ml-2 text-black '>{coin.name}</p>  
                   <p className='hidden sm:block text-[10px] md:text-lg text-blue-600 underline'> Read More </p>
                   </div>
        </Link>
      </td>
      <td className="font-bold ">{coin.symbol}</td>
                <td>{coin.current_price.toLocaleString()}</td>
                <td>{coin.price_change_percentage_24h> 0 ? (<p className='text-green-500'>{coin.price_change_percentage_24h.toFixed(2)}% </p>) 
                : (<p className='text-red-400'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}</td>
                <td className='hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td> 
                <td className='hidden md:table-cell'>${coin.market_cap.toLocaleString()}</td>
                <td><Sparklines data= {coin.sparkline_in_7d.price}> 
                       <SparklinesLine color="blue" />
                           </Sparklines>
                  </td>
       
            </tr>
  );
  
}

export default CoinItem
