import React from 'react'
 import { useEffect, useState } from 'react';
 import  Layer  from '../assets/Layer 25.svg';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import { useLocation } from 'react-router-dom';

import Axios from 'axios';
const Home = () => { 
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    const location=useLocation();
    // const[data,setData]=useState();
    // const getData=async()=>{
    //   const response=await Axios.get("http://localhost:5000/");
    //   setData(response.data);
    // }
    // useEffect(()=>{
    //   getData()
    // },[]);
    const BreadCrumbItem = ({ href, isCurrent, children }) => {
        return (
          <li>
            <a href={href} aria-current={isCurrent ? 'page' : undefined}>{children}</a>
          </li>
        )
    };
  return (
    <div className='grid-container' >
     <Header OpenSidebar={OpenSidebar} />
     <hr/>
     <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <main className='main-container'>
    <div className='main-title'>
        <h3>DASHBOARD</h3>
        <div className='bread'>
      <l className='bread'>Dashboard / list</l>
        </div>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner1'>
            
                <img src={Layer} className='card_icon' alt="..."></img>
              
            </div>
            <h3>Components</h3>
            <a> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
        </div>
        <div className='card'>
            <div className='card-inner2'>
            
                <img src={Layer} className='card_icon' alt="..."></img>
              
            </div>
            <h3>Components</h3>
            <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </a>
        </div>
        <div className='card'>
            <div className='card-inner3'>
            
                <img src={Layer} className='card_icon' alt="..."></img>
              
            </div>
            <h3>Components</h3>
            <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </a>
        </div>
       
    </div>

    <div>
    
<Footer  />
</div>
</main>


</div>
   
  )
}

export default Home