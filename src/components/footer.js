import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-thq-footer-elm">
        <div className="footer-thq-footer-wave-divider-elm">
          <svg
            viewBox="0 0 1200 120"
            aria-hidden="true"
            preserveAspectRatio="none"
            className="footer-thq-footer-wave-elm"
          >
            <path d="M0,60 C300,100 500,20 800,60 C1000,90 1100,40 1200,60 L1200,0 L0,0 Z"></path>
          </svg>
        </div>
        <div className="footer-thq-footer-content-elm">
          <div className="footer-thq-footer-inner-elm">
            <div className="footer-thq-footer-grid-elm">
              <div className="footer-thq-footer-brand-elm">
                <h2 className="footer-thq-section-title-elm section-title">
                  Once Upon a Workbench
                </h2>
                <p className="footer-thq-section-content-elm1 section-content">
                  Build a Good Story
                </p>
                <p className="footer-thq-section-content-elm2 section-content">
                  Custom playhouses and magical spaces crafted in Utah with
                  love, imagination, and quality craftsmanship.
                </p>
              </div>
              <div className="footer-links-group">
                <h3 className="footer-links-title">Quick Links</h3>
                <nav
                  aria-label="Footer navigation"
                  className="footer-links-list"
                >
                  <a href="#hero">
                    <div className="footer-link">
                      <span>Home</span>
                    </div>
                  </a>
                  <a href="#showcase">
                    <div className="footer-link">
                      <span>Our Work</span>
                    </div>
                  </a>
                  <a href="#process">
                    <div className="footer-link">
                      <span>Process</span>
                    </div>
                  </a>
                  <a href="#about">
                    <div className="footer-link">
                      <span>About Us</span>
                    </div>
                  </a>
                  <a href="#faq">
                    <div className="footer-link">
                      <span>FAQ</span>
                    </div>
                  </a>
                  <a href="#quote">
                    <div className="footer-link">
                      <span>Get a Quote</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-links-group">
                <h3 className="footer-links-title">Services</h3>
                <div className="footer-links-list">
                  <a href="#quote">
                    <div className="footer-link">
                      <span>Custom Playhouses</span>
                    </div>
                  </a>
                  <a href="#quote">
                    <div className="footer-link">
                      <span>Custom Playspaces</span>
                    </div>
                  </a>
                  <a href="#quote">
                    <div className="footer-link">
                      <span>
                        <span>Treehouse Builds</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a href="#quote">
                    <div className="footer-link">
                      <span>Design Consultation</span>
                    </div>
                  </a>
                  <a href="#quote">
                    <div className="footer-link">
                      <span>Plan Generation</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-thq-footer-contact-elm">
                <h3 className="footer-links-title">Get in Touch</h3>
                <div className="footer-thq-footer-contact-list-elm">
                  <div className="footer-contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                    <span>Utah, USA</span>
                  </div>
                  <div className="footer-contact-item">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      className="footer-icon15"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      >
                        <path
                          d="M11.064 10.414Q19.378 10 23.998 10t12.939.415a6 6 0 0 1 5.68 5.492q.381 4.55.381 8.017q0 3.508-.39 8.128a6 6 0 0 1-5.587 5.483Q29.91 38 23.998 38q-5.91 0-13.018-.465a6 6 0 0 1-5.587-5.48q-.395-4.655-.395-8.131q0-3.435.385-8.02a6 6 0 0 1 5.68-5.49Z"
                          strokeWidth="4"
                        ></path>
                        <path
                          d="M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z"
                          strokeWidth="3.429"
                        ></path>
                      </g>
                    </svg>
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <circle
                        r="1.44"
                        cx="22.406"
                        cy="9.594"
                        fill="currentColor"
                      ></circle>
                      <path
                        d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.16 6.16 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16 6.162c3.204 0 3.584.012 4.849.07a6.6 6.6 0 0 1 2.228.413a3.98 3.98 0 0 1 2.278 2.278a6.6 6.6 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.6 6.6 0 0 1-.413 2.228a3.98 3.98 0 0 1-2.278 2.278a6.6 6.6 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.6 6.6 0 0 1-2.228-.413a3.98 3.98 0 0 1-2.278-2.278a6.6 6.6 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.6 6.6 0 0 1 .413-2.228a3.98 3.98 0 0 1 2.278-2.278a6.6 6.6 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.8 8.8 0 0 0-2.912.558a6.14 6.14 0 0 0-3.51 3.51a8.8 8.8 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.8 8.8 0 0 0 .558 2.912a6.14 6.14 0 0 0 3.51 3.51a8.8 8.8 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.8 8.8 0 0 0 2.913-.558a6.14 6.14 0 0 0 3.51-3.51a8.8 8.8 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.8 8.8 0 0 0-.558-2.912a6.14 6.14 0 0 0-3.51-3.51a8.8 8.8 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <a href="tel:+1234567890">
                      <div className="footer-contact-link">
                        <span>@onceuponaworkbench</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <a href="mailto:hello@onceuponaworkbench.com?subject=">
                      <div className="footer-contact-link">
                        <span>donovan@onceuponaworkbench.com</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-thq-footer-divider-elm"></div>
            <div className="footer-thq-footer-bottom-elm">
              <p className="footer-thq-section-content-elm3 section-content">
                2025 Once Upon a Workbench. All rights reserved.
              </p>
              <div className="footer-thq-footer-legal-elm">
                <a href="#privacy" className="footer-link23">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span className="footer-thq-footer-legal-separator-elm">•</span>
                <a href="#terms" className="footer-link24">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.__INLINE__footer-social-link, .__INLINE__footer-link, .__INLINE__footer-contact-link {
  transition: none;
}
.__INLINE__footer-social-link:hover {
  transform: none;
}
.__INLINE__footer-link::before {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
