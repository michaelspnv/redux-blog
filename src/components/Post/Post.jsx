import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deletePost } from "../../store/slices/postsSlice"
import styles from "./Post.module.css"

function Post({ id, title, description }) {
  const dispatch = useDispatch()

  const handleCreate = (id) => {
    dispatch(deletePost({ id }))
  }

  return (
    <div className={styles.post}>
      <div className={styles["post-header"]}>
        <h2 className={styles["post-title"]}>{title}</h2>
        <button
          className={styles["delete-button"]}
          onClick={() => handleCreate(id)}
        >
          x
        </button>
      </div>
      <div className={styles["post-content"]}>
        <p className={styles["post-description"]}>{description}</p>
        <Link to={`/posts/${id}`}>Read more</Link>
      </div>
    </div>
  )
}

export { Post }