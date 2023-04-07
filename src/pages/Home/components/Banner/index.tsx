import handsphoto from "../../../../tempData/images/handsphoto.jpg";
import "./banner.css"
export default function Banner(){
  return (
    <div>
        <img className = "banner-image" src = {handsphoto} alt = "landing-page-banner" />
        <h1>SUPUNITY</h1>
        <p><b>Sup</b>port Your Comm<b>unity</b></p>
    </div>
  );
};


