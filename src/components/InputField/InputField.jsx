import React from "react"
import classNames from "classnames/bind"
import styles from "./Input-field.module.css"

function InputField({
  element = "input",
  id,
  errors: { authError, validationError } = false,
  className,
  ...props
}) {
  const cx = classNames.bind(styles)

  const classes = cx("input", className)

  return (
    <div className={styles.field}>
      {element === "input" ? (
        <input className={classes} name={id} id={id} {...props} />
      ) : (
        <textarea className={classes} name={id} id={id} {...props} />
      )}
      {validationError && <p className={styles.error}>{validationError}</p>}
      {authError && <p className={styles.error}>{authError}</p>}
    </div>
  )
}

export { InputField }
