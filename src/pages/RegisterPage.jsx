import React from "react"
import { useSelector } from "react-redux"
import { useAuth } from "../hooks/auth"
import { Form } from "../components/Form"
import { InputField } from "../components/InputField"

function RegisterPage() {
  const authErrors = useSelector((state) => state.user.errors)

  const formInfo = useAuth({
    action: "register",
  })

  return (
    <Form title="Sign Up" buttonText="Sign Up" onSubmit={formInfo.handleSubmit}>
      <InputField
        id="email"
        placeholder="Email Address"
        errors={{
          authError: authErrors.emailError,
          validationError: formInfo.errors.email,
        }}
        onChange={formInfo.handleChange}
        value={formInfo.values.email}
      />
      <InputField
        id="password"
        placeholder="Password"
        errors={{
          validationError: formInfo.errors.password,
        }}
        onChange={formInfo.handleChange}
        value={formInfo.values.password}
      />
    </Form>
  )
}

export { RegisterPage }
