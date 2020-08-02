import React from "react"
import { LinkButton } from "./linkButton"

export default function TextBlock(props) {
  return (
    <div className="container container--text-container">
      <div className="grid-parent animate">
        <div className="grid-item grid-item--middle">
          {props.title && <h5>{props.title}</h5>}
          <p>{props.text}</p>
          {props.buttonHref && (
            <LinkButton
              inline={true}
              href={props.buttonHref}
              text={props.buttonText}
            />
          )}
        </div>
      </div>
    </div>
  )
}
