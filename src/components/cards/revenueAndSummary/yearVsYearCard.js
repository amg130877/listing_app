import * as React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts'; // Import the BarChart from MUI X
import styled from '@emotion/styled';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// Calculate the volume percentage change
function calculateVolumeChange(lastYearValue, thisYearValue) {
    const percentageChange = ((thisYearValue - lastYearValue) / lastYearValue) * 100;
    const trend = percentageChange > 0
    return {
        trend,  // shorthand for trend: trend
        percentageChange: `${percentageChange.toFixed(2)}%`
    };
}

export default function YearVsYearCard({ fulldata }) {
    // Calculate the trend and percentage change
    const { lastYear, thisYear } = fulldata.yearVsYear;
    const { trend, percentageChange } = calculateVolumeChange(lastYear.value, thisYear.value);

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
                <Stack direction='row' spacing={2} sx={{ justifyContent: 'space-between', width: '100%' }}>
                    <Stack direction='column' sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ maxWidth: '200px' }}>{fulldata.yearVsYear.head}</Typography>
                    </Stack>
                    <Stack direction='column' sx={{ justifyContent: 'space-between' }}>
                        <Typography  sx={{ fontSize: '22px' , fontWeight:'bold' }}>{percentageChange} {trend ? <TrendingUpIcon sx={{ fill: 'green' }} /> : <TrendingDownIcon sx={{ fill: 'red' }} />} </Typography>
                        <Typography sx={{ fontSize: '12px' , color:'#5B5B5B' }}>{fulldata.yearVsYear.duration}</Typography>
                    </Stack>
                </Stack>

                <Divider orientation="horizontal" flexItem />
                <BarChart
                    xAxis={[{ scaleType: 'band', data: [fulldata.yearVsYear.duration.split('/')[0].trim(), fulldata.yearVsYear.duration.split('/')[1].trim()] }]}
                    series={[
                        { data: [lastYear.value, thisYear.value], color: ['#FF5733', '#33B5FF'] } // Assign different colors
                    ]}
                    width={300}
                    height={200}
                />
            </Stack>
        </Box>
    );
}
