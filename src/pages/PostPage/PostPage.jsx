import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from "./Post-page.module.css"

function PostPage() {
  const params = useParams()
  const id = +params.id

  const post = useSelector((state) => state.posts.find((el) => el.id === id))

  return (
    <React.Fragment>
      <h1>Post "{post.title}"</h1>
      <p className={styles.body}>{post.body}</p>
    </React.Fragment>
  )
}

export { PostPage }
