import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createPost } from "../../store/slices/postsSlice"
import { InputField } from "../../components/InputField"
import styles from "./Create-post-page.module.css"

function CreatePostPage() {
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
      <InputField
        id="title"
        labelText="Post Title"
        onChange={(e) => setTitleVal(e.target.value)}
        value={titleVal}
      />
      <InputField
        element="textarea"
        id="body"
        labelText="Post Body"
        onChange={(e) => handleChangeTextArea(e)}
        value={bodyVal}
        className={styles["input-body"]}
      />
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

export { CreatePostPage }
