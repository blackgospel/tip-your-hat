import CreateIcon from '@material-ui/icons/Create'
import SyncIcon from '@material-ui/icons/Sync'
import { VerticalSpacing } from 'common/global/spacing'
import Spinner from 'common/global/spinner'
import DashboardTable from 'common/table'
import { FullUserDto, useGetAllUsersQuery } from 'generated/graphql'
import useModal from 'helpers/hooks/useModal'
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
      <VerticalSpacing />
      <DashboardTable
        title="Users"
        columns={userTableColumns(
          (row: FullUserDto) => [
            {
              name: 'Update',
              icon: <CreateIcon />,
              onClick: () => showUpdateModal(row),
            },
            {
              name: 'Revoke',
              icon: <SyncIcon />,
              onClick: () => showRevokeModal(row),
            },
          ],
          showDeleteModal,
          showRestoreModal
        )}
        data={data.getAllUsers}
        actions={[
          {
            label: 'Create User',
            onClick: showCreateModal,
          },
        ]}
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
    </UserManagementContainer>
  )
}

export default UserManagement
