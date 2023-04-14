import { useContext, useState } from "react";
import UserContext from "../../context/user-context";
import CurrentUserProfile from "./CurrentUserProfile";
import UserProfile from "./UserProfile";

const ProfilePage = () => {
  // const { user } = useContext(UserContext);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  return (
    <>
      {isCurrentUser ? <CurrentUserProfile /> : <UserProfile />}
      <button onClick={() => setIsCurrentUser((state) => !state)}>
        Toggle isCurrentUser
      </button>
    </>
  );
};

export default ProfilePage;
