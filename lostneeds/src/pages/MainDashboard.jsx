import React, { useState } from "react";
import Navlinks from "../components/Navlinks";
import Chatlist from "../components/Chatlist";
import ChatBox from "../components/ChatBox";

const MainDashboard = () => {
  const [activeTab, setActivetab] = useState("home");

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-[#F5F5F5]">
      <Navlinks setActivetab={setActivetab} />
      {activeTab === "home" && (
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold">Home Tab</h1>
        </div>
      )}
      {activeTab === "chat" && (
        <>
          <Chatlist />
          <ChatBox />
        </>
      )}
    </div>
  );
};

export default MainDashboard;
