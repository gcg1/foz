import React from "react"
import { scroller } from "react-scroll"
import Gradient from "../../assets/gradient.mp4"
import Div100vh from "react-div-100vh"

const Masthead = () => {
  const handleClick = () => {
    scroller.scrollTo("scroll-marker", {
      duration: 500,
      offset: -200,
      delay: 50,
      smooth: true,
    })
  }

  return (
    <Div100vh>
      <section className="masthead">
        <div className="grid-parent animate animate--delayed">
          <div className="grid-item">
            <p className="headline headline--massive">
              Turning ideas into beautiful, useful websites and applications
            </p>
          </div>
        </div>

        <div className="grid-parent scroll-prompt-footer animate">
          <div className="grid-item">
            <div onClick={handleClick} className="scroll-prompt">
              <div className="CircleArrow">
                <svg>
                  <path
                    d="M28.9997 23V34.17L24.1197 29.29C23.7297 28.9 23.0897 28.9 22.6997 29.29C22.3097 29.68 22.3097 30.31 22.6997 30.7L29.2897 37.29C29.6797 37.68 30.3097 37.68 30.6997 37.29L37.2897 30.7C37.6797 30.31 37.6797 29.68 37.2897 29.29C36.8997 28.9 36.2697 28.9 35.8797 29.29L30.9997 34.17V23C30.9997 22.45 30.5497 22 29.9997 22C29.4497 22 28.9997 22.45 28.9997 23Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>Scroll down</span>
            </div>
          </div>
        </div>

        <video
          className="animate"
          src={Gradient}
          muted
          loop
          autoPlay
          playsInline
        ></video>
      </section>
    </Div100vh>
  )
}

export default Masthead
