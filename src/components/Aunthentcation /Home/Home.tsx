// import React from 'react'
import Navbar from "../../shared/Navbar"
import DiaryItem from "./DiaryItem"
import HomeHeader from "./HomeHeader"
import Search from "./Search"
import cook from  "../../../assets/download (3) 1 (1).png"
import book from  "../../../assets/download (3) 1.png"

const Home = () => {
  return (
    <div>
         <Navbar head="Home" />
         <HomeHeader/>
         <Search/>
         <DiaryItem 
         src={cook}
         title='Cooking'
         date='23 June 2023 @ 10:20'
         type='Public'
         content='Contrary to popular belief, Lorem Ipsum is not simply random text. 
         It has roots in a piece of classical Latin literature from 45 BC
         , making it over 2000 years old. Richard McClintock,
          a Latin professor at Hampden...'
         />
         <DiaryItem
           src={book}
           title='Cooking'
           date='23 June 2023 @ 10:20'
           type='Public'
           content='Contrary to popular belief, Lorem Ipsum is not simply random text. 
           It has roots in a piece of classical Latin literature from 45 BC
           , making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden...'
         />
                  <DiaryItem
           src={book}
           title='Cooking'
           date='23 June 2023 @ 10:20'
           type='Public'
           content='Contrary to popular belief, Lorem Ipsum is not simply random text. 
           It has roots in a piece of classical Latin literature from 45 BC
           , making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden...'
         />
    </div>
  )
}

export default Home