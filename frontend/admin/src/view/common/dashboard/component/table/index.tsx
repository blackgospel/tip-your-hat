import Card from 'common/card'
import DataTable from 'react-data-table-component'
import { DashboardTableProps } from '../../index.types'
import {
  DashboardTableContainer,
  DashboardTableDescription,
  DashboardTableTitle,
} from './index.styles'

const DashboardTable: React.FC<DashboardTableProps> = ({
  data,
  columns,
  title,
  description,
}) => {
  return (
    <Card>
      {title && <DashboardTableTitle as="h3">{title}</DashboardTableTitle>}
      {description && (
        <DashboardTableDescription>{description}</DashboardTableDescription>
      )}
      <DashboardTableContainer>
        <DataTable columns={columns} data={data} responsive pagination />
      </DashboardTableContainer>
    </Card>
  )
}

export default DashboardTable
