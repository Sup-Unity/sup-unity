import "./commentcard.css";

import { BiComment } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

import edinburgh from "../../tempData/images/edinburgh.jpg";


const jpgMap = {
  edinburgh,
};

export default function CommentCard({ comment, profile_img, username }) {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <div>
          <img
            className="profile-img"
            src={jpgMap[profile_img]}
            alt={profile_img}
          />
          <a href="#">{username}</a>
        </div>
        <div className="reply">
          <div className="icon_and_label">
            <AiOutlineLike />
            Like
          </div>
          <div className="icon-and-label">
            <BiComment />
            Comment
          </div>
        </div>
      </div>
      <div className="comment-body">{comment}</div>
    </div>
  );
}
