import * as React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// sections
import { amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lime, pink, purple, red, teal, yellow } from '@mui/material/colors';
import {
  AppWebsiteVisits,
  AppWidgetSummary
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

const color = [
  pink,
  green,
  purple,
  blue,
  teal,
  lime,
  brown,
  indigo,
  amber,
  red,
  lightBlue,
  yellow,
  deepPurple,
  deepOrange,
  cyan,
  common,
  blueGrey,
  grey,
]


export default function DashboardAppPage() {
  const [year, setYear] = React.useState('2023');

  const months = [
    {
      month: 'Jan',
      reports: 5
    },
    {
      month: 'Feb',
      reports: 5
    },
    {
      month: 'Mar',
      reports: 5
    },
    {
      month: 'Apr',
      reports: 5
    },
    {
      month: 'May',
      reports: 5
    },
    {
      month: 'June',
      reports: 5
    },
    {
      month: 'July',
      reports: 5
    },
    {
      month: 'Aug',
      reports: 5
    },
    {
      month: 'Sep',
      reports: 5
    },
    {
      month: 'Oct',
      reports: 5
    },
    {
      month: 'Nov',
      reports: 5
    },
    {
      month: 'Dec',
      reports: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title> GDP Monthly Invoice Batch Job  </title>
      </Helmet>

      <Container maxWidth="xl">
        <Box sx={{ width: '100%', display: 'flex', align: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Showing for year {year}
          </Typography>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel>Year</InputLabel>
            <Select
              value={year}
              onChange={(v) => setYear(v.target.value)}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {Array(10).fill("").map((_v, index) => (
                <MenuItem value={2013 + index + 1}>
                  {2013 + index + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3}>

          {months.map((month, i) => (
            <Grid key={month} item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Files Downloaded " year={year} color={color[i]} total={month.reports} month={month.month} />
            </Grid>
          ))}

          <Grid item xs={12} sm={12} F>
            <AppWebsiteVisits
              title={`Report Trend of year ${year}`}
              subheader="Reports downloaded per month"
              chartLabels={[
                'Jan',
                'Feb',
                'March',
                'Apr',
                'May',
                'June',
                'July',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ]}
              chartData={[
                {
                  name: 'Reports Downloaded',
                  type: 'line',
                  fill: 'solid',
                  data: months.map(m => m.reports),
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
