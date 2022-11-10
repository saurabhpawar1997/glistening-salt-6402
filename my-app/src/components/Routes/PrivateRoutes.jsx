import {Navigate} from "react-router-dom";

import React from 'react'
import { useSelector } from "react-redux";
import { loadData, saveData } from "../Utils/accessLocalStorage";


const PrivateRoutes = ({children}) => {
    // const token =useSelector((state)=>state.authReducer.token)
    const token=JSON.parse(localStorage.getItem("token"))
    // const token = loadData("token")
    // console.log()

    console.log(token)

    if(token){
        return children
    }
  return <Navigate to="/login"/>
}

export default PrivateRoutes