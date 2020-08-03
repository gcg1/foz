import React from "react"
import { Link } from "gatsby"
import HoverArrow from "./hoverArrow"

const Header = () => {
  return (
    <header className="site-header transparent">
      <nav className="grid-parent">
        <ul className="grid-item nav-list">
          <li className="nav-list-logo">
            <Link to="/">
              <svg
                width="35"
                height="23"
                viewBox="0 0 35 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.27159 22.7313H0V0.268677H9.31278V3.65419H3.27159V9.79827H7.68564V13.2017H3.27159V22.7313Z"
                  fill="black"
                />
                <path
                  d="M16.8749 0C18.3174 0 19.5407 0.525441 20.5446 1.57632C21.5602 2.62721 22.0679 3.89304 22.0679 5.37383V17.6262C22.0679 19.1189 21.5602 20.3907 20.5446 21.4416C19.5291 22.4805 18.3059 23 16.8749 23C15.4324 23 14.2092 22.4746 13.2052 21.4237C12.2012 20.3728 11.6992 19.107 11.6992 17.6262V5.37383C11.6992 3.8811 12.207 2.61526 13.2225 1.57632C14.238 0.525441 15.4555 0 16.8749 0ZM18.6578 5.30218C18.6578 4.7648 18.4732 4.31101 18.1039 3.94081C17.7462 3.55867 17.3077 3.3676 16.7884 3.3676C16.2691 3.3676 15.8248 3.55867 15.4555 3.94081C15.0862 4.31101 14.9016 4.7648 14.9016 5.30218V17.5903C14.9016 18.1277 15.0862 18.5875 15.4555 18.9696C15.8248 19.3398 16.2691 19.5249 16.7884 19.5249C17.3077 19.5249 17.7462 19.3398 18.1039 18.9696C18.4732 18.5875 18.6578 18.1277 18.6578 17.5903V5.30218Z"
                  fill="black"
                />
                <path
                  d="M34.8051 0.286621V3.67214L28.7812 19.3637H34.8051V22.7313H25.25V19.3637L31.2912 3.67214H25.25V0.286621H34.8051Z"
                  fill="black"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/contact" className="button">
              Start a project
              <HoverArrow />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
