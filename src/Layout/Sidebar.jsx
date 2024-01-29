import React from 'react'
import  Ginger  from '../assets/Ginger Logo 1.svg';

import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsPlusCircle,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill ,BsChatLeftDots, BsBoxArrowRight, BsFillPersonFill,BsFillPersonPlusFill, BsGridFill}
 from 'react-icons/bs'
 import { MdHomeFilled, MdLogout  } from "react-icons/md";
 import { CgInsights } from "react-icons/cg";
import { Link } from 'react-router-dom';
const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
    const auth = localStorage.getItem('user');
    const logout=()=>{
        console.log("logout")
    }
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img src={Ginger} className='icon_header' alt="..."></img>
            
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <a className='sidebar-list-h'>MAIN</a>
            <li className='sidebar-list-item'>
                <a href="/">
                    < MdHomeFilled className='icon'/> Dashboard
                </a>
            </li>
            
            <a className='sidebar-list-h'>MANAGE</a>
            <Link to={"/Inbox"}>
            <li className='sidebar-list-item'>
                <a href="/Inbox">
                    <BsChatLeftDots className='icon'/> Inbox
                </a>
            </li>
            </Link>
           
            <li className='sidebar-list-item'>
                <a href="">
                    < BsGridFill className='icon'/> Channels
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    < BsFillPersonFill className='icon'/> Business Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <CgInsights  className='icon'/> Insights
                </a>
            </li>
            <a  className='sidebar-list-h'>SETTINGS</a>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPlusCircle className='icon'/> Create Roles
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillPersonPlusFill className='icon'/> Create Users
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
        <ul  className='sidebar-list'>
            <Link to={"/Profile"}>
            <li className='sidebar-list-item'>
                <a href="">
                    < BsFillPersonFill className='icon'/> Profile
                </a>
            </li></Link>
        
      
         <li className='sidebar-list-item'> {auth ?<Link to={"/Logout"} onClick={logout} >
                <a href="">
                    <  BsBoxArrowRight className='icon'/> Logout
                </a></Link>  :<Link to="/Signup"> <  BsBoxArrowRight className='icon'/>SignUp</Link>}
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar