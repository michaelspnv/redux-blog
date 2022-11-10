import React from "react"
import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { routes } from "./utils/routes"

import "normalize.css"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {routes.map((route) => {
          return (
            <Route key={route.id} path={route.link} element={route.component} />
          )
        })}
      </Route>
    </Routes>
  )
}

export { App }
