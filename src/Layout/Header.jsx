import React from 'react'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify,BsChatLeftDots}
 from 'react-icons/bs'
 import { useLocation } from 'react-router-dom';
const Header = ({OpenSidebar}) => {
  const location=useLocation();
  // const[data1,setData1]=useState();
  // const getData=async()=>{
  //   const response=await Axios.get("http://localhost:5000/getData");
  //   setData(response.data);
  // }
  // useEffect(()=>{
  //   getData()
  // },[]);

  return (
    <header className='header'>
    <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar}/>
    </div>
    <div className='header-left'>
        
        <BsPersonCircle className='icon'/><a className='hedaer-left-h'>Welcome back,</a><br/>
<a className='hedaer-left-a'>{location.state.id}!</a>
    </div>
    <div className='header-right'>
    <BsFillEnvelopeFill className='icon'/>
    <BsSearch  className='icon'/>
    <BsChatLeftDots className='icon'/>
    <BsFillBellFill className='icon'/>
        
  
    </div>
   
</header>
  )
}

export default Header