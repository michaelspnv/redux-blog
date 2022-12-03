import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearError } from "../store/slices/userSlice"
import { useRegister } from "../hooks/register"
import { Form } from "../components/Form"
import { InputField } from "../components/InputField"

function RegisterPage() {
  const authErrors = useSelector((state) => state.user.errors)

  const formInfo = useRegister({
    action: "register",
  })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(clearError())

    formInfo.handleSubmit()
  }

  return (
    <Form title="Sign Up" buttonText="Sign Up" onSubmit={handleSubmit}>
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
