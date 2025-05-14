import React, { useState } from "react";
import Navlinks from "../components/Navlinks";

const MainDashboard = () => {
  const [isDashboard, setIsDashboard] = useState(true);
  return (
    <>
      <Navlinks isDashboard={isDashboard} />
    </>
  );
};

export default MainDashboard;
