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


export default function TotalRevenuecard({ fulldata }) {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: 'white',
                minWidth: '380px'
            }}
        >
            <Stack direction="column" spacing={1} sx={{ mb: 1, mt: 2, width: '100%' , height:'100%', justifyContent: 'start', alignItems: 'center' }}>
                <Stack direction='row' spacing={3} sx={{ justifyContent: 'space-between'  , width:'100%' }}>
                    <Stack direction='column' sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h6">{fulldata.totalMonthVolume.head}</Typography>
                        <Typography sx={{ fontSize: '12px' }}>{fulldata.totalMonthVolume.duration}</Typography>
                    </Stack>
                    <Stack direction='column' sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h4">{fulldata.totalMonthVolume.total}</Typography>

                    </Stack>
                </Stack>
                <Divider orientation="horizontal" flexItem />
                <PieChart
                    sx={{
                        padding: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    series={[
                        {
                            data: [{ label: fulldata.totalMonthVolume.duration, value: fulldata.totalMonthVolume.value }].map((item) => ({ label: item.label, value: item.value })),
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

            </Stack>

        </Box>
    );
}
