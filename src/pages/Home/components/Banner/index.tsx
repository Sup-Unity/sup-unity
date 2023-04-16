import "./banner.css"

import {useState} from "react";

export default function Banner(){
  const [email, setEmail] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
  }

  const handleChange = (event) =>{
    setEmail(event.target.value);
  }


  return (
    <div className= "container">
    <div className = "banner">
    </div>
    <div className="banner-text-container">
          <h1 className = "banner-title">SUPUNITY</h1>
          <p className= "banner-subtitle"><b>Sup</b>port Your Comm<b>unity</b></p>
    </div>
    <form className= "input-button-container" onSubmit = {handleFormSubmit}>
      <input 
            className = "input"
             placeholder = "Your email" 
             value = {email}
             onChange = {handleChange}
             
             />
      <button className = "button">Get Started</button>
    </form>
    </div>
  );
};


