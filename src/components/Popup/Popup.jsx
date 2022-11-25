import React, { useContext } from "react"
import { PopupContext } from "../../hoc/PopupProvider"
import classNames from "classnames/bind"
import styles from "./Popup.module.css"

function Popup({ popupRef, className, children }) {
  const cx = classNames.bind(styles)

  const classes = cx("popup", className)

  const { isOpen } = useContext(PopupContext)

  return (
    <React.Fragment>
      {isOpen && (
        <div ref={popupRef} className={classes}>
          {children}
        </div>
      )}
    </React.Fragment>
  )
}

export { Popup }
