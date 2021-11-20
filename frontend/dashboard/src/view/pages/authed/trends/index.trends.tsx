import { Card, CardContent } from '@mui/material'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { Box, DataTable, H1, H6, VSpacing } from 'view/atomic'
import Page from 'view/templates/page/index.page'
import * as S from './index.styles'

const rows: GridRowsProp = [
  { id: 1, player: 'Talen Horton-Tucker', line: 15.5, hitRate: 100 },
  { id: 2, player: 'Tyrese Haliburton', line: 12.5, hitRate: 69.2 },
  { id: 3, player: 'Anthony Davies', line: 21.5, hitRate: 68.8 },
  { id: 4, player: 'Grayson Allen', line: 12.5, hitRate: 66.7 },
  { id: 5, player: 'Harrison Barnes', line: 9.5, hitRate: 66.7 },
  { id: 6, player: 'Chris Paul', line: 16.5, hitRate: 65.2 },
  { id: 7, player: 'Mikal Bridges', line: 14.5, hitRate: 64.3 },
  { id: 8, player: 'Sabonis', line: 12.5, hitRate: 64.3 },
  { id: 9, player: 'Mo Bamba', line: 10.5, hitRate: 60 },
]

const columns: GridColDef[] = [
  { field: 'player', headerName: 'Player', width: 150 },
  { field: 'line', headerName: 'Line', width: 150 },
  { field: 'hitRate', headerName: 'Hit Rate', width: 150 },
]

const Trends: React.FC = () => {
  return (
    <Page title="Dashboard | Trends">
      <S.TrendsContainer>
        <Box>
          <H1>Trends</H1>
        </Box>
        <VSpacing />
        <S.GridContainer>
          <S.GridItem>
            <Card>
              <CardContent>
                <H6>Points</H6>
                <VSpacing />
                <DataTable {...{ columns, rows, size: 'small' }} />
              </CardContent>
            </Card>
          </S.GridItem>
          <S.GridItem>
            <Card>
              <CardContent>
                <H6>Rebounds</H6>
                <VSpacing />
                <DataTable {...{ columns, rows, size: 'small' }} />
              </CardContent>
            </Card>
          </S.GridItem>
          <S.GridItem>
            <Card>
              <CardContent>
                <H6>Assists</H6>
                <VSpacing />
                <DataTable {...{ columns, rows, size: 'small' }} />
              </CardContent>
            </Card>
          </S.GridItem>
          <S.GridItem>
            <Card>
              <CardContent>
                <H6>3PM</H6>
                <VSpacing />
                <DataTable {...{ columns, rows, size: 'small' }} />
              </CardContent>
            </Card>
          </S.GridItem>
        </S.GridContainer>
      </S.TrendsContainer>
    </Page>
  )
}

export default Trends
