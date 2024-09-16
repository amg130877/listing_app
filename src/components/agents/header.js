import { Box, Button, Card, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { PieChart } from '@mui/x-charts'
import { useNavigate } from 'react-router-dom';
import Iconify from '../iconify'
import { AppWidgetSummary } from '../../sections/@dashboard/app';


function AgentCard({ title, value, chartData, maxWidth, maxHeight, sx, other }) {


  // return (
  //   <Container>
  //     {/* Grid container */}
  //     <Grid container spacing={2}>
  //       {/* Grid item 1 */}
  //       <Grid item xs={12} sm={6} md={4} lg={3}>
  //         <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2, backgroundColor: 'white', borderRadius: '8px' }}>
  //           <Box>
  //             Item 1<br />

  //           </Box>
  //         </Paper>
  //       </Grid>

  //       {/* Grid item 2 */}
  //       <Grid item xs={12} sm={6} md={4} lg={3}>
  //         <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2, backgroundColor: 'white', borderRadius: '8px' }}>
  //           <Box>Item 2</Box>
  //         </Paper>
  //       </Grid>

  //       {/* Grid item 3 */}
  //       <Grid item xs={12} sm={6} md={4} lg={3}>
  //         <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2, backgroundColor: 'white', borderRadius: '8px' }}>
  //           <Box>Item 3</Box>
  //         </Paper>
  //       </Grid>

  //       {/* Grid item 4 */}
  //       <Grid item xs={12} sm={6} md={4} lg={3}>
  //         <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2, backgroundColor: 'white', borderRadius: '8px' }}>
  //           <Box>Item 4</Box>
  //         </Paper>
  //       </Grid>
  //     </Grid>
  //   </Container>

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'row', height: '100%', padding: 2, backgroundColor: 'white', borderRadius: '8px'  , alignItems:'center'}}>
        <Typography variant="h6" sx={{ maxWidth: '200px' }}>
          {title}
        </Typography>
        <Stack direction={'column'} gap={1}>
          {
            chartData.map((item) => (
              <Stack direction={'row'} gap={2} alignItems={'center'}>
                <Box sx={{ width: '10px', height: '10px', backgroundColor: 'blue', borderRadius: '50%' }} />
                <Typography>{item.label}</Typography>
                <Typography>{item.value}</Typography>
              </Stack>
            ))
          }
        </Stack>
        {/* 
        {chartData && (
          <PieChart
            sx={{
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            series={[
              {
                data: chartData.map((item) => ({ label: item.label, value: item.value })),
                innerRadius: 80,
                outerRadius: 50,
                cornerRadius: 0,
                paddingAngle: 0,
              },
            ]}
            width={340}
            height={160}
            slotProps={{
              legend: { hidden: true },
            }}
            tooltip={{
              trigger: 'item',
              formatter: (params) => `$${params.value}M`,
            }}
          />
        )} */}

      </Paper>
    </Grid>
  );
}

function AgentHeader() {
  const navigate = useNavigate();

  const agentData = [
    // { title: 'Total Agents', value: 978 },
    // { title: 'Total Agents signed Up this Year', value: 879 },
    {
      title: 'Top 3 Agents Volume - Current Year',
      chartData: [{ label: 'John Doe', value: 200 }, { label: 'John Doe', value: 400 }, { label: 'John Doe', value: 600 }],
    },
    {
      title: 'Top 3 Agents - No. of Merchant Current Year',
      chartData: [{ label: 'John Doe', value: 200 }, { label: 'John Doe', value: 400 }, { label: 'John Doe', value: 600 }],
    },
  ];

  return (
    <Box>
      <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between" mb={5}>
        <Typography sx={{ width: '100%' }} variant="h4" gutterBottom>
          Agents
        </Typography>
        <Button onClick={() => navigate('/app/agents/createagent')} variant="contained" sx={{ width: '200px' }} startIcon={<Iconify icon="eva:plus-fill" />}>
          New Agent
        </Button>
        <Button variant="contained" sx={{ width: '200px' }} startIcon={<Iconify icon="eva:plus-fill" />}>
          Export
        </Button>
      </Stack>

      <Container sx={{maxWidth:'100% !important'}}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2, backgroundColor: 'white', borderRadius: '8px' }}>
              <AppWidgetSummary
                title="Total Agents"
                total={8900000}
                sx={{ py: 6}}
                icon={<img alt="icon" src="/assets/icons/glass/agents.svg" />}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2, backgroundColor: 'white', borderRadius: '8px' }}>
              <AppWidgetSummary
                title="Total Agents signed Up this Year"
                total={114000}
                icon={<img alt="icon" src="/assets/icons/glass/agents_active.svg" />}
                sx={{ py: 6 }}
              />
            </Paper>
          </Grid>

          {agentData.map((agent, index) => (
            <AgentCard key={index} title={agent.title} value={agent.value} chartData={agent.chartData} />
          ))}


        </Grid>
      </Container>
      {/* <Grid container spacing={1} gap={1} xs={12} md={12} sx={{ mb: 2, mt: 2 }}>
        <Grid item xs={12} md={3}>
          <AppWidgetSummary
            title="Total Agents"
            total={8900000}
            sx={{py:6}}
            icon={<img alt="icon" src="/assets/icons/glass/agents.svg" />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <AppWidgetSummary
            title="Total Agents signed Up this Year"
            total={114000}
            icon={<img alt="icon" src="/assets/icons/glass/agents_active.svg" />}
            sx={{py:6}}
          />
        </Grid>
        {agentData.map((agent, index) => (
          <AgentCard key={index} title={agent.title} value={agent.value} chartData={agent.chartData} />
        ))}
      </Grid> */}
    </Box>
  );
}

export default AgentHeader;
