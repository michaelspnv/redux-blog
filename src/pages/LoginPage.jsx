import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUser, handleError, clearError } from "../store/slices/userSlice"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { InputField } from "../components/InputField"

function LoginPage() {
  useEffect(() => {
    dispatch(clearError())
  }, [])

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const error = useSelector((state) => state.user.error)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    dispatch(clearError())

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch(createUser({ email, password, token: user.accessToken }))
        navigate("/posts")
      })
      .catch((error) => {
        const errorCode = error.code
        dispatch(handleError({ errorCode }))
      })
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <h1>Sign In</h1>
      <InputField
        id="email"
        labelText="E-Mail"
        errorText={error.emailError}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        id="password"
        labelText="Password"
        errorText={error.passwordError}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button type="submit">Log In</button>
        {error.requestError && <p>{error.requestError}</p>}
      </div>
    </form>
  )
}

export { LoginPage }
