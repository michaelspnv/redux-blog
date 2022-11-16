import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeUser } from "../../store/slices/userSlice"
import { Link, Outlet, useNavigate } from "react-router-dom"
import styles from "./Layout.module.css"

function Layout() {
  const userInfo = useSelector((state) => state.user.info)
  const isAuth = userInfo.token

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(removeUser())
    navigate("/sign-in")
  }

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
        {isAuth ? (
          <div className={styles["signed-in-regs"]}>
            <p>You signed in as {userInfo.email}.</p>
            <button className={styles["signout-btn"]} onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <div className={styles["signed-out-regs"]}>
            <Link className={styles["regs-link"]} to="/sign-up">
              Sign Up
            </Link>
            <Link className={styles["regs-link"]} to="/sign-in">
              Sign In
            </Link>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </React.Fragment>
  )
}

export { Layout }
