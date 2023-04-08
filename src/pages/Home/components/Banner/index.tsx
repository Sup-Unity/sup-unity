import handsphoto from "../../../../tempData/images/handsphoto.jpg";
import "./banner.css"
export default function Banner(){
  return (
    <div className= "container">
    <div className = "banner">
    </div>
    <div className="banner-text-container">
          <h1 className = "banner-title">SUPUNITY</h1>
          <p className= "banner-text"><b>Sup</b>port Your Comm<b>unity</b></p>
    </div>
    <div className= "input-button-container">
      <input className = "input" placeholder = "Your email" />
      <button className = "button">Get Started</button>
    </div>
    </div>
  );
};


