import React, { Fragment, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Grid, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { z } from 'zod';
import { faker } from '@faker-js/faker';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { FormContainer } from 'react-hook-form-mui'
import PersonalInfoForm from './PersonalInfo';
import BusinessInfo from './BusinessInfo';
import Residuals from './Residuals';
import Miscellaneous from './Miscellaneous';

const steps = ['Personal Info', 'Business Information', 'Residuals', 'Miscellaneous'];

const personalInfoSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
    residenceAddress: z.string().min(1, 'Residence address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(2, 'State is required').max(2, 'Use 2-letter state code'),
    zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
    mobilePhone: z.string().regex(/^\d{10}$/, 'Invalid phone number (10 digits)'),
    ssn: z.string().regex(/^\d{3}-\d{2}-\d{4}$/, 'Invalid SSN format (XXX-XX-XXXX)'),
    driversLicense: z.string().min(1, 'Driver\'s license is required'),
});

const defaultValues = {
    PersonalInfo: {
        FirstName: faker.name.firstName(),
        LastName: faker.name.lastName(),
        EmailAddress: faker.internet.email(),
        DOB: faker.date.past(),
        ResidenceAddress: faker.address.streetAddress(),
        City: faker.address.city(),
        State: faker.address.stateAbbr(),
        Zip: faker.address.zipCode(),
        MobileNumber: faker.phone.number(),
        SSN: faker.helpers.regexpStyleStringParse('[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]'),
        DriverLicense: faker.helpers.regexpStyleStringParse('[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]'),
    },
    BusinessInfo: {
        CorporationName: faker.company.name(),
        CorporationType: 'PVT',
        CorporationState: 'TX',
        ResidenceAddress: faker.address.streetAddress(),
        TaxId: faker.random.alphaNumeric(10).toUpperCase(),
        CompanyBusinessName: faker.company.name(),
        BusinessAddress: faker.address.streetAddress(),
        CityProvince: faker.address.cityName(),
        State: faker.address.stateAbbr(),
        Zip: faker.address.zipCode(),
        BusinessFax: faker.phone.number(),
        BusinessPhone: faker.phone.number(),
        WebAddress: faker.internet.domainName()
    },
    Residuals: {
        Type: 2,
        ResidualsNotificationEmail: faker.internet.email(),
        MasterAgentList: faker.name.fullName(),
        ResidualProgramMultipleAgentsGoingtouse: faker.name.fullName(),
        ResidualDecline: faker.datatype.number(2),
        VolumeDecline: faker.datatype.number(2),
        ResidualIncrease: faker.datatype.number(2),
        VolumeIncrease: faker.datatype.number(2),
        Closureratiotonumberofaccounts: faker.datatype.number(2)
    },
    Miscellaneous: {
        ApprovalNotesAndStatusChangeEmailCC: faker.internet.email(),
        AlertNotesEmail: faker.internet.email(),
    }
}


const FormBox = styled(Box)({
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
});

const NavigationButtons = styled(Box)({
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
});

const WizardButton = styled(Button)(({ theme }) => ({
    fontWeight: 'bold',
    padding: '8px 24px',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: 'none',
    },
}));

function CreateAgent() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stack onClick={() => navigate('/app/agents')} direction='row' alignItems={'center'} gap={1} sx={{ mb: 4, cursor: 'pointer', width: 'fit-content' }}>
                <ArrowBackIcon />
                <Typography variant='h5'>Agents</Typography>
            </Stack>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            
            <FormBox>
                <FormContainer onSuccess={onSubmit} defaultValues={defaultValues}>
                    <Typography variant="h5" gutterBottom>{steps[activeStep]}</Typography>
                    {activeStep === 0 && (
                        <PersonalInfoForm />
                    )}
                    {activeStep === 1 && (
                        <BusinessInfo />
                    )}
                    {activeStep === 2 && (
                        <Residuals />
                    )}
                    {activeStep === 3 && (
                        <Miscellaneous />
                    )}

                    <NavigationButtons>
                        <WizardButton disabled={activeStep === 0} onClick={handleBack}>Back</WizardButton>

                        {activeStep === steps.length - 1 ? (
                            <WizardButton
                                variant="contained"
                                type='submit'
                            >
                                Submit
                            </WizardButton>
                        ) : (
                            <WizardButton
                                variant="contained"
                                onClick={handleNext}
                            >
                                Next
                            </WizardButton>
                        )}
                    </NavigationButtons>
                </FormContainer>

            </FormBox>


            {/* {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </>
            )} */}
        </Box>
    );
}

export default CreateAgent
