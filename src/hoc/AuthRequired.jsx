import React from "react"
import { useAuth } from "../hooks/auth"
import { Navigate } from "react-router-dom"

function AuthRequired({ children }) {
  const isAuth = useAuth()

  return (
    <React.Fragment>
      {isAuth ? children : <Navigate to="/sign-in" replace={true} />}
    </React.Fragment>
  )
}

export { AuthRequired }
