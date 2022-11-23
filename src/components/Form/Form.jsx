import React from "react"
import { useSelector } from "react-redux"
import classNames from "classnames/bind"
import styles from "./Form.module.css"

function Form({ children, title, buttonText, className, ...props }) {
  const { requestError, otherError } = useSelector((state) => state.user.errors)

  const cx = classNames.bind(styles)

  const classes = cx("form", className)

  return (
    <form className={classes} {...props}>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
      {requestError && <p>{requestError}</p>}
      {otherError && <p>{otherError}</p>}
    </form>
  )
}

export { Form }
