import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createPost } from "../../store/slices/postsSlice"
import styles from "./Create-post-form.module.css"

function CreatePostForm() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  const getInitialId = () => {
    if (posts.length) {
      return posts[posts.length - 1].id + 1
    }
    return 1
  }

  const [id, setId] = useState(getInitialId)
  const [titleVal, setTitleVal] = useState("")
  const [bodyVal, setBodyVal] = useState("")
  const [description, setDescription] = useState("")

  const normalizeDesc = (message) => {
    if (message.length >= 320) {
      return message.slice(0, 320) + "..."
    }
    return message
  }

  const handleChangeTextArea = (e) => {
    setBodyVal(e.target.value)
    setDescription(normalizeDesc(bodyVal))
  }

  const handleCreate = (id, title, body) => {
    dispatch(createPost({ id, title, body, description }))
    setId(id + 1)
  }

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="title" className={styles.label}>
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitleVal(e.target.value)}
          value={titleVal}
          className={styles["input-title"]}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="body" className={styles.label}>
          Post Body
        </label>
        <textarea
          type="text"
          name="body"
          id="body"
          onChange={(e) => handleChangeTextArea(e)}
          value={bodyVal}
          className={styles["input-body"]}
        />
      </div>
      <Link
        to="/posts"
        type="submit"
        onClick={() => handleCreate(id, titleVal, bodyVal, description)}
        className={styles["create-button"]}
      >
        Create Post
      </Link>
    </form>
  )
}

export { CreatePostForm }
