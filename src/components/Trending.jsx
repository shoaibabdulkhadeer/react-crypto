import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Trending = () => {
 
    const [trending, setTrending] = useState([])

    const url = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(() => {
       axios.get(url).then((response) => {
        setTrending(response.data.coins)
       }) 
    },[url])

  return (
    <div className='rounded-div min-h-[40vh] mt-4 p-5'>
     <h1 className='text-2xl font-bold m-2'>Trending Coins</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {trending.map((coin,idx)=> (
            <div  key={coin.id} className='rounded-div flex justify-between  h-[70px] hover:scale-105 hover:bg-blue-100'> 
                 <div  className='flex '> 
                      <img className='rounded-full mr-4 scale-50 -z-10' src ={coin.item.small} alt= "/" />
                          <div className='flex flex-col gap-2 mt-2'>               
                           <p className='font-bold'>{coin.item.name}</p>                   
                           <p>{coin.item.symbol}</p>
                         </div>
                  </div>
                 
                  <div className='flex items-center gap-2'> 
                        <img className='w-6' src = "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt = "/" /> 
                        <p>{coin.item.price_btc.toFixed(7)}</p>
                  </div>
            </div>
        ) )}
      </div>

    </div>
  )
}

export default Trending
