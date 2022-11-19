import React from "react"
import classNames from "classnames/bind"
import styles from "./Input-field.module.css"

function InputField({
  element = "input",
  id,
  labelText,
  touched,
  errors: { authError, validationError },
  className,
  ...props
}) {
  const cx = classNames.bind(styles)

  const classes = cx("input", className)

  return (
    <div className={styles.field}>
      {labelText && (
        <label className={styles.label} htmlFor={id}>
          {labelText}
        </label>
      )}
      {element === "input" ? (
        <input className={classes} name={id} id={id} {...props} />
      ) : (
        <textarea className={classes} name={id} id={id} {...props} />
      )}
      {validationError && touched && (
        <p className={styles.error}>{validationError}</p>
      )}
      {authError && <p className={styles.error}>{authError}</p>}
    </div>
  )
}

export { InputField }
