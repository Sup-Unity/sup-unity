import "./navbar.css";
import bird from "../../tempData/images/bird.jpg";
import { useState } from "react";
import {useContext} from 'react';
/*import { LoginContext } from "../../context/LoginContext"; */


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  /*const  {latestUser, isLoggedIn, logIn} = useContext(LoginContext); */
  
  const handleClick = () => {
    logIn("Bob");
   

  }

  return (
 
    <nav className="nav">
      <img
        className="site_logo"
        src="https://www.dropbox.com/s/wpthh8h4hdh0msz/supunity_logo_negative.png?raw=1"
      />
      <div className="nav_links">
        <a href="#">About</a>
        <a href="#">FAQ</a>
        <img onClick = {handleClick} className="profile_image" src={bird} alt="bird" />
      </div>
    </nav>
   
  );
}
