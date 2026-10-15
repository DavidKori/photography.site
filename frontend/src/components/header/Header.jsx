import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    setCurrentPage(window.location.hash.split("/")[1]);
  });
  // console.log(currentPage);
  //console.log(window.location.hash.split("/")[1]);
  return (
    <div>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container container--wide">
          <nav className="nav" aria-label="Primary">
            <a className="brand" href="#home">
              <span className="brand-mark" aria-hidden="true"></span> KPixels
            </a>
            <div className="nav-links" role="navigation">
              <a
                href="#/home"
                aria-current={currentPage === "home" ? "page" : ""}
              >
                Index
              </a>

              <a
                href="#/work"
                aria-current={currentPage === "work" ? "page" : ""}
              >
                Work
              </a>
              <a
                href="#/studio"
                aria-current={currentPage === "studio" ? "page" : ""}
              >
                Studio
              </a>
              <a
                href="#/service"
                aria-current={currentPage === "service" ? "page" : ""}
              >
                Services
              </a>
              <a
                href="#/contact"
                aria-current={currentPage === "contact" ? "page" : ""}
              >
                Contact
              </a>
            </div>
            <div className="nav-cta-row">
              <a href="#/contact" className="btn btn--primary btn--sm">
                Start a project
                <svg
                  className="arrow"
                  style={{ width: "14", height: "10" }}
                  viewBox="0 0 14 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <button
                className="nav-toggle"
                aria-label="Open menu"
                aria-expanded="false"
                aria-controls="mobile-drawer"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="mobile-drawer" id="mobile-drawer" aria-hidden="true">
        <button className="drawer-close" aria-label="Close menu">
          Close
        </button>
        <a href="#/home" aria-current={currentPage === "home" ? "page" : ""}>
          Index
        </a>

        <a href="#/work" aria-current={currentPage === "work" ? "page" : ""}>
          Work
        </a>
        <a
          href="#/studio"
          aria-current={currentPage === "studio" ? "page" : ""}
        >
          Studio
        </a>
        <a
          href="#/service"
          aria-current={currentPage === "service" ? "page" : ""}
        >
          Services
        </a>
        <a
          href="#/contact"
          aria-current={currentPage === "contact" ? "page" : ""}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
