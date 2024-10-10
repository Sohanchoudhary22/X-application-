import "./main.scss"
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { TiHeartOutline } from "react-icons/ti";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CgSoftwareUpload } from "react-icons/cg";

const FollowingObj = {
    post:[
        {
        postimg:"https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg",
        name:"Narendra Modi",
        profiletag:"@narendramodi",
        label:"In Washim, tried my hand at the Nangara, which has a very special place in the great Banjara culture. Our Government will make every possible effort to make this culture even more popular in the times to come.",
        date_time:"Oct 5",
        type:"image",
        postUrl:"https://cdn.narendramodi.in/cmsuploads/0.03896900_1724424394_banner.jpg"
      },
      {
        postimg:"https://pbs.twimg.com/profile_images/1652654875942047745/qYTBv0Bo_400x400.jpg",
        name:"Jaiky Yadav",
        profiletag:"@JaikyYadav16",
        label:"हाल ही में IIFA अवार्ड्स दिए गए हैं, आपको जानकारी होगी कि यह अवार्ड्स बॉलीवुड फ़िल्मों के लिए दिए जाते हैं,इस अवॉर्ड फंक्शन में एक अवॉर्ड महशूर टीचर विकास दिव्यकीर्ति को भी मिला है।विकास दिव्यकीर्ति को यह अवॉर्ड उनकी फ़िल्म 12th Fail की Story(Adapted) के लिए मिला है। विकास दिव्यकीर्ति ने IIFA में शाहरुख खान समेत कई स्टार्स के साथ स्टेज साझा की।",
        date_time:"14h",
        type:"image",
        postUrl:"https://en.channeliam.com/wp-content/uploads/2024/08/main-qimg-00b3abf8ffd492eba3a434.webp"
      },
      {
        postimg:"https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg",
        name:"Cristiano Ronaldo",
        profiletag:"@Cristiano",
        label:"We are not stopping! 🔥 Together!",
        date_time:"Oct 7",
        type:"image",
        postUrl:"https://pbs.twimg.com/media/GZJVVuWXEAA9OIS?format=jpg&name=360x360"
      },
      {
        postimg:"https://cvforum.in/wp-content/uploads/2023/04/Mr.-Nitin-Jairam-Gadkari.jpg",
        name:"Nitin Gadkari",
        profiletag:"@NitinGadkari16",
        label:"यह नितिन गडकरी जी हैं, ये हमारे देश के 2014 से सड़क परिवहन और राजमार्ग मंत्री हैं। इनकी सत्ता पक्ष में ही नहीं बल्कि विपक्ष समेत पूरे देश में बहुत अच्छी इमेज बनी हुई थी,  कुछ चैनल तो इन्हें The Highway Man Of India भी कहते हैं मगर  एक X हैंडल खुरपेंच ने इनकी असलियत सामने रख दी",
        date_time:"1h",
        type:"image",
        postUrl:"https://www.nbmcw.com/images/Interviews/44955-1-Mr-Nitin-Gadkari.webp"
      },
      {
        postimg:"https://cdn.kwork.com/pics/t0/15/32170007-65ff1649ce335.jpg",
        name:"Animal",
        profiletag:"@Animal50",
        label:"Young woman having fun playing with cute little yellow cat, touching on kitten head, on the island beach, human animal friendship, small pet adopting",
        date_time:"Oct 2",
        type:"image",
        postUrl:"https://static.vecteezy.com/system/resources/thumbnails/007/582/504/small_2x/young-woman-having-fun-playing-with-cute-little-yellow-cat-touching-on-kitten-head-on-the-island-beach-human-animal-friendship-small-pet-adopting-island-cat-cuddling-with-people-on-the-beach-video.jpg"
      },

    ]
}

function Following () {
    return(
        <div className="main_child4">
              {FollowingObj.post.map((ele) =>{
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
              })}
          </div>
    )
}

export default Following;