import UPStyles from "./UserProfile.module.scss";
import frogPic from "../../../images/frog.jpg";

const UserProfile = () => {
  return (
    <div className={UPStyles.userProfile}>
      <h1 className={UPStyles.profileHeading}>
        supunityuser420's profile
      </h1>
      {/* Profile Picture */}
      <div className={UPStyles.picAndEdit}>
        <div className={UPStyles.profilePicContainer}>
          <img src={frogPic} />
        </div>
        <button>Edit</button>
      </div>
      <div>
        <h3>User Info</h3>
        {/* Name */}
        <span>Username: supunityuser420</span>
      </div>
      {/* Verifications */}
      <div className={UPStyles.verificationsContainer}>
        <h3>Verifications</h3>
        <span>&#x2713; Email verified</span>
        <span>&#x2713; Phone verified</span>
        <span>&#x2713; Identity verified</span>
        <span>&#x2713; Community referral</span>
      </div>
      {/* Posts? */}
      <div>
        <h3>Posts?</h3>
      </div>
    </div>
  );
};

export default UserProfile;
