import React from "react";
import Navbar from "../components/Navbar";

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
