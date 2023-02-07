import React, { useEffect, useReducer } from "react"

import Card from "../UI/Card/Card"
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"

const formReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        email: action.val,
        emailIsValid: action.val.includes("@"),
      }

    case "EMAIL_BLUR":
      return {
        ...state,
        email: state.email,
        emailIsValid: state.email.includes("@"),
      }
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: action.val,
        passwordIsValid: action.val.trim().length > 6,
      }
    case "PASSWORD_BLUR":
      return {
        ...state,
        password: state.password,
        emailIsValid: state.password.trim().length > 6,
      }
    case "FORM_IS_VALID":
      return {
        ...state,
        formIsValid: state.emailIsValid && state.passwordIsValid,
      }
    default:
      return {
        email: "",
        emailIsValid: undefined,
        password: "",
        passwordIsValid: undefined,
        formIsValid: undefined,
      }
  }
}

const formInitialState = {
  email: "",
  emailIsValid: undefined,
  password: "",
  passwordIsValid: undefined,
  formIsValid: undefined,
}

const Login = (props) => {
  const [formState, dispatchForm] = useReducer(formReducer, formInitialState)

  const { email, password } = formState

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatchForm({ type: "FORM_IS_VALID" })
    }, 500)

    return () => {
      clearTimeout(identifier)
    }
  }, [email, password])

  const emailChangeHandler = (event) => {
    dispatchForm({ type: "EMAIL_INPUT", val: event.target.value })
  }

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: "PASSWORD_INPUT", val: event.target.value })
  }

  const validateEmailHandler = () => {
    dispatchForm({ type: "EMAIL_BLUR" })
  }

  const validatePasswordHandler = () => {
    dispatchForm({ type: "PASSWORD_BLUR" })
  }
  const submitHandler = (event) => {
    event.preventDefault()
    props.onLogin(formState.email, formState.password)
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formState.formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
