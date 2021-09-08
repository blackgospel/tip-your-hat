import { useGetAllUsersQuery } from 'generated/graphql'
import useModal from 'helpers/hooks/useModal'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { Button, Title } from 'view/common/global'
import { UserManagementContainer } from './index.styles'
import CreateUserModal from './modals/create-user-modal'

const UserManagement: React.FC = () => {
  const [show, modalData, showModal, closeModal] = useModal()
  const { data, loading, refetch } = useGetAllUsersQuery()

  if (loading || !data) {
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
        {data.getAllUsers.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.email}
              {/* <Button onClick={}>
                <BiPencil /> Update
              </Button> */}
            </li>
          )
        })}
      </ul>
      {show && (
        <CreateUserModal
          data={modalData}
          close={closeModal}
          refetch={refetch}
        />
      )}
    </UserManagementContainer>
  )
}

export default UserManagement
