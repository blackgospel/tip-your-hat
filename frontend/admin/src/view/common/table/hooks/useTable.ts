import { useCallback, useEffect, useState } from 'react'
import { TableRow } from 'react-data-table-component'

interface UseTableProps {
  data?: any
  filterCallback?: any
  sortFieldValues?: { name: string; initial?: any }[]
}

const useTable = (props?: UseTableProps) => {
  const [filterText, setFilterText] = useState('')
  const [tableSelectedRows, setTableSelectedRow] = useState<TableRow[] | null>(
    null
  )
  const [filteredItems, setFilteredItems] = useState([])
  const [sortValues, setSortValues] = useState(
    props && props.sortFieldValues
      ? props.sortFieldValues && {
          ...props.sortFieldValues.reduce((res: any, item: any) => {
            res = { [item.name]: item.initial || '' }
            return res
          }, {}),
        }
      : null
  )

  const handleFilter = useCallback((event: any) => {
    if (props?.data) {
      setFilterText(event.target.value)
    }
  }, [])

  const handleFilterData = () => {
    if (!props?.data && !props?.filterCallback) return

    const filteredData = props.filterCallback(props.data, filterText)
    setFilteredItems(filteredData)
  }

  const handleSortValuesChange = (event: any) => {
    setSortValues({ ...sortValues, [event.target.name]: event.target.value })
  }

  const handleSortValuesDataChange = () => {
    if (!props?.data) return

    const filteredData = props.filterCallback(props.data, filterText)
    setFilteredItems(filteredData)
  }

  const handleSelectedRowsChange = (selected: {
    allSelected: boolean
    selectedCount: number
    selectedRows: TableRow[]
  }) => {
    setTableSelectedRow(selected.selectedRows)
  }

  const handleClear = () => setFilterText('')

  useEffect(() => {
    handleFilterData()
  }, [filterText])

  useEffect(() => {
    handleSortValuesDataChange()
  }, [sortValues])

  return {
    filteredItems: filterText === '' ? props?.data : filteredItems,
    sortValues,
    filterText,
    tableSelectedRows,
    handleFilter,
    handleClear,
    handleSelectedRowsChange,
    handleSortValuesChange,
  }
}

export default useTable
