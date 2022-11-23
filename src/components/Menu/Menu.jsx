import React from "react"
import { Link } from "react-router-dom"
import styles from "./Menu.module.css"

function Menu({ setOpen }) {
  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className={styles.body}>
      <div className={styles.links}>
        <Link to="/" onClick={closeMenu} className={styles.link}>
          Home
        </Link>
        <Link to="/posts" onClick={closeMenu} className={styles.link}>
          Articles
        </Link>
        <Link to="/about" onClick={closeMenu} className={styles.link}>
          About
        </Link>
      </div>
    </div>
  )
}

export { Menu }
