import "./aboutcommunity.css";

export default function AboutCommunity({ description }) {
  return (
    <div className="about-community">
      <h2 className="about-title">About Us</h2>
      <div className="about-description">{description}</div>
    </div>
  );
}
