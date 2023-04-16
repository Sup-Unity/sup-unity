import "./createcommentcard.css";

import { useState } from "react";

import edinburgh from "../../tempData/images/edinburgh.jpg";

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
    <div className="create_comment_card">
      <div className="profile_img_div">
        <img className="profile_img" src={edinburgh} alt="profile_image" />
        <a href="#">username</a>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="input_comment"
          placeholder="Write Comment"
          value={comment}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
