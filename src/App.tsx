import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Aboutus from "./components/AboutUs";
import Services from "./components/Services";
import Works from "./components/Works";
//import Res from "./components/size";
//import React, { useLayoutEffect, useState } from 'react';

const menus = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    
  },
  {
    id: 2,
    title: 'Services',
    link: '/services',
  },
  {
    id: 3,
    title: 'Works',
    link: '/works',
  },
  {
    id: 4,
    title: 'About Us',
    link: '/aboutus',
  },
  // {
  //   id: 5,
  //   title: 'Contact Us',
  //   link: '/contactus',
  // }
]


function App() {

  return (
    <div className="container" >
      
      <header >
      
        <nav className="nav" >
        <h1 className="header">StartUp</h1>
        
          {
            menus.map(menu => {
              return (
                
                <Link className="link1"  key={menu.id} to={menu.link}>
                  <span>{menu.title}</span>
                </Link>
              )
            })
          }
          <Link className="link2" to="/contactus">Contact Us</Link>
          
        </nav>
        </header>
      
      <div className="content">
        {/* <Res /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
      
    </div>
  );
}





export default App;