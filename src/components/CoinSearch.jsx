import React, { useState } from 'react';
import CoinItem from './CoinItem';
import { FcSearch  } from 'react-icons/fc';



const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState('');
  console.log(coins)
  return (
    <div className='rounded-div my-4 '>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right '>
      <h1 className='font-bold  md:text-2xl '>Search Your Coin</h1>
        <form>

       <div className='flex items-center'>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className='shadow-box-shadow w-full rounded-2xl p-2 placeholder-slate-500'
            type='text'
            placeholder='Search a coin'
          />
              <FcSearch className='m-2' size={30}/>
          </div>

        </form>
      </div>

    <table className='rounded-div text-center'>
        <thead >
          <tr className='rounded-div'>
            <th></th>
            <th className='px-4'>#</th>
            <th className=''>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody >
          {coins
            .filter((value) => {
              if (searchText === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
              
              return false;
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
 