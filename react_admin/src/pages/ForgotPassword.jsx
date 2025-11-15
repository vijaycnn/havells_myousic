import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Image, Form, Button, Alert } from "react-bootstrap";
import logo from "../assets/logo.svg";
import wallpaper from "../assets/wallpaper.jpg";
const adminAlias = import.meta.env.VITE_API_ADMIN_ALIAS;

const Forgot = ({ setIsAuthenticated, onAuthStateChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // ✅ Added password state
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();

    // ✅ Dummy credentials
    const dummyEmail = "admin@gmail.com";
    const dummyPassword = "admin123";

    // ✅ Validation check
    if (email === dummyEmail && password === dummyPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuthenticated", "true");

      if (onAuthStateChange) {
        onAuthStateChange(true, {
          name: "Admin User",
          username: "admin@gmail.com",
          localAccountId: "email-admin",
        });
      }

      navigate(`${adminAlias}/dashboards`);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="h-100 app-login d-flex">
      <div className="app-login-left flex-grow-1">
        <Image src={wallpaper} alt="Login Wallpaper" />
      </div>

      <div className="app-login-right bg-white d-flex flex-column align-items-center justify-content-center p-5">
        <Form
          onSubmit={handleEmailLogin}
          className="app-login-form d-grid gap-4"
        >
          <div className="sec-head mb-4">
            <Image
              className="app-login-logo mb-5 d-block"
              src={logo}
              alt="Logo"
            />
            <h2 className="sec-title fs-2">Forgot Password?</h2>
            <p className="sec-sub-title fw-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corporis, officiis?
            </p>
          </div>

          {/* Error Message */}
          {error && <Alert variant="danger">{error}</Alert>}

          {/* Email Field */}
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter your Email ID"
              value={email}
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* Submit Button */}
          <Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="w-100 pill"
              size="lg"
            >
              <span>Continue</span>
            </Button>
            <p className="text-center mt-3">
              <Link to={adminAlias}>Back to Login</Link>
            </p>
          </Form.Group>
        </Form>
      </div>
    </section>
  );
};

export default Forgot;
