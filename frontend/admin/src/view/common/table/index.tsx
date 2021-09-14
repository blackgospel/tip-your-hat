import Card from 'common/card'
import DataTable, { TableProps } from 'react-data-table-component'
import { TableContainer, TableDescription, TableTitle } from './index.styles'

export interface CustomTableProps extends TableProps {
  data: any
  columns: any
  title?: string
  description?: string
}

const Table: React.FC<CustomTableProps> = ({
  data,
  columns,
  title,
  description,
}) => {
  return (
    <Card>
      {title && <TableTitle as="h3">{title}</TableTitle>}
      {description && <TableDescription>{description}</TableDescription>}
      <TableContainer>
        <DataTable columns={columns} data={data} responsive pagination />
      </TableContainer>
    </Card>
  )
}

export default Table
