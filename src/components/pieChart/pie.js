import * as React from 'react';
import { Box, Stack, Typography, Avatar, Divider, Chip } from '@mui/material';
import { PieChart, useDrawingArea } from '@mui/x-charts';
import styled from '@emotion/styled';

// const data = [
//   { label: 'Wells', value: 300, color: '#2196f3' },
//   { label: 'Wab', value: 400, color: '#64b5f6' },
//   { label: 'Enspire', value: 500, color: '#9c27b0' }]



const StyledText = styled('text')(({ theme }) => ({
  // fill: theme.palette.text.primary,
  fill: '#8D77FF',
  fontWeight: 'noraml',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 18,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function CardComponent({ id, data, fulldata }) {

  console.log(fulldata)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'white',
        minWidth: '380px'
      }}
    >
      <Stack direction="column" spacing={1} sx={{ mb: 1, mt: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Stack direction='row' spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Stack direction='column' sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6">{fulldata.volumeByduration[id].head}</Typography>
            <Typography sx={{ fontSize: '12px' }}>{fulldata.volumeByduration[id].duration}</Typography>
          </Stack>
          <Stack direction='column' sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h4">{fulldata.volumeByduration[id].total}</Typography>
            <Chip label={`Net: ${fulldata.volumeByduration[id].net}`} sx={{ fontSize: '10px', width: 'fit-content', bgcolor: "#8D77FF", color: 'white', boxShadow: 5, }} />
          </Stack>
        </Stack>

        <PieChart
          sx={{
            padding: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          series={[
            {
              data: data.company.map((item) => ({ label: item.label, value: item.value })),
              innerRadius: 80,
              outerRadius: 50,
              cornerRadius: 0,
              paddingAngle: 0,
            },
          ]}
          width={340}
          height={160}
          slotProps={{
            legend: { hidden: false },
          }}
          tooltip={{
            trigger: 'item',
            formatter: (params) => `$${params.value}M`,
          }}

        />
        <Stack spacing={1} direction='row' sx={{ mt: 2, width: '100%', justifyContent: 'space-around' }}>
          {data.company.map((item) => (
            <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 1 }}>
              <Typography sx={{ color: item.color }}>{item.value}</Typography>
              <Typography sx={{ color: item.color }}>{item.label}</Typography>
            </Box>
          ))}
        </Stack>


      </Stack>

    </Box>
  );
}
