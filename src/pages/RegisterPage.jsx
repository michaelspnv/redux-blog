import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleError } from "../store/slices/userSlice"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { Form } from "../components/Form"
import { InputField } from "../components/InputField"

function RegisterPage() {
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
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user
          navigate("/")
        })
        .catch((error) => {
          const errorCode = error.code
          dispatch(handleError({ errorCode }))
        })
    },
  })

  return (
    <Form
      title="Register"
      buttonText="Sign Up"
      onSubmit={formInfo.handleSubmit}
    >
      <InputField
        type="email"
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
          validationError: formInfo.errors.password,
        }}
        onChange={formInfo.handleChange}
        value={formInfo.values.password}
      />
    </Form>
  )
}

export { RegisterPage }
