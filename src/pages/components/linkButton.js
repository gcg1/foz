import React from "react"
import { HoverArrow } from "./hoverArrow"

export const LinkButton = props => {
  return (
    <a
      className={`button ${props.inline && "button--inline"}`}
      href={props.href}
      target={props.extenal && "_blank"}
      rel={props.extenal && "noopener noreferrer"}
    >
      {props.text}
      <HoverArrow />
    </a>
  )
}
