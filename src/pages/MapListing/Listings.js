import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Box, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { ClearAllOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';
import allAgents from "./locations.json"
import MapStyles from './MapStyles.json'
import AgentCard from './AgentCard';
import { AppWidgetSummary } from '../../sections/@dashboard/app';

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
  const [iconScale, seticonScale] = React.useState()

  const API_KEY = 'AIzaSyBjugX0FHm6vxfIAZCZuWm9AVSJpJpUWEk'
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

  /* eslint-disable react/jsx-boolean-value */
  return (
    <Grid container spacing={0} sx={{ mb: 4 }}>
      <Grid item container spacing={2} xs={12} md={12} sx={{ mb: 2 }}>
        <Grid item xs={6} md={3}>
          <AppWidgetSummary
            title="Total Merchants"
            total={700000}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <AppWidgetSummary
            title="Active Merchants"
            total={814000}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <AppWidgetSummary
            title="Total Agents"
            total={8900000}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <AppWidgetSummary
            title="Active Agents"
            total={114000}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 0, height: 500, boxShadow: 1 }}>
          <CardHeader
            title="Agents"
            action={agent && <Button onClick={() => setAgent(null)} startIcon={<ClearAllOutlined />}>All Agents</Button>}
          />
          <HiddenScrollCardContent>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {allAgents.map((location) => (
                <React.Fragment key={location.name}>
                  <AgentCard agent={agent} setAgent={setAgent} agentDetails={location} />
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </HiddenScrollCardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
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
                  icon={{
                    url: '/assets/map-con.jpg',
                    scaledSize: iconScale
                  }}
                  position={{ ...loc }}
                />
              ))}
            </Map>
          </APIProvider>
        </Box>
      </Grid>
    </Grid>
  );
}
