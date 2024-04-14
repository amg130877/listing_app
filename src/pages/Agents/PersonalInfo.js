import React from 'react';
import { Grid } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui'


const PersonalInfoForm = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="PersonalInfo.FirstName" label="First Name" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="PersonalInfo.LastName" label="Last Name" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="PersonalInfo.EmailAddress" label="Email Address" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="PersonalInfo.DOB" label="DOB" type='date' required fullWidth />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextFieldElement name="PersonalInfo.ResidenceAddress" label="Residence Address" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="PersonalInfo.City" label="City" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="PersonalInfo.State" label="State" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="PersonalInfo.Zip" label="Zip" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="PersonalInfo.MobileNumber" label="Mobile Number" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="PersonalInfo.SSN" label="SSN" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="PersonalInfo.DriverLicense" label="Driver's License" required fullWidth />
            </Grid>
        </Grid>
    );
};

export default PersonalInfoForm;
