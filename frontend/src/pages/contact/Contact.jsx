import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const Contact = () => {
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
                  <span className="dot" aria-hidden="true"></span>Reply within
                  48 working hours
                </span>
                <h1 className="hero-headline">
                  Send a real
                  <br />
                  <span className="lime">first note,</span> get
                  <br />a real reply.
                </h1>
                <p className="hero-sub">
                  We do not staff an inbox bot. Every note that lands on the
                  studio inbox is read by lorem or lorem — the two producers —
                  and answered by one of them, signed by them, with a real
                  opinion attached. We aim for forty-eight working hours, and we
                  hit it.
                </p>
                <div className="hero-cta-row">
                  <a className="btn btn--primary btn--lg" href="#intake">
                    New project
                  </a>
                  <a className="btn btn--ghost btn--lg" href="#channels">
                    Other ways to reach us
                  </a>
                </div>
                <div className="hero-meta">
                  <span>
                    <strong>48hr</strong> · target reply
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong>2</strong> · producers reading
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong>11yr</strong> · in business
                  </span>
                </div>
              </div>
              <div className="hero-media">
                <img src="src/assets/img/contact-hero.jpg" alt="" />
                <div className="floating-tag ft-top">
                  <span className="pill">Inbox</span>
                  LORI · KENYA
                </div>
                <div className="floating-tag ft-bottom">
                  mutugidavid37@gmail.com
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Channels --> */}
        <section id="channels">
          <div className="container container--wide">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>Three channels
                </span>
                <h2>
                  Pick the right
                  <br />
                  door to come
                  <br />
                  through.
                </h2>
              </div>
              <p className="lede">
                Project enquiries land with the producers. Press and licensing
                requests land with Kori. Careers and hiring land with lorem. We
                keep these doors separate so that every note gets to the right
                pair of hands first.
              </p>
            </div>

            <div className="channel-grid">
              <article className="channel-card">
                <span className="label">01 / New project</span>
                <h3>For brand briefs.</h3>
                <p>
                  The right door for campaign, editorial, premium, and any
                  first-time enquiry from a brand or agency. Aim for one
                  paragraph: who, what, when, audience.
                </p>
                <a className="channel-line" href="mailto:hello@kori.studio">
                  mutugidavid37@gmail.com
                </a>
                <span className="mono" style={{ color: "var(--fg-mute)" }}>
                  Lorem, ipsum. · Lorem, ipsum. · 48hr reply target
                </span>
              </article>

              <article className="channel-card" id="press">
                <span className="label label--lime">
                  02 / Press &amp; licensing
                </span>
                <h3>For publications.</h3>
                <p>
                  Image licensing, interview requests, archive enquiries,
                  exhibition loans, and any editorial use of existing kori
                  imagery. Kori answers personally.
                </p>
                <a className="channel-line" href="mailto:press@kori.studio">
                  mutugidavid37@gmail.com
                </a>
                <span className="mono" style={{ color: "var(--fg-mute)" }}>
                  Lorem, ipsum. · 5-day reply target · press kit below
                </span>
              </article>

              <article className="channel-card" id="careers">
                <span className="label">03 / Careers</span>
                <h3>For job-seekers.</h3>
                <p>
                  Currently hiring a junior producer (Kenya) and a freelance
                  digital tech (Kilifi). Open applications welcome for studio
                  assistant roles. No PDFs &gt; 8&nbsp;MB please.
                </p>
                <a className="channel-line" href="mailto:careers@kori.studio">
                  mutugidavid37@gmail.com
                </a>
                <span className="mono" style={{ color: "var(--fg-mute)" }}>
                  Lorem, ipsum. · 7 — 14 day reply window
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* <!-- Intake form --> */}
        <section id="intake">
          <div className="container container--narrow">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>New project
                  intake
                </span>
                <h2>
                  Tell us the
                  <br />
                  shape of the
                  <br />
                  brief.
                </h2>
              </div>
              <p className="lede">
                We promise to read every note ourselves and reply within 48
                working hours. No long form — a paragraph is enough. If you
                would rather send a deck, the studio inbox accepts attachments
                up to 25&nbsp;MB.
              </p>
            </div>

            <form
              className="form-card"
              id="form"
              onSubmit={(event) => {
                event.preventDefault();
                event.target.querySelector("button[type=submit]").textContent =
                  "Thank you — we will be in touch.";
              }}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="f-name">Your name</label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Kori David"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="f-brand">Brand / studio</label>
                  <input
                    id="f-brand"
                    name="brand"
                    type="text"
                    placeholder="KPixels · Kori"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="f-email">Email</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    required
                    placeholder="lorem @ ipsum.com"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="f-role">Your role</label>
                  <input
                    id="f-role"
                    name="role"
                    type="text"
                    placeholder="Creative director · brand-side"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="f-tier">Probable tier</label>
                  <select
                    id="f-tier"
                    name="tier"
                    defaultValue="Campaign — seasonal / multi-day"
                  >
                    <option>Editorial — single feature / portrait</option>
                    <option>Campaign — seasonal / multi-day</option>
                    <option>Premuim — long-form, full cycle</option>
                    <option>Not sure — please advise</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="f-dates">Working dates</label>
                  <input
                    id="f-dates"
                    name="dates"
                    type="text"
                    placeholder="Mid-March, 4 days, Lisbon"
                  />
                </div>
              </div>

              <div className="form-row form-row--full">
                <div className="form-field">
                  <label htmlFor="f-where">Where the work lands</label>
                  <input
                    id="f-where"
                    name="where"
                    type="text"
                    placeholder="Print catalogue · digital campaign · brand-owned channels"
                  />
                </div>
              </div>

              <div className="form-row form-row--full">
                <div className="form-field">
                  <label htmlFor="f-brief">The brief — one paragraph</label>
                  <textarea
                    id="f-brief"
                    name="brief"
                    required
                    placeholder="What is the project, what does the brand want, 
                    what does the audience need? Bullet points fine,
                     no need for a deck on the first pass."
                  ></textarea>
                </div>
              </div>

              <div className="form-row form-row--full">
                <div className="form-field">
                  <label htmlFor="f-refs">Reference link (optional)</label>
                  <input
                    id="f-refs"
                    name="refs"
                    type="url"
                    placeholder="https://… link / past campaign"
                  />
                </div>
              </div>

              <div className="form-actions">
                <small>
                  By submitting, you agree we will reply to the email above. No
                  newsletter signup. No third-party sharing.
                </small>
                <button type="submit" className="btn btn--primary btn--lg">
                  Send first note
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
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* <!-- Studio locations split --> */}
        <section className="snug tile-section">
          <div className="container container--wide">
            <div className="split">
              <div className="split-text">
                <span className="eyebrow eyebrow--on-tile">
                  <span className="dot" aria-hidden="true"></span>Two rooms
                </span>
                <h2>
                  Visit either
                  <br />
                  studio by booking.
                </h2>
                <p>
                  Both rooms are working studios — they are not gallery spaces
                  and we do not run open hours. If you would like to visit,
                  write to the producer at{" "}
                  <strong>mutugidavid37@gmail.com</strong> with a working window
                  and a reason; we will say yes more often than no, and we will
                  put the kettle on.
                </p>
                <ul className="split-fact-list">
                  <li>
                    <b>Kilifi</b>
                    <span>
                      137 lorem Street, Kilifi KEN 11222 · +254 115 68 5773
                    </span>
                  </li>
                  <li>
                    <b>Kenya</b>
                    <span>
                      Lorem, ipsum. 162, 10119 Kenya · +254 115 68 5773
                    </span>
                  </li>
                  <li>
                    <b>Studio hours</b>
                    <span>Mon–Fri 0900–1900 EAT · 0900–1800 EST</span>
                  </li>
                  <li>
                    <b>Closed</b>
                    <span>Dec 22 — Jan 06 every year · public holidays</span>
                  </li>
                </ul>
                <a className="btn btn--ghost-on-tile btn--lg" href="#intake">
                  Send a first note
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
              </div>
              <div className="split-img">
                <img src="src/assets/img/contact-room.jpg" alt="" />
                <span className="ft-corner">Kilifi studio</span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Press kit --> */}
        <section>
          <div className="container container--wide">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true"></span>Press kit
                </span>
                <h2>
                  Everything a<br />
                  journalist needs
                  <br />
                  in one folder.
                </h2>
              </div>
              <p className="lede">
                High-resolution founder portraits, studio shots, a 600-word
                boilerplate, and a usage agreement. Drop a note to{" "}
                <strong>press@kori.studio</strong> if you would like a
                passworded archive link to past campaigns.
              </p>
            </div>

            <div className="channel-grid">
              <article className="channel-card">
                <span className="label">Press pack · ZIP</span>
                <h3>Studio assets.</h3>
                <p>
                  kori logo (SVG, PNG), founder portraits, two studio interiors,
                  the studio one-liner and a 600-word boilerplate. Updated
                  quarterly. 18&nbsp;MB.
                </p>
                <a className="channel-line" href="#">
                  Download press pack ↓
                </a>
                <span className="mono" style={{ color: "var(--fg-mute)" }}>
                  Last updated · 02 Feb 2026
                </span>
              </article>
              <article className="channel-card">
                <span className="label">Bio · founders</span>
                <h3>Founder bios.</h3>
                <p>
                  Short and long-form bios for lorem, lorem and lorem, each in
                  English. Quotation rights granted on request — write to press
                  first.
                </p>
                <a className="channel-line" href="#">
                  Read founder bios →
                </a>
                <span className="mono" style={{ color: "var(--fg-mute)" }}>
                  EN · SWA· last reviewed Jan 2026
                </span>
              </article>
              <article className="channel-card">
                <span className="label">Image licensing</span>
                <h3>Editorial use.</h3>
                <p>
                  Use of an existing kori image in editorial context. Free for
                  one-time use with byline; request approval, attach the
                  placement, and we will reply within 5 working days.
                </p>
                <a
                  className="channel-line"
                  href="mailto:mutugidavid37@gmail,com"
                >
                  lorem @ kori.studio
                </a>
                <span className="mono" style={{ color: "var(--fg-mute)" }}>
                  lorem ipsum · always-on, no agency
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* <!-- Closing --> */}
        <section className="closing-cta">
          <div className="container container--narrow">
            <span className="label" style={{ color: "rgba(10,10,12,0.6)" }}>
              Final note
            </span>
            <h2>
              Send a real note.
              <br />
              We will send a<br />
              real one back.
            </h2>
            <p className="lede">
              We do not use intake forms to filter people out. We use them to
              read the brief faster. If a form is the wrong shape for your
              project, write directly — every channel above is a real inbox
              watched by a real human at the studio.
            </p>
            <div className="cta-row">
              <a className="btn btn--dark btn--lg" href="#intake">
                Open the form
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
              <a
                className="btn btn--ghost btn--lg"
                href="mailto:mutugidavid37@gmail.com"
              >
                Or write directly
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
