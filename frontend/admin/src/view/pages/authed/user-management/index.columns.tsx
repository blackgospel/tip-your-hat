/* eslint-disable react/display-name */
import Dropdown from 'common/dropdown'
import Slider from 'common/slider'
import { UserDto } from 'generated/graphql'

const userTableColumns = (
  menuActions: any,
  deleteModal: any,
  restoreModal: any
) => {
  return [
    {
      name: 'Email',
      selector: (row: UserDto) => row.email,
    },
    {
      name: 'Name',
      selector: (row: UserDto) => row.name,
    },
    {
      name: 'Active',
      selector: (row: UserDto) => (
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
      cell: (row: UserDto) => (
        <Dropdown name="Actions" list={menuActions(row)} />
      ),
    },
  ]
}

export default userTableColumns
