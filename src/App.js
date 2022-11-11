import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Account from "./routes/Account";
import Home from "./routes/Home"
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Coinspage from "./routes/Coinspage";
import axios from 'axios'
import Footer from "./components/Footer";


function App() {

const [coins,setCoins] = useState([])

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=30&page=1&sparkline=true"

useEffect (() => {
  axios.get(url).then((response) => {
    setCoins(response.data)
  })
},[url])


  return (
    <div className="App">
     <Navbar />
     <Routes >
      <Route path="/"  element={<Home coins={coins} />}/>
      <Route path="/signin"  element={<Signin />}/>
      <Route path="/signup"  element={<Signup />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="/coin/:kuchbhi" element={<Coinspage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
