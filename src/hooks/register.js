import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createUser, handleError, clearError } from "../store/slices/userSlice"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../firebase"

function useRegister({
  action,
  navigateTo = "/",
  validateOnChange = false,
  validateOnBlur = false,
}) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearError())
  }, [])

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

  const handleUser = (actionType, values) => {
    if (actionType === "register") {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user
          dispatch(
            createUser({
              email: values.email,
              password: values.password,
              token: user.accessToken,
            })
          )
          navigate(navigateTo)
        })
        .catch((error) => {
          const errorCode = error.code
          dispatch(handleError({ errorCode }))
        })
    } else if (actionType === "login") {
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
          navigate(navigateTo)
        })
        .catch((error) => {
          const errorCode = error.code
          dispatch(handleError({ errorCode }))
        })
    }
  }

  const formInfo = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    validateOnChange,
    validateOnBlur,
    onSubmit: (values) => {
      handleUser(action, values)
    },
  })

  return formInfo
}

export { useRegister }
