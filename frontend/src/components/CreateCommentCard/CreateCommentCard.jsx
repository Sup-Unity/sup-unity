import "./createcommentcard.css";

import { useState } from "react";

// import edinburgh from "../../tempData/images/edinburgh.jpg";
import edinburgh from "../../tempData/images/tempEdinburgh.jpg";

export default function CreateCommentCard() {
  const [comment, setComment] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("edinburgh", "username", comment);
    const data = {
      username: "username",
      comment: comment,
      profile_image: "edinburgh",
    };
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="create-comment-card">
      <div className="profile-img-div">
        <img className="profile-img" src={edinburgh} alt="profile_image" />
        <a href="#">username</a>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="input-comment"
          placeholder="Write Comment"
          value={comment}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
