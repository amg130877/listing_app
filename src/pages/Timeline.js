import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { fCurrency, fNumber } from '../utils/formatNumber';

const steps = [{
    label: 'Reports Downloaded'
}, {
    label: 'To Be Processed'
}, {
    label: 'Processed'
}];

export default function VerticalLinearStepper({ data, month, year }) {
    const [activeStep] = React.useState(data.status);

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            sx={{
                                '& .MuiStepLabel-label': {
                                    fontSize: '18px'
                                }
                            }}
                            optional={<GetData data={data} index={index} year={year} month={month} />}
                        >
                            {step.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

function GetData({ data, index, year, month }) {
    const currentIndex = index + 1

    if (currentIndex > data.status) {
        return null
    }

    if (currentIndex === 1) {
        return (
            <Box sx={{ mt: 1 }}>
                <Typography component='p' fontWeight={600} variant="body2">File Name: {`${data.name}_${month}_${year}.xlsx`}</Typography>
                <Typography component='p' fontWeight={600} variant="body2">Total Records: {fNumber(data.totalRecords)}</Typography>
                <Typography component='p' fontWeight={600} variant="body2">Date Of Download: {data.date}</Typography>
            </Box>
        )
    }

    if (currentIndex === 2) {
        return (
            <Box sx={{ mt: 1 }}>
                <Typography component='p' fontWeight={600} variant="body2">Records Send To MAX Database: {fNumber(data.sendToMAX)}</Typography>
            </Box>
        )
    }

    if (currentIndex === 3) {
        return (
            <Box sx={{ mt: 1 }}>
                <Typography component='p' fontWeight={600} variant="body2">Records Recevied From MAX Database: {fNumber(data.receivedFromMax)}</Typography>
                <Typography component='p' fontWeight={600} variant="body2">Invoice Value: {fCurrency(data.invoiceValue)}</Typography>
            </Box>
        )
    }
}