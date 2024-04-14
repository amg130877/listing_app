import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container, Box, TextField, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { FormContainer } from 'react-hook-form-mui'
import { faker } from '@faker-js/faker';
import PersonalInfoForm from './PersonalInfo';
import BusinessInfo from './BusinessInfo';
import Residuals from './Residuals';
import Miscellaneous from './Miscellaneous';

const RootContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50
});

const FormContainerDiv = styled(Grid)({
    width: '100%',
});

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

const steps = ['Personal Info', 'Business Info', 'Residuals', 'Miscellaneous'];

const FormWizard = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        personalInfo: '',
        businessInfo: '',
        residuals: '',
        miscellaneous: '',
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = () => {

    }

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

    return (
        <RootContainer>
            <FormContainerDiv container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Stepper activeStep={activeStep} orientation="vertical" sx={{ position: 'fixed', top: '50%', transform: 'translate(0px, -50%);' }}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
                <Grid item xs={12} sm={9}>
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
                </Grid>
            </FormContainerDiv>
        </RootContainer>
    );
};

export default FormWizard;
