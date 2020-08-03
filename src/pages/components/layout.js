import React, { useEffect } from "react"
import "../../style/main.scss"
import "typeface-dm-sans"

const Layout = props => {
  const isElementXPercentInViewport = function (el, percentVisible) {
    let rect = el.getBoundingClientRect(),
      windowHeight = window.innerHeight || document.documentElement.clientHeight

    return !(
      Math.floor(
        100 - ((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100
      ) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
        percentVisible
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    var elementsToAnimate = document.getElementsByClassName("animate")
    const checkVisibleElements = () => {
      for (var i = 0; i < elementsToAnimate.length; i++) {
        if (isElementXPercentInViewport(elementsToAnimate[i], 5) === true) {
          elementsToAnimate[i].classList.add("is-visible")
        } else {
          elementsToAnimate[i].classList.remove("is-visible")
        }
      }
    }
    checkVisibleElements()
    window.addEventListener(
      "scroll",
      function (event) {
        checkVisibleElements()
      },
      false
    )
  })

  // const changeDarkMode = bool => {
  //   darkMode !== bool && updateDarkMode(bool)
  // }

  // return <div className={`page-wrapper ${dark && "dark-mode"}`}>{children}</div>

  return <div className={props.dark && "dark-mode"}>{props.children}</div>
}

export default Layout
