import React, { createContext, SetStateAction, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Types
import { TUser } from "./types";

// Context
import UserContext from "./context/user-context";

// Pages
import Home from "./pages/Home";
import LoggedInPage from "./pages/LoggedIn";
import OnboardingPage from "./pages/Onboarding";
import SignUpPage from "./pages/SignUp";
<<<<<<< HEAD:src/App.tsx
import IssuePage from "./pages/IssuePage/IssuePage";
import IssueFeedPage from "./pages/IssueFeed/IssueFeedPage"
=======
import ProfilePage from "./pages/Profile";
>>>>>>> 3f5e31fccb61f7c39b3a0ef98e681875d94fb0c6:frontend/src/App.tsx

function App() {
  const [user, setUser] = useState<TUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route index element={<Home />} />
       
        <Route path="onboarding" element={<OnboardingPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
<<<<<<< HEAD:src/App.tsx
        <Route path="issue" element={<IssuePage />} />
        <Route path="issuefeed" element={<IssueFeedPage /> } />
=======
        <Route path="profile" element={<ProfilePage />} />
>>>>>>> 3f5e31fccb61f7c39b3a0ef98e681875d94fb0c6:frontend/src/App.tsx
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
