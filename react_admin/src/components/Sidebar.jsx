import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Image, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { BiGridAlt, BiGroup, BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    localStorage.clear("auth-token");
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <aside className="app-sidebar">
        <Link className="app-sidebar-logo" to="/dashboard">
          <Image src={logo} alt="" />
        </Link>
        <div className="app-sidebar-nav">
          <Nav className="flex-column">
            <Link to="/dashboard" className="nav-link">
              <span className="nav-link-icon">
                <BiGridAlt />
              </span>
              <span className="nav-link-text">Dashboard</span>
            </Link>
            <Link to="/participant" className="nav-link">
              <span className="nav-link-icon">
                <BiGroup />
              </span>
              <span className="nav-link-text">Participant</span>
            </Link>
          </Nav>
        </div>
        <div className="w-100 p-3">
          <Button
            variant="primary btn-icon"
            title="Logout"
            onClick={handleLogout}
          >
            <span>
              <BiLogOut size={18} color="white" />
            </span>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
