import React from "react"
import HoverArrow from "./hoverArrow"

const FormButton = props => {
  return (
    <button
      className={`button ${props.inline && "button--inline"}`}
      value="Send"
      type="submit"
    >
      {props.text}
      <HoverArrow />
    </button>
  )
}

export default FormButton
