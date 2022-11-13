import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Signin from "../Signin";
// import Dairy from "../Components/AfterLogin/pages/Dairy";
// import Helps from "../Components/AfterLogin/pages/Helps";
// import Foods from "../Components/AfterLogin/pages/Foods";
// import Plans from "../Components/AfterLogin/pages/Plans";
// import Settings from "../Components/AfterLogin/pages/Settings";
// import Trends from "../Components/AfterLogin/pages/Trends";
// import Support from "../Components/AfterLogin/pages/Support";
import Home from "../Pages/Home";
// import About from "../Components/About";
// import { Blog } from "../Components/Blogs/blog";
// import PrivateRoutes from "./PrivateRoutes";
const AllRoutes = () => {

return (
    <div>
    <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        {/* <Route path="/dairy" element={<PrivateRoutes><Dairy/></PrivateRoutes>}/> */}
        {/* <Route path="/trends" element={<Trends/>}/>
        <Route path="/foods" element={<Foods/>}/>
        <Route path="/setting" element={<Settings/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/Helps" element={<Helps/>}/>
        <Route path='/support' element={<Support/> }/> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} /> */}
    </Routes>
    </div>
    );
};

export default AllRoutes;