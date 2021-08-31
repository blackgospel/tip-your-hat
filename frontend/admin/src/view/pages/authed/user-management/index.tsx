import { useUsersQuery } from 'generated/graphql'
import useModal from 'helpers/hooks/useModal'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { Button, Title } from 'view/common/global'
import CreateUserModal from './modals/create-user-modal'
import { UserManagementContainer } from './index.styles'

const UserManagement: React.FC = () => {
  const [show, modalData, showModal, closeModal] = useModal()
  const { data } = useUsersQuery()

  if (!data) {
    return <UserManagementContainer>...loading</UserManagementContainer>
  }

  return (
    <UserManagementContainer>
      <Title>User Management</Title>
      <Button onClick={() => showModal()}>
        <BiPlus />
        Create User
      </Button>
      <ul>
        {data.users.map((item) => {
          return (
            <li key={item.id}>
              {item.email}
              {item.name}
            </li>
          )
        })}
      </ul>
      {show && <CreateUserModal data={modalData} close={closeModal} />}
    </UserManagementContainer>
  )
}

export default UserManagement
