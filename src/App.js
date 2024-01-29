
import { useEffect, useState } from 'react';
import './App.css';

import Home from './Scenes/Home';
import Footer from './Layout/Footer';
import{BrowserRouter as Router,Route,Routes}from "react-router-dom"
import Login from './Scenes/Login';
import Signup from './Scenes/Signup';
import Inbox from './Scenes/Inbox';
import Profile from './Scenes/Profile';

function App() {

  
  return (
  
    <div>
<Router>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/Home' element={ <Home />}></Route>
    <Route path='/Inbox' element={ <Inbox/>}></Route>
    <Route path='/Profile' element={<Profile/>}></Route>
  </Routes>
</Router>
    

    </div>
  );
}

export default App;
