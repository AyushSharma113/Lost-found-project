import React, { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";

import MainDashboard from "./pages/MainDashboard";

import { auth } from "./firebase/firebase";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <>{user ? <MainDashboard /> : <LandingPage />}</>;
}

export default App;
