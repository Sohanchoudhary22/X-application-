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

import "./sidebar.scss"

const SidebarObj = {
    side1:[
        {
           icon:<GoHomeFill />,
           name:"Home"
        },
        {
            icon:<IoSearchSharp />,
            name:"Explore"
         },
         {
            icon:<GrNotification />,
            name:"Notification"
         },
         {
            icon:<MdMailOutline />,
            name:"Messages"
         },
         {
            icon:<BsSlashSquare />,
            name:"Grok"
         },
         {
            icon:<MdOutlineBookmarkBorder />,
            name:"Bookmarks"
         },
         {
            icon:<TfiBag />,
            name:"Jobs"
         },
         {
            icon:<IoPeopleOutline />,
            name:"Communities"
         },
         {
            icon:<FaXTwitter/>,
            name:"Premium"
         },
         {
            icon:<BsLightningCharge />,
            name:"Verified Orgs"
         },
         {
            icon:<FaRegUser />,
            name:"Profile"
         },
         {
            icon:<CgMoreO />,
            name:"More"
         },
      ],

    side2:[

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
                    <div className="sidebar_icon">
                      <label>{ele.icon}</label>
                      <p className="p">{ele.name}</p>
                    </div>
                    </button>
                )
            })}
          </div>

          <button className="btn">Post</button>
        </div>
    )
}
export default Sidebar;