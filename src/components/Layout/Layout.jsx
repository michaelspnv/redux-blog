import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeUser } from "../../store/slices/userSlice"
import { useAuth } from "../../hooks/auth"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { PopupProvider } from "../../hoc/PopupProvider"
import { PopupMenu } from "../PopupMenu"
import { NavPanel } from "../NavPanel"
import classNames from "classnames/bind"
import styles from "./Layout.module.css"

function Layout() {
  const cn = classNames.bind(styles)

  const userInfo = useSelector((state) => state.user.info)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const isAuth = useAuth()

  const signOut = () => {
    dispatch(removeUser())
    navigate("/sign-in")
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <PopupProvider>
          <PopupMenu>
            <>
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
            </>
            <NavPanel />
          </PopupMenu>
        </PopupProvider>
        <Link to="/" className={styles.title}>
          Blog
        </Link>
        {isAuth ? (
          <div className={styles.signedInRegs}>
            <p>You signed in as {userInfo.email}.</p>
            <Button onClick={signOut}>Sign Out</Button>
          </div>
        ) : (
          <div className={styles.signedOutRegs}>
            <div className={styles.buttonWrapper}>
              <Button to="/sign-up">Sign Up</Button>
            </div>
            <Link
              to="/sign-in"
              className={cn(styles.authLink, styles["authLink--small"])}
            >
              Sign In
            </Link>
          </div>
        )}
        <div className={styles.separator} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export { Layout }
