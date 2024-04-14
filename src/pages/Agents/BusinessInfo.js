import React from 'react';
import { Grid } from '@mui/material';
import { TextFieldElement, SelectElement } from 'react-hook-form-mui'
import { faker } from '@faker-js/faker';


const BusinessInfo = () => {

    const corporationTypes = [
        { id: 'LLP', label: 'Limited Liability Partnership' },
        { id: 'PVT', label: 'Private Limited Company' },
        { id: 'INC', label: 'Incorporated' },
        { id: 'Ltd', label: 'Limited' },
        { id: 'LLC', label: 'Limited Liability Company' },
        { id: 'PLC', label: 'Public Limited Company' }
        // Add more types as needed
    ];

    const stateOptions = [
        { "id": "AL", "label": "Alabama" },
        { "id": "AK", "label": "Alaska" },
        { "id": "AZ", "label": "Arizona" },
        { "id": "AR", "label": "Arkansas" },
        { "id": "CA", "label": "California" },
        { "id": "CO", "label": "Colorado" },
        { "id": "CT", "label": "Connecticut" },
        { "id": "DE", "label": "Delaware" },
        { "id": "FL", "label": "Florida" },
        { "id": "GA", "label": "Georgia" },
        { "id": "HI", "label": "Hawaii" },
        { "id": "ID", "label": "Idaho" },
        { "id": "IL", "label": "Illinois" },
        { "id": "IN", "label": "Indiana" },
        { "id": "IA", "label": "Iowa" },
        { "id": "KS", "label": "Kansas" },
        { "id": "KY", "label": "Kentucky" },
        { "id": "LA", "label": "Louisiana" },
        { "id": "ME", "label": "Maine" },
        { "id": "MD", "label": "Maryland" },
        { "id": "MA", "label": "Massachusetts" },
        { "id": "MI", "label": "Michigan" },
        { "id": "MN", "label": "Minnesota" },
        { "id": "MS", "label": "Mississippi" },
        { "id": "MO", "label": "Missouri" },
        { "id": "MT", "label": "Montana" },
        { "id": "NE", "label": "Nebraska" },
        { "id": "NV", "label": "Nevada" },
        { "id": "NH", "label": "New Hampshire" },
        { "id": "NJ", "label": "New Jersey" },
        { "id": "NM", "label": "New Mexico" },
        { "id": "NY", "label": "New York" },
        { "id": "NC", "label": "North Carolina" },
        { "id": "ND", "label": "North Dakota" },
        { "id": "OH", "label": "Ohio" },
        { "id": "OK", "label": "Oklahoma" },
        { "id": "OR", "label": "Oregon" },
        { "id": "PA", "label": "Pennsylvania" },
        { "id": "RI", "label": "Rhode Island" },
        { "id": "SC", "label": "South Carolina" },
        { "id": "SD", "label": "South Dakota" },
        { "id": "TN", "label": "Tennessee" },
        { "id": "TX", "label": "Texas" },
        { "id": "UT", "label": "Utah" },
        { "id": "VT", "label": "Vermont" },
        { "id": "VA", "label": "Virginia" },
        { "id": "WA", "label": "Washington" },
        { "id": "WV", "label": "West Virginia" },
        { "id": "WI", "label": "Wisconsin" },
        { "id": "WY", "label": "Wyoming" }
    ]

    const names = Array.from({ length: 10 }, () => faker.name.findName()).map(v => ({ id: v, label: v }));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="BusinessInfo.CorporationName" label="Corporation Name" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <SelectElement options={corporationTypes} name="BusinessInfo.CorporationType" label="Corporation Type" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <SelectElement options={stateOptions} name="BusinessInfo.CorporationState" label="Corporation State" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <SelectElement options={names} name="BusinessInfo.NationalBusinessDirector" label="National Business Director" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextFieldElement name="BusinessInfo.ResidenceAddress" label="Residence Address" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="BusinessInfo.TaxId" label="Tax ID" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="BusinessInfo.CompanyBusinessName" label="Company/Business Name" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextFieldElement name="BusinessInfo.BusinessAddress" label="Business Address" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="BusinessInfo.CityProvince" label="City/Province" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="BusinessInfo.State" label="State" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="BusinessInfo.Zip" label="Zip" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="BusinessInfo.BusinessFax" label="Business Fax #" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="BusinessInfo.BusinessPhone" label="Business Phone #" required fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextFieldElement name="BusinessInfo.WebAddress" label="Web Address" required fullWidth />
            </Grid>
        </Grid>
    );
};

export default BusinessInfo;
