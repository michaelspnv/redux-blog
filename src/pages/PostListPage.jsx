import React from "react"
import { useSelector } from "react-redux"
import { Post } from "../components/Post"
import { Link } from "react-router-dom"

function PostListPage() {
  const posts = useSelector((state) => state.posts)

  return (
    <React.Fragment>
      {posts.length ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
          />
        ))
      ) : (
        <p>Постов нет.</p>
      )}
      <Link to="/posts/create">Create New Post</Link>
    </React.Fragment>
  )
}

export { PostListPage }
