import "./issuetopic.css";

import { useContext } from "react";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { BiComment, BiLike, BiEdit } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

import bird from "../../../../tempData/images/bird.jpg";
import dog from "../../../../tempData/images/dog.jpeg";
import cat from "../../../../tempData/images/cat.jpeg";

/* import { LoginContext } from "../../context/LoginContext"; */

const imageMap = {
  bird,
  dog,
  cat,
};

export default function RequestTopic({ title, description, images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  /*const { currentUser, isLoggedIn, LogIn } = useContext(LoginContext); */
  const [postOwner, setPostOwner] = useState("Bob");

  /* console.log(isLoggedIn); */
  /*console.log(currentUser); */
  console.log(postOwner);

  const renderImages = images.map((image) => {
    return <img className="image" src={imageMap[image]} alt={image} />;
  });

  const handleClickDisplayImages = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLikeButton = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="request_topic">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="request_interactions">
        <div className="icon_and_label">
          {isLiked ? (
            <AiOutlineLike onClick={handleClickLikeButton} />
          ) : (
            <AiFillLike onClick={handleClickLikeButton} />
          )}
          Like
        </div>
        <div className="icon_and_label">
          <BiComment />
          Comment
        </div>
        {/*isLoggedIn && currentUser === postOwner ?
        (<div className="icon_and_label"><BiEdit /> Edit</div> ) : ( false   ) */}
      </div>
      <div className="request_interactions">
        {/*isLoggedIn && currentUser === postOwner ? (
          <button>
            <MdDone />
            Mark Complete
          </button>
        ) : (
          false
        )*/}

        <div className="display_images" onClick={handleClickDisplayImages}>
          {isOpen ? "Hide Images" : "Show Images"}
        </div>
      </div>
      {isOpen && <div>{renderImages}</div>}
    </div>
  );
}
