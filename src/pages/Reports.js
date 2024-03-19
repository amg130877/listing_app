import {
  Card,
  Stack,
  Container,
  Typography,
  CardContent,
  Grid,
  Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { reports } from '../_mock/user';
import VerticalLinearStepper from './Timeline';
import UploadReport from './UploadReport';
import AppWebsiteVisits from '../sections/@dashboard/app/AppWebsiteVisits';

export default function Reports() {
  const { month, year } = useParams()

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Showing Reports of {month}, {year}
          </Typography>
          <UploadReport month={month} year={year} />
        </Stack>

        <Grid container spacing={2}>
          {reports.map((row) => (
            <Grid key={row.name} item xs={12} md={6}>
              <Card elevation={2} sx={{
                height: 400
              }}>
                <CardContent>
                  <VerticalLinearStepper data={row} month={month} year={year} />
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid item xs={12}>
            <AppWebsiteVisits
              title={`Total Record of ${month}, ${year}`}
              subheader="Downloaded records trends of reports"
              chartLabels={reports.map(m => m.name)}
              chartData={[
                {
                  name: 'Total Records',
                  type: 'line',
                  fill: 'solid',
                  data: reports.map(m => m.totalRecords),
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
