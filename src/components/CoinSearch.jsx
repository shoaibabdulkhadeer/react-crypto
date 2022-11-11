import React from 'react'
import { FiStar} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine  } from 'react-sparklines';


const CoinSearch = ({coins}) => {

   // const [searchText, setSearchText] = React.useState()
  return (
    <div className=' w-full'>

     <div className=' flex flex-col md:flex-row justify-between mt-5 px-5 py-5 gap-2'>

        <h1 className='font-bold  md:text-2xl '>Search Your Coin</h1>
         
         <form>
            <input type="text" placeholder='Search Coin' className='rounded-div border-blue-400' />
            {/* onChange={(e) => setSearchText(e.target.value)}/> */}
         </form>
     </div>    

      <table className='rounded-div'>

      <thead>
         <tr className='rounded-div'>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:block'>24h Volume</th>
            <th className='hidden md:table-cell'>Mkt</th>
            <th>Last 7 days</th>
         </tr>
      </thead>
          
          <tbody className='text-center '>

{/*            
          {coins.filter((value) => {
            if(searchText === "") {
               return value ;
            } 
            else if (value.name.toLowerCase().includes(searchText.toLowerCase()))
              { 
               return value ; 
               }
            
          }) */}
 
           {coins.map((coin,idx) => (
            <tr key={idx} className='rounded-div h-[70px] overflow-hidden'>
                <td><FiStar /></td>
                <td>{coin.market_cap_rank}  </td>
                 <td className='flex justify-between gap-2'>
                 
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
          ))}
          </tbody>
      </table>

  

     

    


     </div>
  )
}

export default CoinSearch
 