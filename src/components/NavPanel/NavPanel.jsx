import React, { useContext } from "react"
import { PopupContext } from "../../hoc/PopupProvider"
import { Link } from "react-router-dom"
import styles from "./Nav-panel.module.css"

function NavPanel() {
  const { toggleMenu } = useContext(PopupContext)

  return (
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
  )
}

export { NavPanel }
