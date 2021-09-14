import FloatingActionButton from 'common/fab'
import DashboardTable from 'common/table'
import { useGetAllUsersQuery, UserDto } from 'generated/graphql'
import useModal from 'helpers/hooks/useModal'
import React from 'react'
import { BiPencil, BiPlus, BiSync } from 'react-icons/bi'
import { Spinner } from 'routes/index.styles'
import { Title } from 'view/common/global/title'
import userTableColumns from './index.columns'
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
  const { data, loading, refetch } = useGetAllUsersQuery()

  if (loading || !data) {
    return (
      <UserManagementContainer loading={loading || !data}>
        <Spinner />
      </UserManagementContainer>
    )
  }

  return (
    <UserManagementContainer>
      <Title>User Management</Title>
      <DashboardTable
        title="Users"
        columns={userTableColumns(
          (row: UserDto) => [
            {
              name: 'Update',
              icon: <BiPencil />,
              onClick: () => showUpdateModal(row),
            },
            {
              name: 'Revoke',
              icon: <BiSync />,
              onClick: () => showRevokeModal(row),
            },
          ],
          showDeleteModal,
          showRestoreModal
        )}
        data={data.getAllUsers}
      />
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
      <FloatingActionButton x="right" y="bottom" onClick={showCreateModal}>
        <BiPlus />
      </FloatingActionButton>
    </UserManagementContainer>
  )
}

export default UserManagement
