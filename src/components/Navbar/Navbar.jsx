// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/Kantan.png";
// import "./Navbar.css";

// const Navbar = () => {

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Doctor", path: "/doctor" },
//     { name: "Our Services", path: "/our-services" },
//     { name: "About-Us", path: "/about-us" },
//   ];

//   return (
//     <nav className="navbar navbar-expand-lg bg-white mb-2 fixed-top">
//       <div className="container-xl d-flex justify-content-between align-items-center w-100">

//         {/* Logo */}
//         <div className="d-flex align-items-center ps-0">
//           <NavLink className="navbar-brand" to="/">
//             <img src={logo} alt="Logo" style={{ height: "90px",width:" 95px" }} />
//           </NavLink>
//         </div>

//         {/* Middle Nav Links */}
//         <div className="d-none d-lg-flex align-items-center gap-4 mx-auto">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 `text-decoration-none nav-link ${isActive ? "active-nav" : ""}`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </div>

//         {/* Login / Signup */}
//         <div className="login-signup-container pe-4">
//           <a href="https://eashaop.com/" className="login-link" style={{ textDecoration: 'none' }}>
//             Login
//           </a>
//           <span className="login-divider">/</span>

//           {/* Signup Dropdown */}
//           <div className="signup-dropdown">
//             <span className="signup-link">Sign Up ▾</span>
//             <div className="signup-options">
//               <a
//                 href="https://eashaop.com/"
//                 className="signup-option"
//                 style={{ textDecoration: 'none' }}
//               >
//                 Sign Up as User
//               </a>

//               {/* Doctor Signup */}
//               <a
//                 href="https://eashaop.com/"
//                 className="signup-option"
//                 style={{ textDecoration: 'none' }}
//               >
//                 Sign Up as Doctor
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/Kantan.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Doctor", path: "/doctor" },
//     { name: "Our Services", path: "/our-services" },
//     { name: "About-Us", path: "/about-us" },
//   ];

//   return (
//     <nav className="navbar navbar-expand-lg bg-white mb-2 fixed-top">
//       <div className="container-xl d-flex justify-content-between align-items-center w-100">

//         {/* LEFT: Logo */}
//         <div className="d-flex align-items-start py-1">
//           <NavLink className="navbar-brand p-0 m-0" to="/">
//             {/* <img src={logo} alt="Logo" style={{ height: "90px", width: "95px" }} /> */}
//             {/* In your Navbar.js, change the logo style to this: */}
// <img 
//   src={logo} 
//   alt="Logo" 
//   className="h-[60px] lg:h-[90px] w-auto" 
//   style={{ objectFit: 'contain' }} 
// />
//           </NavLink>
//         </div>

//         {/* MIDDLE: Desktop Navigation (Hidden on mobile) */}
//         <div className="d-none d-lg-flex align-items-center gap-4 mx-auto">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) => `text-decoration-none nav-link ${isActive ? "active-nav" : ""}`}
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </div>

//         {/* MOBILE BREADCRUMB BAR (Only 1 Toggler here) */}
//         <div className="mobile-breadcrumb-header d-lg-none">
//           <button className="breadcrumb-toggler border-0 bg-transparent" onClick={() => setSidebarOpen(true)}>
//             <span className="fs-4">☰</span>
//           </button>
//           <span className="current-page-name ms-2 fw-medium">Home</span>
//         </div>

//         {/* MOBILE SIDEBAR (Contains Home and all other links) */}
//         <div className={`mobile-sidebar ${isSidebarOpen ? "sidebar-open" : ""} d-lg-none`}>
//           <div className="sidebar-header border-bottom">
//             <button className="border-0 bg-transparent fs-4 me-3" onClick={() => setSidebarOpen(false)}>✕</button>
//             <span className="fw-bold"></span>
//           </div>
//           <div className="sidebar-links-container">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setSidebarOpen(false)}
//                 className={({ isActive }) => `text-decoration-none sidebar-link ${isActive ? "active-sidebar-nav" : ""}`}
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Login / Signup */}
//         <div className="login-signup-container">
//           <a href="https://eashaop.com/" className="login-link text-decoration-none">Login</a>
//           <span className="login-divider">/</span>
//           <div className="signup-dropdown">
//             <span className="signup-link">Sign Up ▾</span>
//             <div className="signup-options">
//               <a href="https://eashaop.com/" className="signup-option text-decoration-none">Sign Up as User</a>
//               <a href="https://eashaop.com/" className="signup-option text-decoration-none">Sign Up as Doctor</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;










import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Kantan.png";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Doctor", path: "/doctor" },
    { name: "Our Services", path: "/our-services" },
    { name: "About-Us", path: "/about-us" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white mb-2 fixed-top">
      <div className="container-xl d-flex justify-content-between align-items-center w-100">

        {/* LEFT: Logo */}
        <div className="d-flex align-items-start py-1">
          <NavLink className="navbar-brand p-0 m-0" to="/">
            {/* <img src={logo} alt="Logo" style={{ height: "90px", width: "95px" }} /> */}
            {/* In your Navbar.js, change the logo style to this: */}
<img 
  src={logo} 
  alt="Logo" 
  className="h-[60px] lg:h-[90px] w-auto" 
  style={{ objectFit: 'contain' }} 
/>
          </NavLink>
        </div>

        {/* MIDDLE: Desktop Navigation (Hidden on mobile) */}
        <div className="d-none d-lg-flex align-items-center gap-4 mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `text-decoration-none nav-link ${isActive ? "active-nav" : ""}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* MOBILE BREADCRUMB BAR (Only 1 Toggler here) */}
        <div className="mobile-breadcrumb-header d-lg-none">
          <button className="breadcrumb-toggler border-0 bg-transparent" onClick={() => setSidebarOpen(true)}>
            <span className="fs-4">☰</span>
          </button>
          <span className="current-page-name ms-2 fw-medium">Home</span>
        </div>

        {/* MOBILE SIDEBAR (Contains Home and all other links) */}
        <div className={`mobile-sidebar ${isSidebarOpen ? "sidebar-open" : ""} d-lg-none`}>
          <div className="sidebar-header border-bottom">
            <button className="border-0 bg-transparent fs-4 me-3" onClick={() => setSidebarOpen(false)}>✕</button>
            <span className="fw-bold"></span>
          </div>
          <div className="sidebar-links-container">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => `text-decoration-none sidebar-link ${isActive ? "active-sidebar-nav" : ""}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* RIGHT: Login / Signup */}
        <div className="login-signup-container">
          <a href="https://eashaop.com/" className="login-link text-decoration-none">Login</a>
          <span className="login-divider">/</span>
          <div className="signup-dropdown">
            <span className="signup-link">Sign Up ▾</span>
            <div className="signup-options">
              <a href="https://eashaop.com/" className="signup-option text-decoration-none">Sign Up as User</a>
              <a href="https://eashaop.com/" className="signup-option text-decoration-none">Sign Up as Doctor</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
