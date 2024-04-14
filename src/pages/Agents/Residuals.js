import React from 'react';
import { Grid } from '@mui/material';
import { TextFieldElement, CheckboxButtonGroup } from 'react-hook-form-mui'


const Residuals = () => {

    const options = [
        { id: "1", label: 'Is Auto Approve' },
        { id: "2", label: 'Is Chargeback Liable' },
        { id: "3", label: 'Is ETF Liable' },
        { id: "4", label: 'Is Residual On Hold' },
    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <CheckboxButtonGroup
                    label={null}
                    name="Residuals.Type"
                    options={options}
                    row
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="Residuals.ResidualsNotificationEmail" label="Residuals Notification Email" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement multiline name="Residuals.MasterAgentList" label="Master Agent List" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="Residuals.ResidualProgramMultipleAgentsGoingtouse" label="Residual Program Multiple Agents Going to use" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextFieldElement name="Residuals.ResidualDecline" label="Residual Decline %" required fullWidth type='number' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="Residuals.VolumeDecline" label="Volume Decline %" required fullWidth type='number' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="Residuals.ResidualIncrease" label="Residual Increase %" required fullWidth type='number' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="Residuals.VolumeIncrease" label="Volume Increase %" required fullWidth type='number' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="Residuals.Closureratiotonumberofaccounts" label="Closure ratio to number of accounts %" type='number' required fullWidth />
            </Grid>
        </Grid>
    );
};

export default Residuals;
