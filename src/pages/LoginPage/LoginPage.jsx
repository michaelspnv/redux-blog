import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearError } from "../../store/slices/userSlice"
import { useRegister } from "../../hooks/register"
import { Form } from "../../components/Form"
import { InputField } from "../../components/InputField"
import styles from "./Login-page.module.css"

function LoginPage() {
  const authErrors = useSelector((state) => state.user.errors)

  const formInfo = useRegister({
    action: "login",
  })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(clearError())

    formInfo.handleSubmit()
  }

  return (
    <Form title="Sign In" buttonText="Sign In" onSubmit={handleSubmit}>
      <InputField
        id="email"
        placeholder="Email Address"
        errors={{
          authError: authErrors.emailError,
          validationError: formInfo.errors.email,
        }}
        className={styles.emailInput}
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
        className={styles.passwordInput}
        onChange={formInfo.handleChange}
        value={formInfo.values.password}
      />
    </Form>
  )
}

export { LoginPage }
