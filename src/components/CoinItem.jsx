import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine  } from 'react-sparklines';
import { Link } from 'react-router-dom';


const CoinItem = ({coin}) => {
  return (
    <tr className='rounded-div h-[80px] border-b overflow-hidden'>
 
      <td >
       <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`} className="w-full">
        <div className='flex items-center justify-between h-[50px] w-22 hover:scale-110 hover:bg-blue-100 rounded-div2 cursor-pointer'>
                  <img src={coin.image} alt="pic" className='w-10' />
                        <p className='hidden md:block font-bold ml-2 text-black '>{coin.name}</p>  
                   <p className='text-xs text-blue-600 underline'> <li>Read More</li> </p>
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
