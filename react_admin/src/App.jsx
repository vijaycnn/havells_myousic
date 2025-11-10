import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./scss/main.scss";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Forgot from "./pages/ForgotPassword";
import Participate from "./pages/Participate";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [azureUser, setAzureUser] = useState(true);

  const handleAuthStateChange = (isAuth, user) => {
    setIsAuthenticated(isAuth);
    if (isAuth && user) {
      setAzureUser(user);
    } else {
      setAzureUser(null);
    }
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                onAuthStateChange={handleAuthStateChange}
              />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Forgot
                setIsAuthenticated={setIsAuthenticated}
                onAuthStateChange={handleAuthStateChange}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout setIsAuthenticated={setIsAuthenticated}>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/participant"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout setIsAuthenticated={setIsAuthenticated}>
                  <Participate />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
