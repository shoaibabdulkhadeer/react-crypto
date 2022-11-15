import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Sparklines, SparklinesLine  } from 'react-sparklines';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify'

const Coinspage = () => {

    const [coin,setCoin] = useState({})
    const params = useParams()
 
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`
  
    useEffect(() => {
        axios.get(url).then((response) => {
          setCoin(response.data);
          console.log(response.data);
        });
      }, [url]);


    return (
    <div className='rounded-div font-sans font-semibold'>
      <div className='flex py-8 '>
        <img className='w-20 mr-8' src={coin.image?.large} alt='/' />
        <div>
          <p className='text-3xl font-bold'>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>
         
         {/* grid box */}
        <div className='grid md:grid-cols-2 gap-2' >
                      {/* left box */}
                  <div className='rounded-div'>
                      <div className='flex justify-between'>
                             {coin.market_data?.current_price ? (
                            <p>{coin.market_data.current_price.usd.toLocaleString()}</p>
                            ) : null }
                            <p>7 Day</p>                      
                        </div>

                        <div>
                          <Sparklines  data= {coin.market_data?.sparkline_7d.price}> 
                             <SparklinesLine  color="blue" />
                           </Sparklines>
                        </div> 

                        {/* market and volume div */}
                       <div className='flex justify-between'>
                          <div>
                           <p className=''>Market Cap</p>
                            {coin.market_data?.market_cap ? (
                           <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                           ) : null}
                           </div>

                            <div>
                              <p>Volume (24h)</p>
                              {coin.market_data?.market_cap ? (
                              <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
                           ) : null}
                             </div>                       
                          </div>


                          {/* 24h low high div */}
                         <div className='flex justify-between mt-4'>
                           <div>
                            <p>24h High</p>
                            {coin.market_data?.high_24h ? (
                            <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                             ) : null}
                           </div>

                           <div>
                                  <p>24h Low</p>
                                  {coin.market_data?.low_24h ? (
                                   <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                                  ) : null}
                           </div>                          
                         </div>

                   </div>


                     {/* Right box */}
                   <div className='rounded-div text-xs  md:text-sm '>
                        <h1 className='text-2xl p-3'>Market Stats</h1>
                   
                   
                    {/* right small grid */}
                   <div className='grid grid-cols-3 m-2 gap-5 '>
                         
                         {/* 1 row */}
                         <div className=''>
                            <div className='m-2'>
                            <p> Market</p>
                            {coin.market_cap_rank}
                           </div>

                           <div className='m-2'>
                            <p> Hashing Algorithm</p>
                            {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
                           </div>

                           <div className='m-2'>
                                <p className='text-gray-500 text-sm'>Trust Score</p>
                                {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
                          </div>
                        </div>
               


                        <div className=''>
                            <div className='my-2'>
                            <p> Price Change</p>
                            {coin.market_data ? (
                              <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                               ) : null}
                           </div>

                           <div className='my-2'>
                                <p className='text-gray-500 text-sm'>Price Change (14d)</p>
                                  {coin.market_data ? (
                                   <p>
                                   {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                                     </p>
                                 ) : null}
                           </div>

                           <div className='mt-2'>
                                <p className='text-gray-500 text-sm'>Price Change (30d)</p>
                                {coin.market_data ? (
                                 <p>
                                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                                 </p>
                                 ) : null}
                          </div>
                        </div>



                        <div className=''>
                           <div className='m-2'>
                          <p className='text-gray-500 text-sm'>Price Change (60d)</p>
                               {coin.market_data ? (
                                  <p>
                                 {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                                 </p>
                                 ) : null}
                             </div>

                             <div className='m-2'>
                                <p className='text-gray-500 text-sm'>Price Change (1y)</p>
                               {coin.market_data ? (
                                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
                                ) : null}
                              </div>

                              <div className='m-2'>
                             <p className='text-gray-500 text-sm'>Price Change (24h)</p>
                                 {coin.market_data ? (
                              <p>
                               {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                             </p>
                              ) : null}
                            </div>
                        </div>

                   </div>

                   <div className='flex justify-around p-8 text-blue-500'>
                      <FaTwitter />
                      <FaFacebook />
                      <FaReddit />
                        <FaGithub />
                    </div>

                   </div>

              </div>

              {/* Description */}
              <div className='py-4 w-full font-serif'>
                      <p className='text-xl font-bold'>About {coin.name}</p>
                      <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
                 </div>


    </div>
  )
}

export default Coinspage
