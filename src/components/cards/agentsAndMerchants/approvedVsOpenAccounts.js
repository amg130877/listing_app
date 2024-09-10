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

export default function ApprovedVsOpenAccounts({ fulldata }) {

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
                maxWidth: '380px',
                width: '100%'
            }}
        >
            <Stack direction="column" spacing={1} sx={{ mb: 1, mt: 2, width: '100%', height: '100%', alignItems: 'flex-start' }}>
                <Stack direction='row' spacing={3} sx={{ justifyContent: 'space-between' }}>
                    <Stack direction='column' sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ maxWidth: '200px' }}>{fulldata.approvedVsOpened.head}</Typography>

                    </Stack>
                    <Stack direction='column' sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h4">{fulldata.approvedVsOpened.total}</Typography>
                        <Typography sx={{ fontSize: '12px' }}>{fulldata.approvedVsOpened.duration}</Typography>
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
                            data: fulldata.approvedVsOpened.data.map((item) => ({ label: item.label, value: item.value, color: item.color })),
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
                <Divider orientation="horizontal" flexItem />
                <Stack spacing={1} direction='row' sx={{ mt: 2, py: 2, width: '100%', justifyContent: 'space-around' }}>
                    {fulldata.approvedVsOpened.data.map((item) => (
                        <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 1, textShadow: `0px 0px 20px ${item.color}` }}>
                            <Typography sx={{ color: item.color }}>{`${item.value}`}</Typography>
                            <Typography sx={{ color: item.color }}>{item.label}</Typography>
                        </Box>
                    ))}
                </Stack>

            </Stack>

        </Box>
    );
}
