/* eslint-disable react/display-name */
import Dropdown from 'common/dropdown'
import Slider from 'common/slider'
import { CustomTableProps } from 'common/table'
import { AUTH_ROLES_REVERSE } from 'constants/auth'
import dayjs from 'dayjs'
import { FullUserDto } from 'generated/graphql'

const userTableColumns = (
  menuActions: any,
  deleteModal: any,
  restoreModal: any
): CustomTableProps['columns'] => {
  return [
    {
      name: 'Email',
      selector: (row: FullUserDto) => row.email,
    },
    {
      name: 'Name',
      selector: (row: FullUserDto) => row.name,
    },
    {
      name: 'Created',
      selector: (row: FullUserDto) =>
        dayjs(row.createdAt).format('DD/MM/YYYY hh:mm'),
    },
    {
      name: 'Role',
      selector: (row: FullUserDto) =>
        AUTH_ROLES_REVERSE[row.role as keyof typeof AUTH_ROLES_REVERSE],
    },
    {
      name: 'Token Version',
      center: true,
      selector: (row: FullUserDto) => row.tokenVersion,
    },
    {
      name: 'Active',
      selector: (row: FullUserDto) => (
        <Slider
          value={!row.isDeleted}
          onChange={(checked: boolean) => {
            checked ? restoreModal(row) : deleteModal(row)
          }}
        />
      ),
    },
    {
      name: 'Actions',
      allowOverflow: true,
      button: true,
      cell: (row: FullUserDto) => (
        <Dropdown name="Actions" list={menuActions(row)} />
      ),
    },
  ]
}

export default userTableColumns
