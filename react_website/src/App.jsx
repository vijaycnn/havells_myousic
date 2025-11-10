import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./scss/main.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Participate from "./pages/Participate";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
