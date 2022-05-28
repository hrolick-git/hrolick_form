import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {InputField, DatePickerField, SelectField, InputFieldPhone, InputFieldSsn} from '../../components/FormFields';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "../../theme";
import InputFieldNum from "../../components/FormFields/InputFieldNum";

const positions = [
    {
        value: "",
        label: "Select a position",
        disabled: true
    },
    {
        value: "QC Checker",
        label: "QC Checker"
    },
    {
        value: "Maintenance Technician",
        label: "Maintenance Technician"
    },
    {
        value: "Warehouse Generalist",
        label: "Warehouse Generalist"
    },
    {
        value: "Material Handler",
        label: "Material Handler"
    },
    {
        value: "Welding Robot Operator",
        label: "Welding Robot Operator"
    },
    {
        value: "CNC Set-up Opr.",
        label: "CNC Set-up Opr."
    },
    {
        value: "Robot Set-up Opr.",
        label: "Robot Set-up Opr."
    },
    {
        value: "Machine Operator",
        label: "Machine Operator"
    }
]

const PersonalData_01 = ({ formField : {
    personalData: {
        position,
        positionDate,
        salary,
        lastNumSsn,
        email,
        firstName,
        middleName,
        lastName,
        street,
        city,
        state,
        zip,
        phone,
        phoneOther,
        age
    }
}}) => {
    const fields = Object.values({
        position,
        positionDate,
        salary,
        lastNumSsn,
        email,
        firstName,
        middleName,
        lastName,
        street,
        city,
        state,
        zip,
        phone,
        phoneOther,
        age
    });
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'), {
        defaultMatches: true
    });

    return (
        <div className="form_sub form_sub__container line-right">
            <Grid container direction="row" alignItems="center" className="form_sub_personal-data__wrap">
                <Grid container direction="row" spacing={isMobile?1:3} className="form_sub_personal-data_01 my-0 py-0">
                    <Grid item className="py-0" xs={12}>
                        <Typography variant="h1" gutterBottom>
                            Personal Data
                        </Typography>
                    </Grid>
                    {fields.map((field) => {
                        if(field.name === 'position') {
                            return (
                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                    <SelectField
                                        name={`personalData.${field.name}`}
                                        label={field.label}
                                        required={field.required}
                                        data={positions}
                                        fullWidth
                                    />
                                </Grid>
                            )
                        }
                        if(field.name === 'positionDate') {
                            return (
                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0 form__picker__wrap">
                                    <DatePickerField name={`personalData.${field.name}`} label={field.label} required={field.required} fullWidth/>
                                </Grid>
                            )
                        }
                        if(field.type === "phone") {
                            return (
                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                    <InputFieldPhone
                                        name={`personalData.${field.name}`}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth/>
                                </Grid>
                            )
                        }
                        if(field.type === "number") {
                            return (
                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                    <InputFieldNum
                                        name={`personalData.${field.name}`}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth/>
                                </Grid>
                            )
                        }
                        if(field.type === "ssn") {
                            return (
                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                    <InputFieldSsn
                                        name={`personalData.${field.name}`}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth/>
                                </Grid>
                            )
                        }
                        return (
                            <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                <InputField name={`personalData.${field.name}`} label={field.label} required={field.required} fullWidth/>
                            </Grid>
                        )
                    })}
                    <Grid item xs={12} className="py-0">
                        <div className="form_sub_personal-data_01__text">
                            <p>
                                This information will be used only for child labor law purposes
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PersonalData_01;