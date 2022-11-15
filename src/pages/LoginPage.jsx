import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../store/slices/userSlice"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { InputField } from "../components/InputField"

function LoginPage() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch(createUser({ email, password, token: user.accessToken }))
        navigate("/posts")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <h1>Sign In</h1>
      <InputField
        id="email"
        labelText="E-Mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        id="password"
        labelText="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  )
}

export { LoginPage }
