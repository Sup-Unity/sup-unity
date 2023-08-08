import React, { createContext, SetStateAction, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Types
import { TUser } from "./types";

// Context
import UserContext from "./context/user-context";

// Pages
import Home from "./pages/Home/OldHome";
import LoggedInPage from "./pages/LoggedIn";
import OnboardingPage from "./pages/Onboarding";
import SignUpPage from "./pages/SignUp";
import ProfilePage from "./pages/Profile";
import IssuePage from "./pages/IssuePage/IssuePage";
import IssueFeedPage from "./pages/IssueFeed/IssueFeedPage";

function App() {
  const [user, setUser] = useState<TUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="logged-in" element={<LoggedInPage />} />
        <Route path="onboarding" element={<OnboardingPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="issue" element={<IssuePage />} />
        <Route path="issuefeed" element={<IssueFeedPage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
