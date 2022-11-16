import React from "react"
import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { ErrorPage } from "./pages/ErrorPage"
import { publicRoutes, privateRoutes } from "./utils/routes"
import { AuthRequired } from "./hoc/AuthRequired"

import "normalize.css"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {publicRoutes.map((route) => {
          return (
            <Route key={route.id} path={route.link} element={route.component} />
          )
        })}
        {privateRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.link}
              element={<AuthRequired>{route.component}</AuthRequired>}
            />
          )
        })}
      </Route>
    </Routes>
  )
}

export { App }
