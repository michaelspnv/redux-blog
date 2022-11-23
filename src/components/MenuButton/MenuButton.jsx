import React from "react"
import styles from "./Menu-button.module.css"

function MenuButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.body}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  )
}

export { MenuButton }
