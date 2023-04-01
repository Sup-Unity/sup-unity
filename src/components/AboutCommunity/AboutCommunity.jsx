import "./aboutcommunity.css";

export default function AboutCommunity({description}){
    return (
        <div className = "about_community">
            <h2 className = "about_title">About Us</h2>
            <div className = "about_description">{description}</div>    
        </div>
    )
}