/* eslint-disable react/display-name */
import Dropdown from 'common/dropdown'
import { UserDto } from 'generated/graphql'

const userTableColumns = (actions: any) => {
  return [
    {
      name: 'Id',
      selector: (row: UserDto) => row.id,
    },
    {
      name: 'Email',
      selector: (row: UserDto) => row.email,
    },
    {
      name: 'Name',
      selector: (row: UserDto) => row.name,
    },
    {
      name: 'isDeleted',
      selector: (row: UserDto) => (row.isDeleted ? 'true' : 'false'),
    },
    {
      name: 'Actions',
      allowOverflow: true,
      button: true,
      cell: (row: UserDto) => <Dropdown name="Actions" list={actions(row)} />,
    },
  ]
}

export default userTableColumns
