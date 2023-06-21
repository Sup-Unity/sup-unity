// Should usernames be editable?
// Should we include a users most recent posts?
// Show what communities they are a member of?
// Some type of points based system could be nice at somepoint?

// TODO:
// 1. Look into how verifications will work.
// 2. Set up DB so we can persist data.
// 3. Auth

import { useContext, useState } from "react";
import UserContext from "../../context/user-context";
import PStyles from "./Profile.module.scss";
import userArray from "../../tempData/users";

const ProfilePage = () => {
  // const { user } = useContext(UserContext);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [editing, setEditing] = useState(false);

  // Temporary way to get user before DB is implemented
  const [tempUserId, setTempUserId] = useState(0);
  const currentUser = userArray[tempUserId % userArray.length];

  return (
    <>
      <div className={PStyles.userProfile}>
        <h1 className={PStyles.profileHeading}>
          {currentUser.username}'s profile
        </h1>
        {/* Profile Picture */}
        <div className={PStyles.picAndEdit}>
          <div className={PStyles.profilePicContainer}>
            <img src={currentUser.profilePic} />
          </div>
          {isCurrentUser && (
            // CANNOT CURRENTLY SAVE
            <button onClick={() => setEditing((state) => !state)}>
              {editing ? "Save" : "Edit"}
            </button>
          )}
        </div>
        <div>
          <h3>User Info</h3>
          {/* Name */}
          {editing ? (
            <>
              <span>Username: </span>
              <input placeholder="Enter your username..." />
            </>
          ) : (
            <span>Username: {currentUser.username}</span>
          )}
        </div>
        {/* About paragraph (char limit?) */}
        <div>
          <h3>About</h3>
          {editing ? (
            <textarea
              name="about-textarea"
              id="about-textarea"
              className={PStyles.profileTextarea}
              placeholder="Tell us about yourself...."
            />
          ) : (
            <p>{currentUser.about || "This section is empty."}</p>
          )}
        </div>
        {/* Verifications */}
        {/* Show verifications section if any of users verifications are true */}
        {Object.values(currentUser.verifications).some(
          (verif) => verif
        ) && (
          <div className={PStyles.verificationsContainer}>
            <h3>Verifications</h3>
            {currentUser.verifications.email && (
              <span>&#x2713; Email verified</span>
            )}
            {currentUser.verifications.phone && (
              <span>&#x2713; Phone verified</span>
            )}
            {currentUser.verifications.identity && (
              <span>&#x2713; Identity verified</span>
            )}
            {currentUser.verifications.referral && (
              <span>&#x2713; Community referral</span>
            )}
          </div>
        )}
        {/* Posts? */}
        <div>
          <h3>Posts?</h3>
        </div>
      </div>
      {/* BUTTONS FOR DEV USE */}
      <button onClick={() => setIsCurrentUser((state) => !state)}>
        Toggle isCurrentUser
      </button>
      <button onClick={() => setTempUserId((currId) => currId - 1)}>
        Previous User
      </button>
      <button onClick={() => setTempUserId((currId) => currId + 1)}>
        Next User
      </button>
    </>
  );
};

export default ProfilePage;
