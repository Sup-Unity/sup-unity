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
import IssuePage from "./pages/IssuePage/IssuePage";

function App() {
  const [user, setUser] = useState<TUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="logged-in" element={<LoggedInPage />} />
        <Route path="onboarding" element={<OnboardingPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path = "issue" element={<IssuePage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
