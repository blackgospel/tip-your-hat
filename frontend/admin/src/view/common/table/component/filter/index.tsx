import Input from 'common/form/component/input'
import { HorizontalSpacing } from 'common/global/spacing'
import {
  SearchFilterContainer,
  SortFieldsContainer,
  TableFilterContainer,
} from './index.styles'

interface TableFilterProps {
  onFilter: (event: any) => void
  onClear: (event: any) => void
  filterText: string
  placeholder?: string
  sortFields?: any[]
}

const TableFilter: React.FC<TableFilterProps> = ({
  onFilter,
  onClear,
  filterText,
  placeholder,
  sortFields,
}) => {
  console.log(onFilter, onClear, filterText)
  return (
    <TableFilterContainer>
      {sortFields && (
        <SortFieldsContainer>
          {sortFields.map((Component, index: number) => {
            return (
              <>
                <Component key={index} />
                <HorizontalSpacing spacing={1} />
              </>
            )
          })}
        </SortFieldsContainer>
      )}
      <HorizontalSpacing />
      <SearchFilterContainer>
        <Input
          name="filter"
          onChange={onFilter}
          value={filterText}
          label={placeholder || 'Filter search...'}
          type="search"
        />
      </SearchFilterContainer>
    </TableFilterContainer>
  )
}

export default TableFilter
