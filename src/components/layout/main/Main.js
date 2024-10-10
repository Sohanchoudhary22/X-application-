import "./main.scss"
import {Routes, Route} from 'react-router-dom'

import Home from "../../../pages/Home/Home";
import Explore from "../../../pages/Explore/Explore";
import Foryou from "./Foryou";
import Following from "./Following";


function Main () {
    return(
        <div className="main">

          <div className="main_child4">
              <Routes>
                <Route path='/' element={<Home/>}>
                <Route path='' element={<Foryou/>}></Route>
                <Route path='/Foryou' element={<Foryou/>}></Route>
                <Route path='/Following' element={<Following/>}></Route>
                </Route>
            </Routes>
              
          </div>
         
          <Routes>
             <Route path='Explore.js' element={<Explore/>}></Route>

          </Routes>
        </div>
    )
}
export default Main;