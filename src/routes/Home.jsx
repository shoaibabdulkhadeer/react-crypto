import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

const Home = ({coins}) => {
  return (
    <div className=' min-h-[90vh]' >
        <CoinSearch coins={coins}/> 
        <Trending />
    </div>
  )
}

export default Home
