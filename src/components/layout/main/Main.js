import "./main.scss"

import { CiImageOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { CiCircleList } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

const MainObj = {

}

function Main () {
    return(
        <div className="main">
          <div className="main_child1">
            <button>For you</button>
            <button>Following</button>
          </div>

          <div className="main_child2">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIOuDYPQS6v75fQ15fg1D5PyBuo6UHzOCPKW7G5QPnxOC&oe=66FFA051&_nc_sid=5e03e0&_nc_cat=104" alt="sohan"/>
            <div className="main_post">
                <p>What is happening?!</p>
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
        </div>
    )
}
export default Main;