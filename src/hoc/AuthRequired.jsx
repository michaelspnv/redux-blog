import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function AuthRequired({ children }) {
  const isAuthorized = useSelector((state) => state.user.info.token)

  return (
    <React.Fragment>
      {isAuthorized ? children : <Navigate to="/sign-in" />}
    </React.Fragment>
  )
}

export { AuthRequired }
