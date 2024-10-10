import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { GrNotification } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { BsSlashSquare } from "react-icons/bs";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { IoPeopleOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";

import { BsThreeDots } from "react-icons/bs";

import "./sidebar.scss"
import {Link} from "react-router-dom"

const SidebarObj = {
    side1:[
        {
           icon:<GoHomeFill />,
           name:"Home",
           link:"Foryou",
           
           
        },
        {
            icon:<IoSearchSharp />,
            name:"Explore",
            link:"Explore.js"
         },
         {
            icon:<GrNotification />,
            name:"Notification",
            link:"/notification"
         },
         {
            icon:<MdMailOutline />,
            name:"Messages",
            link:"/messages"
         },
         {
            icon:<BsSlashSquare style={{fontSize:"17px"}} />,
            name:"Grok",
            link:"/grok"
         },
         {
            icon:<MdOutlineBookmarkBorder />,
            name:"Bookmarks",
            link:"/bookmarks"
         },
         {
            icon:<TfiBag style={{fontSize:"18px"}}/>,
            name:"Jobs",
            link:"/jobs"
         },
         {
            icon:<IoPeopleOutline />,
            name:"Communities",
            link:"/communities"
         },
         {
            icon:<FaXTwitter/>,
            name:"Premium",
            link:"/premium"
         },
         {
            icon:<BsLightningCharge />,
            name:"Verified Orgs",
            link:"/verified-orgs"
         },
         {
            icon:<FaRegUser />,
            name:"Profile",
            link:"/profile"
         },
         {
            icon:<CgMoreO />,
            name:"More"
         },
      ],

    side2:[
        {
         name:"sohan lal",
         email:"@jatt8022",
         image:"https://randomuser.me/api/portraits/men/94.jpg",
         icon:<BsThreeDots />
        }
    ]
}

function Sidebar () {
    return (
        <div className="sidebar">
          <FaXTwitter className="twitter"/>
          <div className="sidebar_cont1">
            {SidebarObj.side1.map((ele) =>{
                return(
                   <button className="sidebar_contbtn">
                     <Link to={ele.link} className="Link"> <label>{ele.icon}</label>
                      <p className="p">{ele.name}</p></Link>
                    </button>
                )
            })}
          </div>

          <button className="btn">Post</button>

          <div className="sidebar_cont2">
            {SidebarObj.side2.map((ele) =>{
               return(
               <div className="sidebar_id">
                  <img src={ele.image} alt="img"/>
                  <div className="name_id">
                     <label>{ele.name}</label>
                     <p>{ele.email}</p>
                  </div>
                  <div className="icon">{ele.icon}</div>
               </div>
               )
            })}
          </div>

        </div>
    )
}
export default Sidebar;