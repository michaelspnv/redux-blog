import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import { createUser, handleError, clearError } from "../store/slices/userSlice"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { Form } from "../components/Form"
import { InputField } from "../components/InputField"

function LoginPage() {
  useEffect(() => {
    dispatch(clearError())
  }, [])

  const authErrors = useSelector((state) => state.user.errors)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const validate = (values) => {
    const errors = {}

    if (!values.email) {
      errors.email = "Field is required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }

    if (!values.password) {
      errors.password = "Field is required"
    } else if (values.password.length < 6) {
      errors.password = "Password should not be less than 6 characters"
    }

    return errors
  }

  const formInfo = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit(values) {
      dispatch(clearError())

      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user
          dispatch(
            createUser({
              email: values.email,
              password: values.password,
              token: user.accessToken,
            })
          )
          navigate("/posts")
        })
        .catch((error) => {
          const errorCode = error.code
          dispatch(handleError({ errorCode }))
        })
    },
  })

  return (
    <Form title="Sign In" buttonText="Log In" onSubmit={formInfo.handleSubmit}>
      <InputField
        id="email"
        labelText="E-Mail"
        touched={formInfo.touched.email}
        errors={{
          authError: authErrors.emailError,
          validationError: formInfo.errors.email,
        }}
        onChange={formInfo.handleChange}
        value={formInfo.values.email}
      />
      <InputField
        id="password"
        labelText="Password"
        touched={formInfo.touched.password}
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
