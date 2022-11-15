import { PostListPage } from "../pages/PostListPage"
import { CreatePostPage } from "../pages/CreatePostPage"
import { PostPage } from "../pages/PostPage"
import { AboutPage } from "../pages/AboutPage"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { ErrorPage } from "../pages/ErrorPage"

export const routes = [
  { id: 1, link: "posts", component: <PostListPage /> },
  { id: 2, link: "posts/create", component: <CreatePostPage /> },
  { id: 3, link: "posts/:id", component: <PostPage /> },
  { id: 4, link: "about", component: <AboutPage /> },
  { id: 6, link: "sign-up", component: <RegisterPage /> },
  { id: 7, link: "sign-in", component: <LoginPage /> },
  { id: 8, link: "*", component: <ErrorPage /> },
]
