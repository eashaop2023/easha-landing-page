import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Doctor", path: "/doctor" },
    { name: "Our Services", path: "/our-services" },
    { name: "About-Us", path: "/about-us" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white mb-2 fixed-top">
      <div className="container-xl d-flex justify-content-between align-items-center w-100">

        {/* Logo */}
        <div className="d-flex align-items-center ps-0">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </NavLink>
        </div>

        {/* Middle Nav Links */}
        <div className="d-none d-lg-flex align-items-center gap-4 mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-decoration-none nav-link ${isActive ? "active-nav" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Login / Signup */}
        <div className="login-signup-container pe-4">
          <NavLink to={API_BASE_URL} className="login-link">
            Login
          </NavLink>
          <span className="login-divider">/</span>

          {/* Signup Dropdown */}
          <div className="signup-dropdown">
            <span className="signup-link">Sign Up ▾</span>
            <div className="signup-options">
              <NavLink
                to={`${API_BASE_URL}/signup`}
                className="signup-option"
              >
                Sign Up as User
              </NavLink>

              {/* Doctor Signup - Local route */}
              <NavLink
                to={`${API_BASE_URL}/register`}
                className="signup-option"
              >
                Sign Up as Doctor
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
