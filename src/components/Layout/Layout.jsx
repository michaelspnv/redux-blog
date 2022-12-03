import React from "react"
import { useAuth } from "../../hooks/auth"
import { Link, Outlet } from "react-router-dom"
import { Button } from "../Button"
import { PopupMenu } from "../PopupMenu"
import { NavMenu } from "../NavMenu"
import { UserAvatarPopup } from "../UserAvatarPopup"
import WriteIcon from "../../../public/svg/write-icon.svg"
import classNames from "classnames/bind"
import styles from "./Layout.module.css"

function Layout() {
  const cn = classNames.bind(styles)

  const isAuth = useAuth()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <PopupMenu>
          <NavMenu />
        </PopupMenu>
        <Link to="/" className={styles.title}>
          Blog
        </Link>
        {isAuth ? (
          <div className={styles.signedInRegs}>
            <PopupMenu>
              <UserAvatarPopup />
            </PopupMenu>
            <Button to="/posts/create" className={styles.writeButton}>
              <img src={WriteIcon} alt="write icon" width="15" />
              <p className={styles.writeButtonText}>Write</p>
            </Button>
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
