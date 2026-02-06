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
import { contextList } from "./api";
import { loadGA4 } from "./utils/googleTag";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // loadGA4("G-004XKYRNE8");
    const visited = localStorage.getItem("visited");
    if (visited) setShowIntro(false);
  }, []);

  const handleEnter = () => {
    setShowIntro(false);
    localStorage.setItem("visited", "true");
  };

  const [loading, setLoading] = useState(true);
  const [contextData, setContextData] = useState({});

  const getContextList = async () => {
      let contextRes = await contextList();
      // console.log('>>>', contextRes)
      if (contextRes?.data) {
        const normalized = Object.fromEntries(
          Object.entries(contextRes?.data).map(([key, val]) => [key, val[0]])
        );
        setContextData(normalized);
        // setContextData(contextRes.data);
        // console.log('it is reached', normalized)
      }
    };
  useEffect(() => {
    if (loading) {
      getContextList();
      setLoading(false)
    }
  }, [showIntro, loading]);
  return (
    <>
      {showIntro ? (
        <IntroScreen onEnter={handleEnter} />
      ) : (
        <>
          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<Home contextData={contextData} />} />
              <Route path="/participate" element={<Participate />} />
              <Route path="/terms-conditions" element={<TermsConditions  data={contextData?.["TermnCondition"]} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy  data={contextData?.["PrivacyPolicy"]}/>} />
              <Route path="/disclaimer" element={<Disclaimer  data={contextData?.["Disclaimer"]}/>} />
              <Route path="/thankyou" element={<Thankyou />} />
            </Routes>
          </Router>
          <Footer data={contextData?.["Footer-Context"]} />
        </>
      )}
    </>
  );
}

export default App;
