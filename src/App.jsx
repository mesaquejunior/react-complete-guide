import React, { useState } from 'react'
import GlobalStyle from './styles/global';

import { AllUsers } from './components/AllUsers/AllUsers';
import { UserForm } from './components/Form/UserForm';
import { Card } from './components/UI/Card';
import { Modal } from './components/UI/Modal';

const App = () => {
  const [users, setUsers] = useState([])
  const [isValid, setIsValid] = useState(true)
  const [modalText, setModalText] = useState("")

  const deleteUser = (event) => {    
    setUsers((previousUsers) => {
      const updatedUsers = previousUsers.filter(user => user.id !== event.target.id)
      return updatedUsers
    })
  }

  const userList = users.length > 0 && <AllUsers users={users} deleteUser={deleteUser}  />
  return (
    <>
      <GlobalStyle />
      <Modal isValid={isValid} setIsValid={setIsValid} modalText={modalText} />
      <Card>
        <UserForm addUser={setUsers} users={users} setIsValid={setIsValid} setModalText={setModalText} />
        {userList}
      </Card>
    </>
  )
}

export default App