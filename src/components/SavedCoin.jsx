import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SavedCoin = () => {

 const [coins] = useState([])

  return (
    <div>
    {coins.length === 0 ? ( <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to='/' className='text-blue-600'>Click here to search coins.</Link>
        </p>) : (
            <table className='rounded-div text-center'>
                  <thead>
                    <tr className='rounded-div border-b'>
                       <th className='px-4'>Rank #</th>
                       <th className='text-left'>Coin</th>
                       <th className='text-left'>Remove</th>
                    </tr>
                  </thead>

                    <tbody>
                             {coins.map((coin,index) => (
                                <tr key={coin.id} className="h-[60px] overflow-hidden"> 
                                    <td>{coin?.rank}</td>
                                    <td>
                                        <Link to={`/coin/${coin.id}`}>
                                        <div className='flex items-center'>
                                             <img src={coin?.image} alt="/" className='w-8 mr-4'/>
                                              <div>
                                                <p className='hidden sm:table-cell'> {coin?.name}</p>
                                                <p className='text-grey-500 text-left text-sm'>{coin?.symbol.toUpperCase()}</p>
                                              </div>
                                        </div>

                                        </Link>
                                    </td>
                                    <td className='pl-8'>
                                        <AiOutlineClose className='cursor-pointer'/>
                                    </td>
                                </tr>
                             ))}

                    </tbody>

            </table>
        )}
       
    </div>
  )
}

export default SavedCoin
