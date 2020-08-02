import React, { useEffect } from "react"
import "../../style/main.scss"
import "typeface-dm-sans"

export const Layout = ({ children }) => {
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

  useEffect(() => {
    window.scrollTo(0, 0)
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

  return <div className="page-wrapper dark-mode">{children}</div>
}
