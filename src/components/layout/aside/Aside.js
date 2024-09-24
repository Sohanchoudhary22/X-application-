import "./aside.scss"
import { LuSearch } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";


const AsideObj ={
    obj2:[
        {
            name:"मुखर्जी नगर",
            title:"Trending in india",
            post:"Trending with",
            post2:"#JusticForDeepakMeena",
            icon:<BsThreeDots />
        },{
            name:"#crashed",
            title:"Business & finance . Trending",
            post:"Trending with",
            post2:"#Encounter,अनुज",
            icon:<BsThreeDots />
        },{
            name:"TEAM ELVISH LIFTS ECL TROPHY",
            title:"Trending in india",
            post:"72.8K posts",
            icon:<BsThreeDots />
        },{
            name:"#Devara",
            title:"Entertainment.Trending",
            post:"481K posts",
            icon:<BsThreeDots />
        }
    ],
    obj3:[
        {
            name:"Narendra Modi",
            email:"@narendramodi",
            image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYD4o5SFO-r_N7iHu0p7QBLYCljQkYMWRQSAsaUP1p1Ht3hwri",
            btn:"Follow"
        },
        {
            name:"RSS",
            email:"@Rssorg",
            image:"https://rssfacts.org/wp-content/uploads/2022/12/RSS-pic.jpg",
            btn:"Follow"
        },
        {
            name:"Geeta phogat",
            email:"@geeta_phogat",
            image:"https://outstandingspeakersbureau.in/wp-content/uploads/2023/10/Geeta-Phogat.webp",
            btn:"Follow"
        },
    ]
}

function Aside () {
    return (
        <div className="aside">
           <div className="search">
           <LuSearch className="lusearch"/>
            <input type="text" placeholder="Search"/>
           </div>

           <div className="subscribe">
            <h2>Subscribe to Premium</h2>
            <p>Subscribe to unlock new features and if eligible,receive a share of ads revenue.</p>
            <button>Subscribe</button>
           </div>

           <div className="live">
            <h2>Live on X</h2>
           </div>

           <div className="happening">
           <h2>What's happening</h2>
             <div className="happening_cont1">
                <img src="https://www.instyle.com/thmb/qfko9PTGB8-PDT6Up_EBPOEnbrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/030623-Best-paris-fashion-week-looks-59fc172906e64bd3b4ade2e59d5ac2fb.jpg" alt="photo"/>
                <div>
                    <h3>Paris Fashion Week 2024 Womenswear SS25</h3>
                    <p>Fashion . Live</p>
                </div>
             </div>
            <div className="happening_cont2">
            {AsideObj.obj2.map((ele) =>{
                return(
                    <div className="happening_child">
                      <div className="child1">
                        <p>{ele.title}</p>
                        <label>{ele.name}</label>
                        <p className="post">{ele.post} <p1>{ele.post2}</p1></p>
                        </div>
                        <div className="icon">{ele.icon}</div>
                    </div>
                )
            })}
            </div> 
             <h4>Show more</h4>
           </div>

           <div className="follow">
            <h2>Who to follow</h2>
            {AsideObj.obj3.map((el) =>{
                return (
                      <div className="follow_child">
                        <img src={el.image} alt=""/>
                        <div className="name">
                            <label>{el.name}</label>
                            <p>{el.email}</p>
                        </div>
                        <button>{el.btn}</button>
                      </div>
                )
            })}
            <h4>Show more</h4>
           </div>

           <div className="aside_end">
              <a href="">Terms of Service</a>
              <a href="">Privacy Policy</a>
              <a href="">Cookie Policy</a>
              <a href="">Accessibility</a>
              <a href="">Ads info</a>
              <a href="">More---</a>
              {/* <a href="">2024 X Corp</a> */}
              
            <p></p>
            <p></p>
            <p></p>
            <p></p>
           </div>
        </div>
    )
}
export default Aside;