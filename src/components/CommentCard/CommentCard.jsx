import "./commentcard.css";

import edinburgh from "../../tempData/images/edinburgh.jpg";

import { BiComment } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const jpgMap = {
  edinburgh,
};

export default function CommentCard({ comment, profile_img, username }) {
  return (
    <div className="comment_card">
      <div className="comment_header">
        <div>
          <img
            className="profile_img"
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
          <div className="icon_and_label">
            <BiComment />
            Comment
          </div>
        </div>
      </div>
      <div className="comment_body">{comment}</div>
    </div>
  );
}
