/* eslint-disable react/display-name */
import { CustomTableProps } from 'common/table'
import Tag from 'common/tags'
import dayjs from 'dayjs'
import { TipsDto } from 'generated/graphql'

const tipsAdminTableColumns = (): CustomTableProps['columns'] => {
  return [
    {
      name: 'Team 1',
      selector: (row: TipsDto) => row.matchInfo.team1,
    },
    {
      name: 'Team 2',
      selector: (row: TipsDto) => row.matchInfo.team2,
    },
    {
      name: 'Start Time',
      center: true,
      selector: (row: TipsDto) => dayjs(row.matchStart).format('HH:mm'),
    },
    {
      name: 'Sport',
      cell: (row: TipsDto) => {
        const sportsColors = {
          football: 'blue',
        }

        return (
          <Tag color={sportsColors[row.sport as keyof typeof sportsColors]}>
            {row.sport}
          </Tag>
        )
      },
    },
    {
      name: 'Prediction',
      selector: (row: TipsDto) =>
        `${row.predictionInfo.predictionName} | ${row.predictionInfo.predictionValue}`,
    },
  ]
}

export default tipsAdminTableColumns
