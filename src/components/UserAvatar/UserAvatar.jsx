import React from "react"
import { useSelector } from "react-redux"
import styles from "./User-avatar.module.css"

function UserAvatar() {
  const currentUserEmail = useSelector((state) => state.user.info.email)

  const getUserAvatar = () => {
    if (false) {
      // logic of getting custom user image
      return customImage
    }
    if (currentUserEmail) {
      return currentUserEmail[0].toUpperCase()
    }
  }

  return <div className={styles.avatar}>{getUserAvatar()}</div>
}

export { UserAvatar }
