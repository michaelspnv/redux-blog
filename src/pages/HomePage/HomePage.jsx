import React from "react"
import { useSelector } from "react-redux"
import { SearchField } from "../../components/SearchField/SearchField"
import { Post } from "../../components/Post"
import styles from "./Home-page.module.css"

function HomePage() {
  const posts = useSelector((state) => state.posts)

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.searchControls}>
          <SearchField />
          <p className={styles.topics}>My Topics:</p>
        </div>
        <div className={styles.articles}>
          <p className={styles.title}>Articles</p>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}

export { HomePage }
