import { ButtonGroup } from '@material-ui/core'
import Card from 'common/card'
import { Box } from 'common/global/box'
import { Button } from 'common/global/button'
import { HorizontalSpacing, VerticalSpacing } from 'common/global/spacing'
import DataTable, { TableProps } from 'react-data-table-component'
import {
  TableContainer,
  TableHeaderContainer,
  TableTitle,
} from './index.styles'

export interface CustomTableProps extends TableProps {
  data: any
  columns: any
  title?: string
  actions?: { icon?: any; label?: string; onClick: any }[]
}

const Table: React.FC<CustomTableProps> = ({
  data,
  columns,
  title,
  actions,
}) => {
  return (
    <Card>
      <TableHeaderContainer>
        {title ? <TableTitle as="h2">{title}</TableTitle> : <Box />}
        {actions && (
          <ButtonGroup>
            {actions.map(({ icon, label, onClick }, index) => {
              return (
                <Button key={index} onClick={onClick}>
                  {icon && (
                    <>
                      {icon}
                      <HorizontalSpacing spacing={1} />
                    </>
                  )}
                  {label}
                </Button>
              )
            })}
          </ButtonGroup>
        )}
      </TableHeaderContainer>
      <VerticalSpacing />
      <TableContainer>
        <DataTable
          columns={columns}
          data={data}
          responsive
          pagination
          paginationPerPage={7}
          paginationComponentOptions={{ noRowsPerPage: true }}
        />
      </TableContainer>
    </Card>
  )
}

export default Table
