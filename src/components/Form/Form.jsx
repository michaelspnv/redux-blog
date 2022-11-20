import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearError } from "../../store/slices/userSlice"
import classNames from "classnames/bind"
import styles from "./Form.module.css"

function Form({ children, title, buttonText, className, ...props }) {
  const { requestError, otherError } = useSelector((state) => state.user.errors)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(clearError())
  }

  const cx = classNames.bind(styles)

  const classes = cx("form", className)

  return (
    <form className={classes} {...props}>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <button type="submit" onClick={handleClick} className={styles.button}>
        {buttonText}
      </button>
      {requestError && <p>{requestError}</p>}
      {otherError && <p>{otherError}</p>}
    </form>
  )
}

export { Form }
