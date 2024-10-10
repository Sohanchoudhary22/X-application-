import "./main.scss"
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { TiHeartOutline } from "react-icons/ti";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CgSoftwareUpload } from "react-icons/cg";

const ForyouObj ={
    post:[
        {
            postimg:"https://pbs.twimg.com/profile_images/1652654875942047745/qYTBv0Bo_400x400.jpg",
            name:"Jaiky Yadav",
            profiletag:"@JaikyYadav16",
            label:"हाल ही में IIFA अवार्ड्स दिए गए हैं, आपको जानकारी होगी कि यह अवार्ड्स बॉलीवुड फ़िल्मों के लिए दिए जाते हैं,इस अवॉर्ड फंक्शन में एक अवॉर्ड महशूर टीचर विकास दिव्यकीर्ति को भी मिला है।विकास दिव्यकीर्ति को यह अवॉर्ड उनकी फ़िल्म 12th Fail की Story(Adapted) के लिए मिला है। विकास दिव्यकीर्ति ने IIFA में शाहरुख खान समेत कई स्टार्स के साथ स्टेज साझा की।",
            date_time:"14h",
            type:"image",
            postUrl:"https://cdn.dnaindia.com/sites/default/files/2024/08/22/2647679-work-2024-08-22t204031.865.jpg?im=FitAndFill=(1200,900)"
          },
          {
            postimg:"https://pbs.twimg.com/profile_images/1842733820941905921/9Gk8hbKx_400x400.jpg",
            name:"Elon Musk",
            profiletag:"@elonmusk",
            label:"Make sure everyone you know has registered to vote! Only 2 days left to do so in Georgia & Arizona.",
            date_time:"Oct 6",
            type:"image",
            postUrl:"https://deadline.com/wp-content/uploads/2024/09/taylor-swift-elon-musk.jpg?w=681&h=383&crop=1"
          },
          {
            postimg:"https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg",
            name:"Narendra Modi",
            profiletag:"@narendramodi",
            label:"हाल ही में IIFA अवार्ड्स दिए गए हैं, आपको जानकारी होगी कि यह अवार्ड्स बॉलीवुड फ़िल्मों के लिए दिए जाते हैं,इस अवॉर्ड फंक्शन में एक अवॉर्ड महशूर टीचर विकास दिव्यकीर्ति को भी मिला है।विकास दिव्यकीर्ति को यह अवॉर्ड उनकी फ़िल्म 12th Fail की Story(Adapted) के लिए मिला है। विकास दिव्यकीर्ति ने IIFA में शाहरुख खान समेत कई स्टार्स के साथ स्टेज साझा की।",
            date_time:"20h",
            type:"image",
            postUrl:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2WU-CaOU2AoXb-YqiepoRrrVapAN_2r2Qd3tBRQd5Rz5Dnk96gFSaIXVjFLfskbk-nWo_SZyIYK7eufXp0yG3BwUgod9B0B45V1Xv7w"
          },
          {
            postimg:"https://pbs.twimg.com/profile_images/1559263020223672320/DD-e175F_400x400.jpg",
            name:"Panchjanya",
            profiletag:"@epanchjanya",
            label:"मुस्लिम लड़की ने हिन्दू लड़के के साथ किया विवाह! बरेली में मुस्लिम युवती मुस्कान ने हिन्दू दोस्त सुमित यादव के साथ किया विवाह। प्रयागराज के मंदिर में शादी के बाद दोनों ने फोटो-वीडियो सोशल मीडिया पर वायरल किए हैं।  मुस्कान ने अपने कट्टरपंथी परिवार से जान का खतरा बताते हुए",
            date_time:"Oct 6",
            type:"image",
            postUrl:"https://pbs.twimg.com/media/GZIcQfNbkAAtUxq?format=jpg&name=large"
          },
          {
            postimg:"https://pps.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIOuDYPQS6v75fQ15fg1D5PyBuo6UHzOCPKW7G5QPnxOC&oe=66FFA051&_nc_sid=5e03e0&_nc_cat=104",
            name:"Sohan choudhary",
            profiletag:"@scribe9104",
            label:"सिर्फ़ डंडियों के दम पर भूखे चीतों के मुँह से उनका शिकार छीनते हुए दक्षिण अफ़्रीका के कालाहारी रेगिस्तान में पाये जाने वाले बुशमैन जनजाति के लोग।ताक़त हथियार में नहीं, हाथ में होती है॥",
            date_time:"Oct 4",
            type:"video",
            postUrl:"https://cdn.pixabay.com/video/2023/08/06/174896-852206029_tiny.mp4"
          },
    ]
}

function Foryou () {
    return(
        <div className="main_child4">
              {ForyouObj.post.map((ele) =>{
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
export default Foryou;