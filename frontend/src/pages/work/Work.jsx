import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Work = () => {
  return (
    <div>
      <Header />
      <main id="main">
        {/* <!-- Hero --> */}
        <section className="hero">
          <div className="container container--wide">
            <div className="hero-grid">
              <div className="hero-text">
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>142 projects ·
                  2014–25
                </span>
                <h1 className="hero-headline">
                  Every frame
                  <br />
                  <span className="lime">we kept,</span> sorted
                  <br />
                  by year and brief.
                </h1>
                <p className="hero-sub">
                  The full archive is not online — clients keep what is
                  delivered. What follows is a tight working selection: twelve
                  featured projects, then a paginated archive of every campaign
                  we have shipped since the studio opened in October 2014.
                </p>
                <div className="hero-cta-row">
                  <a className="btn btn--primary btn--lg" href="#featured">
                    Featured · 12
                  </a>
                  <a className="btn btn--ghost btn--lg" href="#archive">
                    Archive · 142
                  </a>
                </div>
                <div className="hero-meta">
                  <span>
                    <strong>11</strong> · cover stories, 2024
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong>06</strong> · award-winning campaigns
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong>140K</strong> · frames archived
                  </span>
                </div>
              </div>
              <div className="hero-media">
                <img src="src/assets/img/hero-archive.jpg" alt="" />
                <div className="floating-tag ft-top">
                  <span className="pill">Editorial</span>
                  lorem · 140
                </div>
                <div className="floating-tag ft-bottom">
                  50mm · ƒ/2.8 · 1/500s · Lisbon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Filters --> */}
        <section className="compact" id="featured">
          <div className="container container--wide">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>Featured
                </span>
                <h2>
                  Twelve projects
                  <br />
                  worth a second look.
                </h2>
              </div>
              <p className="lede">
                Browse by discipline, or scroll through chronologically. Most
                projects shipped between 2023 and 2025 — the studio retired the
                public 2014–22 archive in March 2024.
              </p>
            </div>

            <div
              className="center-row"
              style={{
                flexWrap: "wrap",
                gap: "var(--space-3)",
                marginBottom: "var(--space-7)",
              }}
            >
              <button className="btn btn--primary btn--sm">All · 140</button>
              <button className="btn btn--ghost btn--sm">Editorial · 38</button>
              <button className="btn btn--ghost btn--sm">Campaign · 41</button>
              <button className="btn btn--ghost btn--sm">
                Architecture · 22
              </button>
              <button className="btn btn--ghost btn--sm">Food · 19</button>
              <button className="btn btn--ghost btn--sm">Product · 14</button>
              <button className="btn btn--ghost btn--sm">Portrait · 8</button>
            </div>
          </div>
        </section>

        {/* <!-- Featured grid --> */}
        <section style={{ paddingTop: "0" }}>
          <div className="container container--wide">
            <div className="work-grid">
              <a className="work-item work-item--xl reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-atrium.jpg" alt="" />
                  <span className="wm-pill">Editorial</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">lorem · ipsum Lookbook</div>
                    <div className="wm-cap">36 frames · 4 days · Lisbon</div>
                  </div>
                  <div className="wm-cap">No. 142</div>
                </div>
              </a>

              <a className="work-item work-item--sm reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-still-1.jpg" alt="" />
                  <span className="wm-pill">Still</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Lorem, ipsum.</div>
                    <div className="wm-cap">Catalogue · 18 frames</div>
                  </div>
                  <div className="wm-cap">No. 139</div>
                </div>
              </a>

              <a className="work-item work-item--md reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-arch.jpg" alt="" />
                  <span className="wm-pill">Architecture</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Lorem, ipsum.</div>
                    <div className="wm-cap">Yearbook · 22 frames</div>
                  </div>
                  <div className="wm-cap">No. 136</div>
                </div>
              </a>

              <a className="work-item work-item--md reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-food.jpg" alt="" />
                  <span className="wm-pill">Food</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">lorem &amp; ipsum</div>
                    <div className="wm-cap">Cookbook · 96 frames</div>
                  </div>
                  <div className="wm-cap">No. 134</div>
                </div>
              </a>

              <a className="work-item work-item--sm reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-portrait-1.jpg" alt="" />
                  <span className="wm-pill">Portrait</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Lorem, ipsum.</div>
                    <div className="wm-cap">For TYPE quarterly</div>
                  </div>
                  <div className="wm-cap">No. 131</div>
                </div>
              </a>

              <a className="work-item work-item--lg reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-product.jpg" alt="" />
                  <span className="wm-pill">Product</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">lorem &amp; ipsum</div>
                    <div className="wm-cap">FW24 product · 28 frames</div>
                  </div>
                  <div className="wm-cap">No. 129</div>
                </div>
              </a>

              <a className="work-item work-item--sm reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-still-2.jpg" alt="" />
                  <span className="wm-pill">Still</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Lorem, ipsum.</div>
                    <div className="wm-cap">Knitwear · 22 frames</div>
                  </div>
                  <div className="wm-cap">No. 127</div>
                </div>
              </a>

              <a className="work-item work-item--md reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-portrait-2.jpg" alt="" />
                  <span className="wm-pill">Portrait</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Lorem, ipsum.</div>
                    <div className="wm-cap">For Apartamento 32</div>
                  </div>
                  <div className="wm-cap">No. 124</div>
                </div>
              </a>

              <a className="work-item work-item--md reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-arch-2.jpg" alt="" />
                  <span className="wm-pill">Architecture</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">lorem &amp; ipsum</div>
                    <div className="wm-cap">Practice monograph</div>
                  </div>
                  <div className="wm-cap">No. 121</div>
                </div>
              </a>

              <a className="work-item work-item--lg reveal" href="#">
                <div className="wm">
                  <img src="src\assets\img\work-fashion.jpg" alt="" />
                  <span className="wm-pill">Campaign</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Lorem, ipsum.</div>
                    <div className="wm-cap">Campaign · 42 frames · kenya</div>
                  </div>
                  <div className="wm-cap">No. 118</div>
                </div>
              </a>

              <a className="work-item work-item--sm reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-food-2.jpg" alt="" />
                  <span className="wm-pill">Food</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Lorem, ipsum.</div>
                    <div className="wm-cap">Trattoria menu · 24 frames</div>
                  </div>
                  <div className="wm-cap">No. 115</div>
                </div>
              </a>

              <a className="work-item work-item--sm reveal" href="#">
                <div className="wm">
                  <img src="src/assets/img/work-doc.jpg" alt="" />
                  <span className="wm-pill">Documentary</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14", height: "14" }}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="work-meta">
                  <div>
                    <div className="wm-title">Lorem, ipsum.</div>
                    <div className="wm-cap">Process essay · 31 frames</div>
                  </div>
                  <div className="wm-cap">No. 113</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* <!-- Case-study chapter --> */}
        <section className="chapter tile-section">
          <div className="container container--narrow">
            <div className="chapter-grid">
              <div>
                <span className="label">Case study · No. 142</span>
                <h2>
                  Lorem, ipsum. —<br />
                  four days, four
                  <br />
                  moods, one light.
                </h2>
              </div>
              <div className="chapter-body">
                <p>
                  The lorem ipsum lookbook ran over four days in Lisbon in late
                  February 2025. The brief asked for a single continuous
                  lighting fingerprint across four very different locations —
                  Lorem ipsum dolor sit amet consectetur., a working ceramics
                  studio, a Lorem ipsum dolor sit., and the rooftop of the
                  brand's flagship store on Lorem ipsum dolor sit.
                </p>
                <blockquote className="pull-quote">
                  The brief did not say "soft." It said "honest." We brought a
                  4×6 silk and stopped using softboxes after day one.
                  <cite>— Kori David, lead</cite>
                </blockquote>
                <p>
                  We landed on a single 4×6 silk diffusing the existing
                  daylight, supplemented with a Profoto B10X for fill in the
                  colder afternoon sessions and a hand-held Aputure MC for the
                  indoor still frames. The colour reference was a slate-grey
                  card; the colour decision was a faintly cool fall-off in the
                  shadows. Thirty-six frames were chosen for the lookbook,
                  twelve of those for the wholesale presentation, four for the
                  campaign edit. Total time from shoot wrap to first delivered
                  selects: thirty-eight hours.
                </p>
                <a className="btn btn--ghost-on-tile btn--lg" href="#">
                  Read the full case study
                  <svg
                    className="arrow"
                    style={{ width: "16", height: "10" }}
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
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Archive list (compact) --> */}
        <section id="archive">
          <div className="container container--wide">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>Archive · 2023
                  — 25
                </span>
                <h2>The recent archive.</h2>
              </div>
              <p className="lede">
                Project listing only — selects shipped privately to each client.
                For older work, please contact the studio and we will send a
                passworded archive link.
              </p>
            </div>

            <ul
              className="split-fact-list"
              style={{ marginTop: "var(--space-6)" }}
            >
              <li>
                <b>No. 142</b>
                <span>
                  rolem · SS25 Lookbook · Editorial · kutus · Feb 2025
                </span>
              </li>
              <li>
                <b>No. 141</b>
                <span>
                  lorem Magazine · Issue 11 Cover · Editorial · Kilifi · Jan
                  2025
                </span>
              </li>
              <li>
                <b>No. 140</b>
                <span>
                  lorem &amp; Co · FW25 Catalogue · Campaign · kenya · Jan 2025
                </span>
              </li>
              <li>
                <b>No. 139</b>
                <span>
                  lorem ipsum · Furniture Catalogue · Still · kenya · Dec 2024
                </span>
              </li>
              <li>
                <b>No. 138</b>
                <span>
                  lorem ipsum · Holiday Edition · Product · Kilifi · Dec 2024
                </span>
              </li>
              <li>
                <b>No. 137</b>
                <span>
                  lorem ipsum· Season Posters · Editorial · kilifi · Nov 2024
                </span>
              </li>
              <li>
                <b>No. 136</b>
                <span>
                  lorem ipsum · Yearbook 2024 · Architecture · kilifi · Nov 2024
                </span>
              </li>
              <li>
                <b>No. 135</b>
                <span>
                  Lorem, ipsum. · Single Product · Campaign · Kilifi · Oct 2024
                </span>
              </li>
              <li>
                <b>No. 134</b>
                <span>
                  lorem &amp; Ember · Cookbook · Food · kenyakilifi · Sep 2024
                </span>
              </li>
              <li>
                <b>No. 133</b>
                <span>
                  Lorem, ipsum. · FW24 Press · Editorial · kenyakilifi · Sep
                  2024
                </span>
              </li>
              <li>
                <b>No. 132</b>
                <span>
                  lorem ipsum · Caliber 04 · Product · kenya · Aug 2024
                </span>
              </li>
              <li>
                <b>No. 131</b>
                <span>
                  Lorem ipsum · Studio Portrait · Portrait · kenyakilifi · Jul
                  2024
                </span>
              </li>
            </ul>

            <div
              className="center-row"
              style={{
                marginTop: "var(--space-7)",
                justifyContent: "center",
                gap: "var(--space-3)",
              }}
            >
              <button className="btn btn--ghost btn--sm">‹ Previous</button>
              <span
                className="mono"
                style={{ color: "var(--fg-mute)", padding: "0 var(--space-3)" }}
              >
                Page 01 / 12
              </span>
              <button className="btn btn--primary btn--sm">Next ›</button>
            </div>
          </div>
        </section>

        {/* <!-- Closing CTA --> */}
        <section className="closing-cta">
          <div className="container container--narrow">
            <span className="label" style={{ color: "rgba(10,10,12,0.6)" }}>
              Booking · 2026
            </span>
            <h2>
              See something
              <br />
              you would like
              <br />
              the studio to make next?
            </h2>
            <p className="lede">
              Tell us about the brief — moodboard, references, working dates,
              the audience. We will get back the same week with availability and
              a first read on scope.
            </p>
            <div className="cta-row">
              <a className="btn btn--dark btn--lg" href="contact">
                Start a project
                <svg
                  className="arrow"
                  style={{ width: "16", height: "10" }}
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
              <a className="btn btn--ghost btn--lg" href="services">
                See rates &amp; process
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
