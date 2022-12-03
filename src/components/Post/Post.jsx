import React from "react"
import { useDispatch } from "react-redux"
import { deletePost } from "../../store/slices/postsSlice"
import { UserAvatar } from "../UserAvatar"
import styles from "./Post.module.css"

function Post({ id, title, description }) {
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(deletePost({ id }))
  }

  return (
    <div className={styles.post}>
      <div className={styles.info}>
        <div className={styles.createdBy}>
          <UserAvatar />
          <div className={styles.userInfo}>
            <div className={styles.top}></div>
            <p className={styles.lower}></p>
          </div>
        </div>
      </div>
      <img src="" alt="" className={styles.image} />
    </div>
  )
}

export { Post }
