
import Navbar from "./Navbar"
import DiaryItem from "../Home/DiaryItem"
import HomeHeader from "../Home/HomeHeader"
import Search from "../Home/Search"
import cook from  "../../assets/pic2.png"
import book from  "../../assets/pic1.png"

const Home = () => {
  return (
    <main className="bg-[white]  home   " >
      <section className="w-[30%] " > 
         <Navbar head="Home"   vector= {localStorage.getItem("pic")} />
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
         {/* appended to the list  */}
         </section>
    </main>
  )
}

export default Home