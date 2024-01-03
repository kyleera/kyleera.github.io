import React from "react"
import moon from "../assets/moon.png"
import sun from "../assets/sun.png"

import "../styles/toggle.styl"

const Toggle = props => {
  const { theme, onChange } = props

  const handleToggle = () => {
    const newTheme = window.__theme === "dark" ? "light" : "dark"
    window.__setPreferredTheme(newTheme)
    onChange(newTheme)
  }

  return (
    <div className="react-toggle" onClick={handleToggle}>
      <div className="toggle-icons">
        <div className="toggle-l">
          <img
            src={moon}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div className="toggle-r">
          <img
            src={sun}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
      <div className={`switch ${ theme === "dark" ? "dark" : "light" }`}></div>
    </div>
  )
}

export default Toggle
