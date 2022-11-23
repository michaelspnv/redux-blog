import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./Button.module.css"

function Button({ to, children, className, ...props }) {
  const cx = classNames.bind(styles)

  const classes = cx("button", className)

  return (
    <React.Fragment>
      {to ? (
        <Link to={to} className={classes}>
          {children}
        </Link>
      ) : (
        <button className={classes} {...props}>
          {children}
        </button>
      )}
    </React.Fragment>
  )
}

export { Button }
