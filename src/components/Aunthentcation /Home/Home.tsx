// import React from 'react'

import Navbar from "../../shared/Navbar"
import HomeHeader from "./HomeHeader"
import Search from "./Search"

const Home = () => {
  return (
    <div>
         <Navbar head="Home" />
         <HomeHeader/>
         <Search/>
    </div>
  )
}

export default Home