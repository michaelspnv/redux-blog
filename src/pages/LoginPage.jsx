import React from "react"
import { useSelector } from "react-redux"
import { useAuth } from "../hooks/auth"
import { Form } from "../components/Form"
import { InputField } from "../components/InputField"

function LoginPage() {
  const authErrors = useSelector((state) => state.user.errors)

  const formInfo = useAuth({
    action: "login",
    navigateTo: "/posts",
  })

  return (
    <Form title="Sign In" buttonText="Sign In" onSubmit={formInfo.handleSubmit}>
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
          authError: authErrors.passwordError,
          validationError: formInfo.errors.password,
        }}
        onChange={formInfo.handleChange}
        value={formInfo.values.password}
      />
    </Form>
  )
}

export { LoginPage }
