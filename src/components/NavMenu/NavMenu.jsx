import React, { useContext, useRef } from "react"
import { useOnClickOutside } from "../../hooks/onClickOutside"
import { Link } from "react-router-dom"
import { PopupContext } from "../../hoc/PopupProvider"
import { MenuButton } from "../MenuButton"
import { Popup } from "../Popup"
import styles from "./Nav-menu.module.css"

function NavMenu() {
  const { toggleMenu } = useContext(PopupContext)

  const btnRef = useRef()

  const popupRef = useRef()

  useOnClickOutside(popupRef, btnRef, () => {
    toggleMenu()
  })

  return (
    <React.Fragment>
      <MenuButton btnRef={btnRef}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </MenuButton>
      <Popup popupRef={popupRef} className={styles.navPopup}>
        <div className={styles.navPanel}>
          <Link to="/" onClick={toggleMenu} className={styles.navLink}>
            Home
          </Link>
          <Link to="/posts" onClick={toggleMenu} className={styles.navLink}>
            Articles
          </Link>
          <Link to="/about" onClick={toggleMenu} className={styles.navLink}>
            About
          </Link>
        </div>
      </Popup>
    </React.Fragment>
  )
}

export { NavMenu }
