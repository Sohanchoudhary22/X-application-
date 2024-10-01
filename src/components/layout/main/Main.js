import "./main.scss"
import {Routes, Route, Link } from 'react-router-dom'

import { CiImageOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { CiCircleList } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import Following from "./Following";
import Foryou from "./Foryou";

// import { HiDotsHorizontal } from "react-icons/hi";
// import { FaRegComment } from "react-icons/fa";
// import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
// import { TiHeartOutline } from "react-icons/ti";
// import { IoStatsChartOutline } from "react-icons/io5";
// import { CiBookmark } from "react-icons/ci";
// import { CgSoftwareUpload } from "react-icons/cg";

// const MainObj = {
//        post:[
//         {
//           postimg:"https://x.com/JaikyYadav16",
//           name:"Jaiky Yadav",
//           profiletag:"@JaikyYadav16",
//           label:"हाल ही में IIFA अवार्ड्स दिए गए हैं, आपको जानकारी होगी कि यह अवार्ड्स बॉलीवुड फ़िल्मों के लिए दिए जाते हैं,इस अवॉर्ड फंक्शन में एक अवॉर्ड महशूर टीचर विकास दिव्यकीर्ति को भी मिला है।विकास दिव्यकीर्ति को यह अवॉर्ड उनकी फ़िल्म 12th Fail की Story(Adapted) के लिए मिला है। विकास दिव्यकीर्ति ने IIFA में शाहरुख खान समेत कई स्टार्स के साथ स्टेज साझा की।",
//           date_time:"14h",
//           type:"image",
//           postUrl:"https://pbs.twimg.com/media/GYu3A9oWoAQ7gMY?format=jpg&name=medium"
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//         {
//           postimg:"",
//           name:"Jaiky ",
//           profiletag:"",
//           label:"",
//           date_time:"",
//           type:"",
//           postUrl:""
//         },
//        ]
// }

function Main () {
    return(
        <div className="main">
          <div className="main_child1">
            <Link to="Foryou.js" className="link">For you</Link>
            <Link to="Following.js" className="link">Following</Link>
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
              {/* {MainObj.post.map((ele) =>{
                return(
                  <div className="post">
                    <img src={ele.postimg} alt=""/>
                    <div className="post_child">
                      <div className="post_title">
                      <div className="title_name">
                        <b>{ele.name}</b>
                        <span>{" "}&nbsp;<img src="https://img.icons8.com/?size=48&id=2sZ0sdlG9kWP&format=png" alt=""/></span>{" "}
                        {ele.profiletag} . {ele.date_time}
                      </div>
                      <HiDotsHorizontal />
                      </div>

                      <div className="post_imgV">
                         <p>{ele.label}</p>
                         {ele.type === "image"?(
                          <img src={ele.postUrl} alt=""/>
                         )
                         : ele.type === "video"?(
                          <video controls loop>
                            <source src={ele.postUrl} type="video/mp4"/>
                          </video>
                         )
                         :null
                         }
                         <div className="commit_cont">
                            <p><FaRegComment title="Reply"/><span>6.3k</span></p>
                            <p><HiMiniArrowPathRoundedSquare title="Repost"/><span>3.8k</span></p>
                            <p><TiHeartOutline title="View"/><span>8k</span></p>
                            <p><IoStatsChartOutline title="Like"/><span>5M</span></p>
                            <p><CiBookmark title="bookmark"/> <CgSoftwareUpload title="upload"/></p>
                         </div>

                      </div>

                    </div>

                  </div>
                )
              })} */}
              <Routes>
                <Route path='' element={<Foryou/>}></Route>
                <Route path='Foryou.js' element={<Foryou/>}></Route>
                <Route path='Following.js' element={<Following/>}></Route>
            </Routes>

              
              
          </div>
        </div>
    )
}
export default Main;