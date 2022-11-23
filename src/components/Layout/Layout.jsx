import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeUser } from "../../store/slices/userSlice"
import { useAuth } from "../../hooks/auth"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { MenuButton } from "../MenuButton"
import { Menu } from "../Menu"
import classNames from "classnames/bind"
import styles from "./Layout.module.css"

function Layout() {
  const cx = classNames.bind(styles)

  const userInfo = useSelector((state) => state.user.info)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const isAuth = useAuth()

  const [isOpen, setOpen] = useState(false)

  const signOut = () => {
    dispatch(removeUser())
    navigate("/sign-in")
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <MenuButton onClick={() => setOpen(!isOpen)} />
        {isOpen && <Menu setOpen={setOpen} />}
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
              className={cx(styles.link, styles["link--small"])}
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
