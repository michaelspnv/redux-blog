import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { InputField } from "../components/InputField"

function RegisterPage() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Register</h1>
      <InputField
        type="email"
        id="email"
        labelText="E-Mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        id="password"
        labelText="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export { RegisterPage }
