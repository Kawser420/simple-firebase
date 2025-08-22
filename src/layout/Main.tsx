import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/component/Header/Header";

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
