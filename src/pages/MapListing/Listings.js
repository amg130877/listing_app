import React, { useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardContent, CardHeader, Grid, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { ClearAllOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useRootContext } from '../../contextProvider/RootContext';
import AgentCard from './AgentCard';
import { AppWidgetSummary } from '../../sections/@dashboard/app';
import allAgents from "./locations.json"
import MapStyles from './MapStyles.json'
import PieChart from '../../components/pieChart/pie';



const revenueAndVolumne = {
  volumeByduration: [
    {
      head: 'Year To Date',
      total: '$8900.0M',
      net: '$980.3M',
      duration: '11-01-2023 - 11-01-2024',
      company: [
        {
          label: 'Wells',
          value: 678.8,
          color: '#2196f3'
        },
        {
          label: 'Wab',
          value: 7855.8,
          color: '#64b5f6'
        },
        {
          label: 'Enspire',
          value: 957.8,
          color: '#9c27b0'
        }
      ]
    },
    {
      head: 'Month To Date',
      total: '$900.0M',
      net: '$980.3M',
      duration: '11-01-2023 - 11-01-2024',
      company: [
        {
          label: 'Wells',
          value: 908.8,
          color: '#2196f3'
        },
        {
          label: 'Wab',
          value: 9078.8,
          color: '#64b5f6'
        },
        {
          label: 'Enspire',
          value: 9078.8,
          color: '#9c27b0'
        }
      ]
    },
    {
      head: 'Daily transaction',
      total: '$978.0M',
      net: '$980.3M',
      duration: '11-01-2023 - 11-01-2024',
      company: [
        {
          label: 'Wells',
          value: 8078.8,
          color: '#2196f3'
        },
        {
          label: 'Wab',
          value: 1398.8,
          color: '#64b5f6'
        },
        {
          label: 'Enspire',
          value: 568.8,
          color: '#9c27b0'
        }
      ]
    }
  ],
  totalMonthVolume: {
    label: "Total Revenue Sep 2023",
    value: "$4567.6M"
  },
}

const HiddenScrollCardContent = styled(CardContent)({
  paddingLeft: 0,
  paddingRight: 0,
  overflowY: 'scroll',
  scrollbarWidth: 0,
  height: 480,
  '::-webkit-scrollbar': {
    display: 'none'
  }
})

export default function Listings() {
  const [agent, setAgent] = React.useState(null)
  const [iconScale, seticonScale] = React.useState();
  const { activeTab, setActiveTab, openFilter, setOpenFilter } = useRootContext(); // Use context
  const API_KEY = process.env.REACT_APP_MAP_KEY
  let locations = [...allAgents]

  React.useEffect(() => {
    const width = agent ? 50 : 30;
    const height = agent ? 50 : 30;
    seticonScale({ width, height })
  }, [agent])

  const usaBounds = {
    north: 49.384358,
    south: 24.396308,
    west: -125.0,
    east: -66.93457,
  };

  if (agent) {
    locations = locations.filter(loc => loc.name === agent.name)
  }


  const markerClickHandler = (location) => {
    console.log(location);
  }

  /* eslint-disable react/jsx-boolean-value */
  return (
    <Grid container spacing={0} sx={{ mb: 4 }}>

      {activeTab === 'list' &&
        <>
          {/* <Grid item container spacing={2} xs={12} md={12} sx={{ mb: 2, mt: 2 }}>

            <Grid item xs={6} md={3}>
              <AppWidgetSummary
                title="Total Merchants"
                total={700000}
                icon={<img alt="icon" src="/assets/icons/glass/merchant.svg" />}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <AppWidgetSummary
                title="Active Merchants"
                total={814000}
                icon={<img alt="icon" src="/assets/icons/glass/mechant_active.svg" />}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <AppWidgetSummary
                title="Total Agents"
                total={8900000}
                icon={<img alt="icon" src="/assets/icons/glass/agents.svg" />}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <AppWidgetSummary
                title="Active Agents"
                total={114000}
                icon={<img alt="icon" src="/assets/icons/glass/agents_active.svg" />}
              />
            </Grid>

          </Grid> */}



          <Stack direction="column" spacing={1} sx={{ mb: 1, mt: 2, width: '100%' }}>
            <Accordion sx={{ p: 2 , bgcolor:'rgba(145, 158, 171, 0.16)' }} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5" component="h2" sx={{ textShadow: '0px 0px 7px #969393' }}>
                  Revenue / Volume Summary
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item container spacing={2} xs={12} md={12} sx={{ mb: 2, mt: 2, gap: 2 }}>
                  {revenueAndVolumne.volumeByduration.map((item, index) => (
                    <PieChart key={index} id={index} data={item} fulldata={revenueAndVolumne} />
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ p: 2 , bgcolor:'rgba(145, 158, 171, 0.16)' }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h5" component="h2" sx={{ textShadow: '0px 0px 7px #969393' }}>
                  Agent and Merchant Account Summary
                </Typography>
              </AccordionSummary>
              <AccordionDetails>

                <Grid item container spacing={2} xs={12} md={12} sx={{ mb: 2, mt: 2, gap: 2 }}>
                  {revenueAndVolumne.volumeByduration.map((item, index) => (
                    <PieChart key={index} id={index} data={item} fulldata={revenueAndVolumne} />
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ p: 2 , bgcolor:'rgba(145, 158, 171, 0.16)' }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography variant="h5" component="h2" sx={{ textShadow: '0px 0px 7px #969393' }}>
                  Equipment / Inventory Summary
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item container spacing={2} xs={12} md={12} sx={{ mb: 2, mt: 2, gap: 2 }}>
                  {revenueAndVolumne.volumeByduration.map((item, index) => (
                    <PieChart key={index} id={index} data={item} fulldata={revenueAndVolumne} />
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>













          </Stack>
        </>

      }

      {activeTab === 'map' &&
        <Grid item xs={12} sx={{ width: '100%', mb: 2, mt: 2 }}>
          <Box sx={{ boxShadow: 2 }}>
            <APIProvider apiKey={API_KEY}>
              <Map
                style={{ height: 500 }}
                defaultZoom={4}
                restriction={{
                  latLngBounds: usaBounds,
                  strictBounds: false
                }}
                center={{ lat: 37.0902, lng: -95.7129 }}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                styles={MapStyles}
              >

                {locations.map((loc) => (
                  <Marker
                    key={loc.name}
                    onClick={() => markerClickHandler(loc)}
                    position={{ ...loc }}
                  />
                ))}
              </Map>
            </APIProvider>
          </Box>
        </Grid>}

    </Grid>
  );
}
