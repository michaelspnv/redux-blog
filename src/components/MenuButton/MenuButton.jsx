import React, { useContext } from "react"
import { PopupContext } from "../../hoc/PopupProvider"
import classNames from "classnames/bind"
import styles from "./Menu-button.module.css"

function MenuButton({ btnRef, className, children }) {
  const cx = classNames.bind(styles)

  const classes = cx("button", className)

  const { toggleMenu } = useContext(PopupContext)

  return (
    <button onClick={toggleMenu} ref={btnRef} className={classes}>
      {children}
    </button>
  )
}

export { MenuButton }
