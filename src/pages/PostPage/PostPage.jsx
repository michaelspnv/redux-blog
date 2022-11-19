import React from "react"
import { Navigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from "./Post-page.module.css"

function PostPage() {
  const params = useParams()
  const id = Number(params.id)

  const currentPost = useSelector((state) =>
    state.posts.find((el) => el.id === id)
  )

  const lastPost = useSelector((state) => state.posts[state.posts.length - 1])

  const isIdValid = lastPost && id <= lastPost.id

  return (
    <React.Fragment>
      {isIdValid ? (
        <div>
          <h1>Post "{currentPost.title}"</h1>
          <p className={styles.body}>{currentPost.body}</p>
        </div>
      ) : (
        <Navigate to="/posts" />
      )}
    </React.Fragment>
  )
}

export { PostPage }
