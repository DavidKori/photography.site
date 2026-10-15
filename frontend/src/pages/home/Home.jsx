import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const Home = () => {
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
                  <span className="dot" aria-hidden="true"></span>kpixels ·
                  KILIFI · cen . 2026
                </span>
                <h1 className="hero-headline">
                  We photograph
                  <br />
                  <span className="lime">the work,</span> not
                  <br />
                  the <span className="slash">/</span> brief.
                </h1>
                <p className="hero-sub">
                  KPixels PhotoShoot is a commercial photography studio. We make
                  pictures for brands that care about craft — fashion houses,
                  architecture practices, food magazines, and the kind of
                  catalogues people keep on a shelf instead of in a folder.
                </p>
                <div className="hero-cta-row">
                  <a className="btn btn--primary btn--lg" href="#/work">
                    See selected work
                    <svg
                      className="arrow"
                      style={{ width: "16px", height: "10px" }}
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
                  <a className="btn btn--ghost btn--lg" href="#/service#rates">
                    Services &amp; rates
                  </a>
                </div>
                <div className="hero-meta">
                  <span>
                    <strong>80+</strong> · campaigns delivered
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong>11</strong> · cover stories, 2024
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong>2</strong> · UGC awards
                  </span>
                </div>
              </div>
              <div className="hero-media reveal">
                <img
                  src={`${import.meta.env.BASE_URL}img/hero-portrait.jpg`}
                  alt=""
                />
                <div className="floating-tag ft-top">
                  <span className="pill">No. 037</span>
                  KORI · best moments
                </div>
                <div className="floating-tag ft-bottom">
                  35mm · canon · best lens · memories
                </div>
              </div>
            </div>

            {/* <!-- Stat strip --> */}
            <div className="stat-strip">
              <div className="stat-cell">
                <div className="stat-num">
                  <span className="lime">11</span>YR
                </div>
                <div className="stat-label">Studio established 2010</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">
                  40<span className="lime">+</span>
                </div>
                <div className="stat-label">Active brand clients</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">11K +</div>
                <div className="stat-label">Frames shot in 2025</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">
                  93<span className="lime">%</span>
                </div>
                <div className="stat-label">Repeat-client rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Selected work --> */}
        <section>
          <div className="container container--wide">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>Selected work
                  · 2024–25
                </span>
                <h2>
                  Twelve frames
                  <br />
                  from a working year.
                </h2>
              </div>
              <p className="lede">
                We chose these because each one taught us something new — a
                different light, a different brief, a different way to ask a
                subject to stand still. Click through to see how each project
                was made.
              </p>
            </div>

            <div className="work-grid">
              <a className="work-item work-item--xl reveal" href="#/work">
                <div className="wm">
                  <img
                    src={`${import.meta.env.BASE_URL}img/work-atrium.jpg`}
                    alt=""
                  />
                  <span className="wm-pill">Editorial</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14px", height: "14px" }}
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
                    <div className="wm-title">Kori · AGIS LOGBOOK</div>
                    <div className="wm-cap">36 frames · 4 days · Kilifi</div>
                  </div>
                  <div className="wm-cap">No. 172</div>
                </div>
              </a>

              <a className="work-item work-item--sm reveal" href="#/work">
                <div className="wm">
                  <img
                    src={`${import.meta.env.BASE_URL}img/work-still-1.jpg`}
                    alt=""
                  />
                  <span className="wm-pill">Still</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14px", height: "14px" }}
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
                    <div className="wm-title">marvin Kori</div>
                    <div className="wm-cap">Catalogue · 18 frames</div>
                  </div>
                  <div className="wm-cap">No. 129</div>
                </div>
              </a>

              <a className="work-item work-item--md reveal" href="#/work">
                <div className="wm">
                  <img
                    src={`${import.meta.env.BASE_URL}img/work-arch.jpg`}
                    alt=""
                  />
                  <span className="wm-pill">Architecture</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14px", height: "14px" }}
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
                    <div className="wm-title">David Kori</div>
                    <div className="wm-cap">Yearbook · 22 frames</div>
                  </div>
                  <div className="wm-cap">No. 136</div>
                </div>
              </a>

              <a className="work-item work-item--md reveal" href="#/work">
                <div className="wm">
                  <img
                    src={`${import.meta.env.BASE_URL}img/work-food.jpg`}
                    alt=""
                  />
                  <span className="wm-pill">Food</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14px", height: "14px" }}
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
                    <div className="wm-title">Cook &amp; Serve</div>
                    <div className="wm-cap">Cookbook · 90 frames</div>
                  </div>
                  <div className="wm-cap">No. 134</div>
                </div>
              </a>

              <a className="work-item work-item--sm reveal" href="#/work">
                <div className="wm">
                  <img
                    src={`${import.meta.env.BASE_URL}img/work-portrait-1.jpg`}
                    alt=""
                  />
                  <span className="wm-pill">Portrait</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14px", height: "14px" }}
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
                    <div className="wm-title">James Doe</div>
                    <div className="wm-cap">For business LOOk</div>
                  </div>
                  <div className="wm-cap">No. 131</div>
                </div>
              </a>

              <a className="work-item work-item--lg reveal" href="#/work">
                <div className="wm">
                  <img
                    src={`${import.meta.env.BASE_URL}img/work-product.jpg`}
                    alt=""
                  />
                  <span className="wm-pill">Product</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14px", height: "14px" }}
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
                    <div className="wm-title">Alfie &amp; Cipie</div>
                    <div className="wm-cap">FW24 product · 28 frames</div>
                  </div>
                  <div className="wm-cap">No. 129</div>
                </div>
              </a>

              <a className="work-item work-item--sm reveal" href="#/work">
                <div className="wm">
                  <img
                    src={`${import.meta.env.BASE_URL}img/work-still-2.jpg`}
                    alt=""
                  />
                  <span className="wm-pill">Still</span>
                  <span className="wm-arrow" aria-hidden="true">
                    <svg
                      style={{ width: "14px", height: "14px" }}
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
                    <div className="wm-title">Form lock</div>
                    <div className="wm-cap">fashionkit · 22 frames</div>
                  </div>
                  <div className="wm-cap">No. 127</div>
                </div>
              </a>
            </div>

            <div
              className="center-row"
              style={{ marginTop: "var(--space-7)", justifyContent: "center" }}
            >
              <a className="btn btn--ghost btn--lg" href="#/work">
                All projects · 142
                <svg
                  className="arrow"
                  style={{ width: "14px", height: "10px" }}
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
        </section>

        {/* <!-- Chapter / studio quote (reverse tile section) --> */}
        <section className="chapter tile-section">
          <div className="container container--narrow">
            <div className="chapter-grid">
              <div>
                <span className="label">Chapter 01</span>
                <h2>
                  A studio that
                  <br />
                  treats each
                  <br />
                  frame as work.
                </h2>
              </div>
              <div className="chapter-body">
                <p>
                  was founded in 2010 by two photographers and a producer who
                  had spent four years freelancing across lorem, ipsum and
                  Kilifi, and who were tired of how often a great brief was
                  reduced to whichever frame the agency could approve fastest.
                  The studio is small on purpose — a working group of seven
                  people, one in-house retoucher, two long-time producers, and a
                  roster of fifteen freelance assistants we trust enough to
                  recommend without flinching.
                </p>
                <blockquote className="pull-quote">
                  We work slower than the rate card. The output looks faster
                  than the rate card.
                  <cite>— Kori David, founder</cite>
                </blockquote>
                <p>
                  What that means in practice: we do fewer projects per quarter
                  than most studios our size, we keep the same producer on a
                  brand from the first call to the final delivery, and we ship a
                  colour-managed gallery the day after the shoot — not the week
                  after. Clients have called this "expensive when you book it,
                  cheap when you ship it." That is, on reflection, exactly the
                  right description.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Capability bento --> */}
        <section>
          <div className="container container--wide">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>What we do
                </span>
                <h2>
                  Five disciplines.
                  <br />
                  One pair of hands.
                </h2>
              </div>
              <p className="lede">
                Most studios pick a lane — fashion, food, architecture, product
                — and stay in it. We work across all five because the same
                lighting principles, the same colour discipline, and the same
                patience apply. The discipline is constant; the subject changes.
              </p>
            </div>

            <div className="cap-bento">
              <article className="cap-card cap-card--wide">
                <span className="cap-num">01 / Editorial</span>
                <h3>
                  Cover stories
                  <br />
                  and long-form features.
                </h3>
                <p>
                  Magazine covers, story-led portrait essays, location-driven
                  editorial. We light for the page, not the contact sheet —
                  every frame is chosen and lit knowing where it lands in the
                  layout.
                </p>
                <span className="label">For TYPE · Gentlewoman · Cereal</span>
              </article>

              <article className="cap-card cap-card--std">
                <span className="cap-num">02 / Campaign</span>
                <h3>Brand campaigns.</h3>
                <p>
                  SS, FW, holiday — the full seasonal cadence with one
                  continuous creative direction.
                </p>
              </article>

              <article className="cap-card cap-card--std">
                <span className="cap-num">03 / Stills</span>
                <h3>Catalogue stills.</h3>
                <p>
                  E-com pack-shots and elevated product still life, shipped
                  retouched within 48 hours of capture.
                </p>
              </article>

              <article className="cap-card cap-card--tall">
                <img
                  src={`${import.meta.env.BASE_URL}img/cap-tall.jpg`}
                  alt=""
                />
                <div className="invert cap-tall-meta ">
                  <span className="cap-num lime-text">04 / Architecture</span>
                  <h3>Spaces &amp; interiors.</h3>
                  <p className="invert">
                    Buildings, hotels, retail, residential. Natural light first;
                    supplement only when the architect would approve.
                  </p>
                </div>
              </article>

              <article className="cap-card cap-card--std">
                <span className="cap-num">05 / Documentary</span>
                <h3>Process documentary.</h3>
                <p>
                  Behind-the-bench, in-the-kiln, on-the-line — the
                  work-of-making, told honestly.
                </p>
              </article>

              <article className="cap-card cap-card--std">
                <span className="cap-num">06 / Motion</span>
                <h3>Stills + motion.</h3>
                <p>
                  A second crew, the same direction. We bring our own DP for
                  hybrid stills-and-motion days.
                </p>
              </article>

              <article className="cap-card cap-card--wide">
                <span className="cap-num">07 / Post</span>
                <h3>
                  In-house retouching
                  <br />
                  and colour management.
                </h3>
                <p>
                  An ICC-profiled grading pipeline, an in-house retoucher who
                  has been with the studio since 2017, and a printer
                  relationship in kilfi and Kilifi for any project that ends up
                  on paper.
                </p>
                <span className="label">
                  Calibrated to GRACoL · ISO 12647 · Adobe RGB
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* <!-- Split image chapter — process --> */}
        <section className="snug">
          <div className="container container--wide">
            <div className="split">
              <div className="split-text">
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>How we work
                </span>
                <h2>
                  From the first
                  <br />
                  call to the last frame.
                </h2>
                <p>
                  A first call is twenty minutes and free, always with the
                  producer who will run your project from start to finish. Most
                  projects ship in three to six weeks; the bottleneck is almost
                  never the shoot itself — it is the brief, the location lock,
                  and the talent confirmation. We keep that gauntlet short by
                  holding the kickoff in the first week, not the third.
                </p>
                <ul className="split-fact-list">
                  <li>
                    <b>Step 01</b>
                    <span>Discovery — brief, references, light maps, mood</span>
                  </li>
                  <li>
                    <b>Step 02</b>
                    <span>
                      Pre-production — location, casting, props, talent
                    </span>
                  </li>
                  <li>
                    <b>Step 03</b>
                    <span>Shoot — 1 to 4 days, depending on scope</span>
                  </li>
                  <li>
                    <b>Step 04</b>
                    <span>Selects — colour-managed within 24 hours</span>
                  </li>
                  <li>
                    <b>Step 05</b>
                    <span>Retouch — in-house, 5 to 10 business days</span>
                  </li>
                  <li>
                    <b>Step 06</b>
                    <span>Delivery — archive, contact sheets, print files</span>
                  </li>
                </ul>
                <a className="btn btn--ghost" href="#/service#rates">
                  See full process &amp; rates
                  <svg
                    className="arrow"
                    style={{ width: "14px", height: "10px" }}
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
              <div className="split-img">
                <img
                  src={`${import.meta.env.BASE_URL}img/process-shoot.jpg`}
                  alt=""
                />
                <span className="ft-corner">Day 02 · Kilifi</span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Split image chapter — studio --> */}
        <section className="snug" style={{ paddingTop: "0" }}>
          <div className="container container--wide">
            <div className="split split--reverse">
              <div className="split-text">
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>The studios
                </span>
                <h2>
                  Two rooms,
                  <br />
                  two grids, one team.
                </h2>
                <p>
                  Kilifi is a 280-square-metre daylight space in a converted
                  printers' building in Greenpoint — north light, 4.6-metre
                  ceilings, a working kitchen for food work, and a full grip
                  kit. kilfi is a smaller, 140-square-metre room in a Mitte
                  ground floor — south light, polished concrete, and a calmer
                  pace for editorial portraits and product. We move between the
                  two rooms based on brief and time of year.
                </p>
                <ul className="split-fact-list">
                  <li>
                    <b>Kilifi</b>
                    <span>
                      280 m² · 4.6 m ceilings · N-facing · daylight + tungsten
                    </span>
                  </li>
                  <li>
                    <b>kilfi</b>
                    <span>
                      140 m² · 3.2 m ceilings · S-facing · daylight only
                    </span>
                  </li>
                  <li>
                    <b>Grip</b>
                    <span>Profoto Pro-11 · B10X · Aputure 600D · 1200D</span>
                  </li>
                  <li>
                    <b>Capture</b>
                    <span>Phase One IQ4 · Sony A1 · Leica SL3 · Mamiya 7</span>
                  </li>
                  <li>
                    <b>Tether</b>
                    <span>Capture One Pro · 5K Eizo CG279X · ColorMunki</span>
                  </li>
                </ul>
                <a className="btn btn--ghost" href="#/studio">
                  Visit the studios
                  <svg
                    className="arrow"
                    style={{ width: "14px", height: "10px" }}
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
              <div className="split-img">
                <img
                  src={`${import.meta.env.BASE_URL}img/studio-room.jpg`}
                  alt=""
                />
                <span className="ft-corner">Greenpoint · NYC</span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Press strip --> */}
        <section className="compact">
          <div className="container container--wide">
            <div className="press-strip">
              <div>
                <span className="label">Published in</span>
                <p
                  className="mono"
                  style={{ marginTop: "6px", color: "var(--fg-soft)" }}
                >
                  Selected, 2023–25
                </p>
              </div>
              <div className="press-row" aria-label="Press list">
                <span>TYPE Quarterly</span>
                <span>The Gentlewoman</span>
                <span>Cereal Magazine</span>
                <span>Apartamento</span>
                <span>It's Nice That</span>
                <span>FT Weekend</span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Journal --> */}
        <section>
          <div className="container container--wide">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>Notes from the
                  floor
                </span>
                <h2>The journal.</h2>
              </div>
              <p className="lede">
                Short notes from the studio — sometimes a working note about a
                lighting setup, sometimes an opinion about colour management,
                sometimes a frame we kept thinking about long after delivery.
              </p>
            </div>

            <div className="journal-grid">
              <article className="journal-card">
                <div className="j-img">
                  <img
                    src={`${import.meta.env.BASE_URL}img/journal-light.jpg`}
                    alt=""
                  />
                </div>
                <div className="j-meta">
                  <span>Setup</span>
                  <span aria-hidden="true">·</span>
                  <span>04 Oct 2025</span>
                </div>
                <h3>Why we still use a 4×6 silk.</h3>
                <p>
                  Soft does not have to mean flat. A working note about why a
                  hard silk still beats a soft box for portrait work on a clear
                  day.
                </p>
                <a className="btn btn--ghost btn--sm" href="#">
                  Read note
                </a>
              </article>

              <article className="journal-card">
                <div className="j-img">
                  <img
                    src={`${import.meta.env.BASE_URL}img/journal-colour.jpg`}
                    alt=""
                  />
                </div>
                <div className="j-meta">
                  <span>Process</span>
                  <span aria-hidden="true">·</span>
                  <span>22 Sep 2025</span>
                </div>
                <h3>Calibration is the cheapest hire.</h3>
                <p>
                  An argument for hiring your printer before you hire your
                  retoucher. A note for studios scaling from solo into a working
                  team.
                </p>
                <a className="btn btn--ghost btn--sm" href="#">
                  Read note
                </a>
              </article>

              <article className="journal-card">
                <div className="j-img">
                  <img
                    src={`${import.meta.env.BASE_URL}img/journal-archive.jpg`}
                    alt=""
                  />
                </div>
                <div className="j-meta">
                  <span>Archive</span>
                  <span aria-hidden="true">·</span>
                  <span>09 Aug 2025</span>
                </div>
                <h3>The third frame is usually the one.</h3>
                <p>
                  From the Atrium SS25 shoot — why the third frame in any
                  sequence almost always reads the best, and what to do about
                  it.
                </p>
                <a className="btn btn--ghost btn--sm" href="#">
                  Read note
                </a>
              </article>
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
              Have a project
              <br />
              that deserves the
              <br />
              third frame?
            </h2>
            <p className="lede">
              We take on twenty to twenty-six campaigns a year, and we book
              three to five months ahead. If you have a brief brewing for Q2 or
              later, the right time to send a first note is now.
            </p>
            <div className="cta-row">
              <a className="btn btn--dark btn--lg" href="#/contact">
                Start a project
                <svg
                  className="arrow"
                  style={{ width: "16px", height: "10px" }}
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
              <a className="btn btn--ghost btn--lg" href="#/service#process">
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

export default Home;
