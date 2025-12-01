import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./scss/main.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";
import Participate from "./pages/Participate";
import Thankyou from "./pages/Thankyou";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) setShowIntro(false);
  }, []);

  const handleEnter = () => {
    setShowIntro(false);
    localStorage.setItem("visited", "true");
  };
  return (
    <>
      {showIntro ? (
        <IntroScreen onEnter={handleEnter} />
      ) : (
        <>
          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/participate" element={<Participate />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/thankyou" element={<Thankyou />} />
            </Routes>
          </Router>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
