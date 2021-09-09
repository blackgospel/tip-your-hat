import { useGetAllUsersQuery } from 'generated/graphql'
import useModal from 'helpers/hooks/useModal'
import React from 'react'
import { BiPencil, BiPlus, BiStopCircle, BiSync, BiTrash } from 'react-icons/bi'
import { Button, Title } from 'view/common/global'
import { UserManagementContainer } from './index.styles'
import CreateUserModal from './modals/create-user-modal'
import DeleteUserModal from './modals/delete-user-modal'
import RestoreUserModal from './modals/restore-user-modal'
import RevokeUserTokenModal from './modals/revoke-user-token-modal'
import UpdateUserModal from './modals/update-user-modal'

const UserManagement: React.FC = () => {
  const [createShow, createModalData, showCreateModal, closeCreateModal] =
    useModal()
  const [updateShow, updateModalData, showUpdateModal, closeUpdateModal] =
    useModal()
  const [deleteShow, deleteModalData, showDeleteModal, closeDeleteModal] =
    useModal()
  const [restoreShow, restoreModalData, showRestoreModal, closeRestoreModal] =
    useModal()
  const [revokeShow, revokeModalData, showRevokeModal, closeRevokeModal] =
    useModal()
  const { data, loading, refetch } = useGetAllUsersQuery({
    fetchPolicy: 'network-only',
  })

  if (loading || !data) {
    return <UserManagementContainer>...loading</UserManagementContainer>
  }

  return (
    <UserManagementContainer>
      <Title>User Management</Title>
      <Button onClick={() => showCreateModal()}>
        <BiPlus />
        Create User
      </Button>
      <ul>
        {data.getAllUsers.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.email}
              <Button onClick={() => showUpdateModal(item)}>
                <BiPencil /> Update
              </Button>
              {!item.isDeleted ? (
                <Button onClick={() => showDeleteModal(item)}>
                  <BiTrash /> Delete
                </Button>
              ) : (
                <Button onClick={() => showRestoreModal(item)}>
                  <BiSync /> Restore
                </Button>
              )}
              <Button onClick={() => showRevokeModal(item)}>
                <BiStopCircle /> Revoke
              </Button>
            </li>
          )
        })}
      </ul>
      {createShow && (
        <CreateUserModal
          data={createModalData}
          close={closeCreateModal}
          refetch={refetch}
        />
      )}
      {updateShow && (
        <UpdateUserModal
          data={updateModalData}
          close={closeUpdateModal}
          refetch={refetch}
        />
      )}
      {deleteShow && (
        <DeleteUserModal
          data={deleteModalData}
          close={closeDeleteModal}
          refetch={refetch}
        />
      )}
      {restoreShow && (
        <RestoreUserModal
          data={restoreModalData}
          close={closeRestoreModal}
          refetch={refetch}
        />
      )}
      {revokeShow && (
        <RevokeUserTokenModal
          data={revokeModalData}
          close={closeRevokeModal}
          refetch={refetch}
        />
      )}
    </UserManagementContainer>
  )
}

export default UserManagement
