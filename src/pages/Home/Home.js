import "./home.scss"
import { Link, Outlet } from "react-router-dom";

import { CiImageOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { CiCircleList } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

import Following from "../../components/layout/main/Following";
import Foryou from "../../components/layout/main/Foryou";

// import {Routes, Route,} from 'react-router-dom'



function Home (){
    return(
        <div className="main">
            {/* <Link to="Foryou" className="link">For you</Link> */}
          
            <div className="main_child1">
            <Link to="Foryou" className="link">For you</Link>
            <Link to="Following" className="link">Following</Link>
              </div>

          <div className="main_child2">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIOuDYPQS6v75fQ15fg1D5PyBuo6UHzOCPKW7G5QPnxOC&oe=66FFA051&_nc_sid=5e03e0&_nc_cat=104" alt="sohan"/>
            <div className="main_post">
                <input type="text" placeholder="What is happening?!"/>
                <div className="icon">
                <CiImageOn />
                <HiOutlineGif />
                <CiCircleList />
                <BsEmojiSmile />
                <RiCalendarScheduleLine />
                <CiLocationOn />
                </div>
            </div>
            <button >Post</button>
          </div>

          <div className="main_child3">Show 175 posts</div>

          <div className="main_child4">
          <Foryou />
          <Following/>
          <Outlet/>
              {/* <Routes>
                <Route path='' element={<Foryou/>}></Route>
                <Route path='/Foryou' element={<Foryou/>}></Route>
                <Route path='/Following' element={<Following/>}></Route>
               
            </Routes> */}
              
          </div>
         
        </div>
    )
}
export default Home;