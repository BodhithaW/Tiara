// import React, { useState } from "react";

// export const Navigation = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <a className="navbar-brand" href="#page-top">
//           <img
//             src="img/logo.png"
//             alt="Cleaning Service logo"
//             className="logo"
//           />
//         </a>
//         {/* <div className="brand-name">Tiara Cleaning Service </div> */}

//         {/* Toggle Button */}
//         <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </button>

//         {/* Collapsible Menu */}
//         <ul className={`menu ${menuOpen ? "open" : ""}`}>
//           <li>
//             <a href="#features" onClick={() => setMenuOpen(false)}>
//               Features
//             </a>
//           </li>
//           <li>
//             <a href="#about" onClick={() => setMenuOpen(false)}>
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#services" onClick={() => setMenuOpen(false)}>
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#gallery" onClick={() => setMenuOpen(false)}>
//               Gallery
//             </a>
//           </li>
//           <li>
//             <a href="#contact" onClick={() => setMenuOpen(false)}>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

import React, { useState, useEffect } from "react";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "about", "services", "gallery", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        {/* Toggle Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Collapsible Menu */}
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#features"
              className={activeSection === "features" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeSection === "services" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className={activeSection === "gallery" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
