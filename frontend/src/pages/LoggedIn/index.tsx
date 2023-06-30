<<<<<<< HEAD:src/pages/LoggedIn/index.tsx
=======
import { useContext } from "react";

import LIStyles from "./LoggedIn.module.css";
import type { TTrackedCommitment } from "../../types";

// TempData
import { trackedCommitments } from "../../tempData";

// Context
import UserContext from "../../context/user-context";

// Components
>>>>>>> 3f5e31fccb61f7c39b3a0ef98e681875d94fb0c6:frontend/src/pages/LoggedIn/index.tsx
import Commitments from "./components/Commitments";
import DonationsAndFulfilled from "./components/DonationsAndFulfilled";
import OpenRequests from "./components/OpenRequests";
import Donate from "../../components/Donate";
import SubmitRequest from "./components/SubmitRequest";
import UserContext from "../../context/user-context";
import type { TTrackedCommitment } from "../../types";
import "./LoggedIn.css";

import { useContext } from "react";

import { trackedCommitments } from "../../tempData";


const LoggedInPage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className={`container ${LIStyles.fontRaleway}`}>
        <div className="row">
          <div className="u-full-width">
            <div className={LIStyles.centerChild}>
              <img
                src="https://locallifeline.files.wordpress.com/2022/07/logo-1.png?w=458&h=125"
                width="200px"
                alt="Sup? Unity! Logo"
              />
            </div>
            <hr />
            <p className={`${LIStyles.welcomeMsg} centerText`}>
              Welcome to your community, {user ? user.username : "Current User"}
              !
            </p>
            <hr />
            <h2 className="centerText"> Profile!</h2>
            <p className={`centerText ${LIStyles.profileInfo}`}>
              User12313123 - John Smith
            </p>
            <p className={`centerText ${LIStyles.profileInfo}`}>
              &#9745; - Social Media Linked
            </p>
            <p className={`centerText ${LIStyles.profileInfo}`}>
              &#9745; - Sponsored by 5 community members
            </p>
            <Commitments
              commitments={trackedCommitments as TTrackedCommitment[]}
            />
            <p className="centerText">See all...</p>
            <div className={LIStyles.centerChild}>
              <img
                src="https://abeliefnowlinux.azurewebsites.net/images/timechart.png"
                alt="Time chart of 2021 to 2022"
              />
            </div>
            <p
              id="commitments-fulfilled"
              className={LIStyles.commitmentsFulfilled}
            >
              95% of commitments fulfilled
            </p>
            <hr />
            <h2 className={`centerText ${LIStyles.sectionHeader}`}>
              Community 97006
            </h2>
            <DonationsAndFulfilled />
            <hr />
            <OpenRequests />
            <Donate />
            <hr />
            <SubmitRequest />
          </div>
        </div>
      </div>
      <script src="https://abeliefnow.com/js/app.js"></script>
      <script src="https://cdn.auth0.com/js/auth0-spa-js/1.20/auth0-spa-js.production.js"></script>
    </>
  );
};

export default LoggedInPage;
