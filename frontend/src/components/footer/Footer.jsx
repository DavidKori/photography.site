import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container container--wide">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="brand">
                <span className="brand-mark" aria-hidden="true"></span> Kdevifys
              </span>
              <p>
                A small commercial photography studio between lorem and ipsum.
                Editorial, campaign, architecture, food, product.
              </p>
              <span className="label">
                Studio · 0900–1900 EAT · 0900–1800 EST
              </span>
            </div>
            <div>
              <h4>Studio</h4>
              <ul>
                <li>
                  <a href="studio">About</a>
                </li>
                <li>
                  <a href="studio#team">Team</a>
                </li>
                <li>
                  <a href="service">Services</a>
                </li>
                <li>
                  <a href="service#rates">Rates</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Work</h4>
              <ul>
                <li>
                  <a href="work">Selected work</a>
                </li>
                <li>
                  <a href="work#featured">Archive</a>
                </li>
                <li>
                  <a href="work#editorial">Editorial</a>
                </li>
                <li>
                  <a href="work#architecture">Architecture</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="contact#form">Start a project</a>
                </li>
                <li>
                  <a href="contact#careers">Careers</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © 2026 Kdevifys Studio · Made for Studios. Distributed by{" "}
              <a href="https://www.korideveloper.work.gd/" target="_blank">
                Kdevifys
              </a>
            </span>
            <div className="footer-meta-links">
              <a href="#">Privacy</a>
              <a href="#">Imprint</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
