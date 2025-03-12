// import React from "react";

// export const Navigation = (props) => {
//   return (
//     <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//       <div className="navbar-container">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//           <a className="navbar-brand page-scroll" href="#page-top">
//             <img
//               src="img/logo.png"
//               alt="Cleaning Service logo"
//               className="logo"
//             />
//             Tiara Cleaning
//           </a>
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li>
//               <a href="#features" className="page-scroll">
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="page-scroll">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="page-scroll">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#portfolio" className="page-scroll">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="page-scroll">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

import React, { useState } from "react";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a className="navbar-brand" href="#page-top">
          <img
            src="img/logo.png"
            alt="Cleaning Service logo"
            className="logo"
          />
        </a>
        {/* <div className="brand-name">Tiara Cleaning Service </div> */}

        {/* Toggle Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Collapsible Menu */}
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
