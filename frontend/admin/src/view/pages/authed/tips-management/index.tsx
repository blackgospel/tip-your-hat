import Select from 'common/form/component/select'
import { VerticalSpacing } from 'common/global/spacing'
import Spinner from 'common/global/spinner'
import DashboardTable from 'common/table'
import TableFilter from 'common/table/component/filter'
import useTable from 'common/table/hooks/useTable'
import { useGetAllAdminTipsQuery } from 'generated/graphql'
import orderBy from 'lodash.orderby'
import { Title } from 'view/common/global/title'
import tipsAdminTableColumns from './index.columns'
import { TipsManagementContainer } from './index.styles'

const TipsManagement: React.FC = () => {
  const { data, loading } = useGetAllAdminTipsQuery({
    fetchPolicy: 'network-only',
  })
  const {
    filteredItems,
    filterText,
    sortValues,
    handleSortValuesChange,
    handleFilter,
    handleClear,
    handleSelectedRowsChange,
  } = useTable({
    data: data?.getAllTips,
    filterCallback: (filterData: any, filterText: any) => {
      if (!filterData) return
      return filterData.filter((item: any) => {
        return (
          (item.matchInfo.team1 &&
            item.matchInfo.team1
              .toLowerCase()
              .includes(filterText.toLowerCase())) ||
          (item.matchInfo.team2 &&
            item.matchInfo.team2
              .toLowerCase()
              .includes(filterText.toLowerCase()))
        )
      })
    },
    sortFieldValues: [{ name: 'SFVSports', initial: 'any' }],
  })

  if (loading || !data || !filteredItems) {
    return (
      <TipsManagementContainer loading={loading || !data}>
        <Spinner />
      </TipsManagementContainer>
    )
  }

  return (
    <TipsManagementContainer>
      <Title>Tips Management</Title>
      <VerticalSpacing />
      <DashboardTable
        columns={tipsAdminTableColumns()}
        data={orderBy(filteredItems, ['matchStart'])}
        selectableRows
        onSelectedRowsChange={handleSelectedRowsChange}
        subHeader
        subHeaderComponent={
          <TableFilter
            onFilter={handleFilter}
            onClear={handleClear}
            filterText={filterText}
            sortFields={[
              () => (
                <Select
                  name="SFVSports"
                  label="Sport"
                  onChange={handleSortValuesChange}
                  value={sortValues.SFVSports}
                  options={[
                    { label: 'Any', value: 'any' },
                    { label: 'Football', value: 'football' },
                    { label: 'Basketball', value: 'basketball' },
                  ]}
                />
              ),
            ]}
          />
        }
      />
    </TipsManagementContainer>
  )
}

export default TipsManagement
