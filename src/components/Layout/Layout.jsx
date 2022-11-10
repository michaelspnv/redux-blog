import React from "react"
import { Link, Outlet } from "react-router-dom"
import styles from "./Layout.module.css"

function Layout() {
  return (
    <React.Fragment>
      <div className={styles["list-wrapper"]}>
        <ul className={styles.list}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/posts">
            Posts
          </Link>
          <Link className={styles.link} to="/about">
            About
          </Link>
        </ul>
        <div className={styles.regs}>
          <Link className={styles["regs-link"]} to="/sign-up">
            Sign Up
          </Link>
          <Link className={styles["regs-link"]} to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </React.Fragment>
  )
}

export { Layout }
