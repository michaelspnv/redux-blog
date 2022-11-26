import React from "react"
import { PopupProvider } from "../../hoc/PopupProvider"
import styles from "./Popup-menu.module.css"

function PopupMenu({ children }) {
  return (
    <PopupProvider>
      <div className={styles.popupMenu}>{children}</div>
    </PopupProvider>
  )
}

export { PopupMenu }
