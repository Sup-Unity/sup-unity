import "./communitypageheader.css";

import edinburgh from "../../tempData/images/edinburgh.jpg";

const jpgMap = {
  edinburgh,
};

export default function CommunityPageHeader({ groupName, numMembers, background }) {
  return (
    <div className="header">
      <div className="title_box">
        <div>
          <h1 className="group_name">{groupName}</h1>
          <p>{numMembers} members</p>
        </div>
        <div>
          <button className="join_button">Join</button>
        </div>
      </div>
    </div>
  );
}
