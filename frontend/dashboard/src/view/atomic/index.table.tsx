import {
  DataGrid as MuiDataGrid,
  GridComponentProps as MuiGridComponentProps,
} from '@mui/x-data-grid'
import styled, { css } from 'styled-components/macro'

interface TableProps
  extends Pick<MuiGridComponentProps, 'columns' | 'rows' | 'loading'> {
  checkboxSelection?: boolean
}

interface TableContainerProps {
  size?: 'small' | 'regular' | 'large'
}

enum ContainerHeights {
  small = 300,
  regular = 500,
  large = 700,
}

const BaseStyles = css<TableProps>``

const DataTableContainer = styled.div<TableContainerProps>`
  width: 100%;
  height: ${({ size }) =>
    size ? ContainerHeights[size] : ContainerHeights.regular}px;
`

const DataTableWrapper = styled.div`
  display: flex;
  height: 100%;
`

const DataTableFlex = styled.div`
  flex-grow: 1;
`

const BaseTable = styled(
  ({
    size,
    checkboxSelection = true,
    ...otherProps
  }: TableProps & TableContainerProps) => (
    <DataTableContainer {...{ size }}>
      <DataTableWrapper>
        <DataTableFlex>
          <MuiDataGrid
            disableColumnFilter
            disableExtendRowFullWidth
            disableDensitySelector
            disableVirtualization
            disableColumnSelector
            disableColumnMenu
            pagination={undefined}
            pageSize={10}
            rowsPerPageOptions={[]}
            {...{ checkboxSelection }}
            {...otherProps}
          />
        </DataTableFlex>
      </DataTableWrapper>
    </DataTableContainer>
  )
)`
  ${BaseStyles};
`

export const DataTable = styled(BaseTable)``
