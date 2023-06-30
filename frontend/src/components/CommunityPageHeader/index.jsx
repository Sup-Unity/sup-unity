import "./communitypageheader.css";

import edinburgh from "../../tempData/images/edinburgh.jpg";

const jpgMap = {
  edinburgh,
};

export default function CommunityPageHeader({ groupName, numMembers, background }) {
  return (
    <div className="header">
      <div className="title-box">
        <div>
          <h1 className="group-name">{groupName}</h1>
          <p>{numMembers} members</p>
        </div>
        <div>
          <button className="join-button">Join</button>
        </div>
      </div>
    </div>
  );
}
