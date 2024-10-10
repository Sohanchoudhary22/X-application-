import "./explore.scss";
import { LuSearch } from "react-icons/lu";


function Explore () {
    return (
        <div className="explore">
            <div className="explore__child1">
            <div className="search1">
           <LuSearch className="lusearch"/>
            <input type="text" placeholder="Search"/>
           </div>
           
            </div>
        </div>
    )
}
export default Explore;