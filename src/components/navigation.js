import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.__INLINE__navigation, .__INLINE__navigation-logo, .__INLINE__navigation-logo-icon, .__INLINE__navigation-menu-link, .__INLINE__navigation-menu-link::after, .__INLINE__navigation-toggle, .__INLINE__navigation-mobile-close, .__INLINE__navigation-mobile-menu-link, .__INLINE__navigation-mobile-menu-link::before, .__INLINE__navigation-mobile-decoration, .__INLINE__navigation-mobile-overlay {
  transition: none;
  animation: none;
}
.__INLINE__navigation-mobile-menu-item {
  opacity: 1;
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation-thq-navigation-elm">
        <div className="navigation-thq-navigation-container-elm">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navigation-image"
          />
          <a href="#" className="navigation-link10">
            <div
              aria-label="Once Upon a Workbench - Homepage"
              className="navigation-logo"
            >
              <span className="navigation-thq-navigation-logo-text-elm">
                Once Upon a Workbench
              </span>
            </div>
          </a>
          <ul className="navigation-thq-navigation-menu-elm">
            <li className="navigation-menu-item">
              <a href="#showcase">
                <div className="navigation-menu-link">
                  <span>Projects</span>
                </div>
              </a>
            </li>
            <li className="navigation-menu-item">
              <a href="#process">
                <div className="navigation-menu-link">
                  <span>Process</span>
                </div>
              </a>
            </li>
            <li className="navigation-menu-item">
              <a href="#about">
                <div className="navigation-menu-link">
                  <span>About</span>
                </div>
              </a>
            </li>
            <li className="navigation-menu-item">
              <a href="#faq">
                <div className="navigation-menu-link">
                  <span>FAQ</span>
                </div>
              </a>
            </li>
            <li id="quote" className="navigation-menu-item">
              <a href="#quote">
                <div className="navigation-thq-navigation-menu-link-elm5 btn-primary navigation-menu-link btn">
                  <span>Get a Quote</span>
                </div>
              </a>
            </li>
          </ul>
          <button
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="navOverlay"
          className="navigation-thq-navigation-mobile-overlay-elm"
        >
          <div className="navigation-thq-navigation-mobile-header-elm">
            <a href="#" className="navigation-link16">
              <div
                aria-label="Once Upon a Workbench - Homepage"
                className="navigation-thq-navigation-mobile-logo-elm"
              >
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="navigation-thq-navigation-mobile-logo-icon-elm"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path>
                    <path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                  </g>
                </svg>
                <span className="navigation-thq-navigation-mobile-logo-text-elm">
                  Once Upon a Workbench
                </span>
              </div>
            </a>
            <button
              id="navClose"
              aria-label="Close navigation menu"
              className="navigation-mobile-close"
            >
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="navigation-thq-navigation-mobile-menu-elm">
            <li className="navigation-mobile-menu-item">
              <a href="#showcase">
                <div className="navigation-mobile-menu-link">
                  <span>Projects</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-menu-item">
              <a href="#process">
                <div className="navigation-mobile-menu-link">
                  <span>Process</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-menu-item">
              <a href="#about">
                <div className="navigation-mobile-menu-link">
                  <span>About</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-menu-item">
              <a href="#faq">
                <div className="navigation-mobile-menu-link">
                  <span>FAQ</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-menu-item">
              <a href="#quote">
                <div className="navigation-mobile-menu-link btn-primary btn">
                  <span>Get a Quote</span>
                </div>
              </a>
            </li>
          </ul>
          <div
            aria-hidden="true"
            className="navigation-thq-navigation-mobile-decoration-elm"
          ></div>
        </div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigationSlideIn {from {opacity: 0;
transform: translateY(-20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes navigationItemSlide {to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-mobile-menu">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const navOverlay = document.getElementById("navOverlay")
  const navLinks = document.querySelectorAll(".__INLINE__navigation-mobile-menu-link")

  function openMobileNav() {
    navOverlay.classList.add("navigation-mobile-active")
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeMobileNav() {
    navOverlay.classList.remove("navigation-mobile-active")
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMobileNav)
  navClose.addEventListener("click", closeMobileNav)

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileNav()
    })
  })

  navOverlay.addEventListener("click", (e) => {
    if (e.target === navOverlay) {
      closeMobileNav()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navOverlay.classList.contains("navigation-mobile-active")) {
      closeMobileNav()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/website%20logo-200h.png',
}

Navigation.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Navigation
