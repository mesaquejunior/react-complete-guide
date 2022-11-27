import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { Field, Label, Form, Button } from './FormComponents'

export const UserForm = ({addUser, users, setIsValid, setModalText}) => {
  const [userName, setUserName] = useState("")
  const [userAge, setUserAge] = useState("")

  const addNewUser = (event) => {
    event.preventDefault()
    setModalText('Please enter a valid name and age (non-empty values).')
    const userNameValid = userName.trim().length > 0 ? true : false
    const userAgeValid = userAge > 0 ? true : false

    if (userNameValid && !userAgeValid) {
      setModalText('Please enter a valid age (> 0).')
      setUserAge("")
    }
    if (userNameValid && userAgeValid) {
      const updatedUsers = [...users, {
        id: uuidv4(),
        name: userName,
        age: userAge
      }]
      addUser(updatedUsers)
      setUserName("")
      setUserAge("")
    }
    else {
      setIsValid(false)
      return
    }
  }

  const userNameHandler = (event) => {
    setUserName(event.target.value)
  }

  const userAgeHandler = (event) => {
    setUserAge(parseInt(event.target.value))
  }

  return (
    <Form onSubmit={addNewUser}>
        <Label>NAME:
            <Field value={userName} onChange={userNameHandler} type='text' name='name' />
        </Label>
        <Label>AGE (Years):
            <Field value={userAge} onChange={userAgeHandler} type='number' name='age' />
        </Label>
        <Button type='submit'>ADD USER</Button>
    </Form>
  )
}
