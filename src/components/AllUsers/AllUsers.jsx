import React from 'react'
import { ListUsers, UlUser } from './ListUsers'

export const AllUsers = ({users, deleteUser}) => {
    const content = users.map(user => <UlUser key={user.id} id={user.id} onClick={deleteUser}>{user.name} is {user.age} years old.</UlUser>)
    return (
    <ListUsers>
        {content}
    </ListUsers>
  )
}
