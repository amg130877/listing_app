import React from 'react';
import { Grid } from '@mui/material';
import { TextFieldElement, CheckboxButtonGroup, CheckboxElement } from 'react-hook-form-mui'


const Miscellaneous = () => {

    const AllowCustomLogo = [
        { id: "1", label: 'Wells Fargo Bank' },
        { id: "2", label: 'West America Bank' },
        { id: "3", label: 'Esquire Bank' },
    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <CheckboxButtonGroup label='Allow Custom Logo' name="Miscellaneous.AllowCustomLogo" options={AllowCustomLogo} row />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement multiline name="Miscellaneous.AlertNotesEmail" label="Alert Notes Email" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement
                    helperText="Turn this ON to cc the email addresses that you entered in the next box on the left. If this is OFF then those email addresses will not be cc'd"
                    multiline
                    name="Miscellaneous.ApprovalNotesAndStatusChangeEmailCC"
                    label="Approval, Notes and Status Change Email CC"
                    required
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <CheckboxElement
                    label="CC NBD?"
                    name="Miscellaneous.CCNBD"
                    helperText="To CC the Agents NBD, turn this ON"
                />
            </Grid>
        </Grid>
    );
};

export default Miscellaneous;
