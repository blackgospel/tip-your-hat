/* eslint-disable react/display-name */
import Dropdown from 'common/dropdown'
import Slider from 'common/slider'
import { CustomTableProps } from 'common/table'
import Tag from 'common/tags'
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
      cell: (row: FullUserDto) => {
        const role =
          AUTH_ROLES_REVERSE[row.role as keyof typeof AUTH_ROLES_REVERSE]
        const roleColors = {
          0: 'blue',
          1: 'green',
          2: 'purple',
        }

        return (
          <Tag color={roleColors[row.role as keyof typeof roleColors]}>
            {role}
          </Tag>
        )
      },
    },
    {
      name: 'Token Version',
      center: true,
      selector: (row: FullUserDto) => row.tokenVersion,
    },
    {
      name: 'Credits',
      center: true,
      selector: (row: FullUserDto) => row.credits,
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
