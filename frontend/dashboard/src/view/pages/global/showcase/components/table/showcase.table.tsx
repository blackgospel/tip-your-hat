import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { DataTable, H1, VSpacing } from 'view/atomic'
import { ShowcaseComponents } from '../../index.styles'
import { Container } from './index.styles'

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing', col3: 'hi' },
  { id: 4, col1: 'Hello', col2: 'World' },
  { id: 5, col1: 'DataGridPro', col2: 'is Awesome', col3: 'hi' },
  { id: 6, col1: 'Material-UI', col2: 'is Amazing' },
  { id: 7, col1: 'Hello', col2: 'World', col3: 'hi' },
  { id: 8, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 9, col1: 'Material-UI', col2: 'is Amazing', col3: 'hi' },
]

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  { field: 'col3', headerName: 'Column 3', width: 150 },
]

const ShowcaseTable: React.FC = () => {
  return (
    <Container>
      <H1>Table</H1>
      <VSpacing space="medium" />
      <ShowcaseComponents>
        <DataTable size="small" rows={rows} columns={columns} />
      </ShowcaseComponents>
    </Container>
  )
}

export default ShowcaseTable
