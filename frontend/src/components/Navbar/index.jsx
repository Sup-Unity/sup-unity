/*import { LoginContext } from "../../context/LoginContext"; */
import "./navbar.css";

import { useState } from "react";
import {useContext} from 'react';

import bird from "../../tempData/images/bird.jpg";
import sitelogo from "../../tempData/images/sitelogo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  /*const  {latestUser, isLoggedIn, logIn} = useContext(LoginContext); */
  
  const handleClick = () => {
    logIn("Bob");
   

  }

  return (
 
    <nav className="nav">
      <img
        className="site-logo"
        src={sitelogo}
      />
      <div className="nav-links">
        <a href="#">About</a>
        <a href="#">FAQ</a>
        <img onClick = {handleClick} className="profile-image" src={bird} alt="bird" />
      </div>
    </nav>
   
  );
}
