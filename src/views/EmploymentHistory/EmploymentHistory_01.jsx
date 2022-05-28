import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {
    InputField,
    DatePickerField,
    CheckboxField,
    MultilineTextField,
    InputFieldPhone
} from '../../components/FormFields';
import { FieldArray } from "formik";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "../../theme";

const EmploymentHistory_01 = ({ formField : {
    employers
}, values }) => {
    const fields = Object.values(employers[0]);
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'), {
        defaultMatches: true
    });

    return (
        <FieldArray
            name="employers"
            render={arrayHelpers => (
                <React.Fragment>
                    {values.employers.map((employer, index) => [
                        <div className="vertical-line" />,
                        <div key={index} className="form_sub form_sub__container">
                            <Grid container direction="row" alignItems="center" className="form_sub_employment__wrap">
                                <Grid container direction="row" spacing={isMobile?1:3} className="form_sub_employment_01 py-0">
                                    <Grid item className="py-0" xs={12}>
                                        <Typography variant="h2" gutterBottom>
                                            Employer #{index+1}
                                        </Typography>
                                        {index !== 0 &&(
                                            <div
                                                onClick={() => arrayHelpers.remove(index)}
                                                className="fr-btn fr-btn-close fr-btn-dark">
                                                <span className="close-icon"></span>
                                            </div>
                                        )}
                                    </Grid>

                                    {fields.map((field) => {
                                        if(field.type === "checkbox") {
                                            return (
                                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                                    <CheckboxField
                                                        name={`employers.${index}.${field.name}`}
                                                        label={field.label}
                                                        required={field.required}
                                                        fullWidth
                                                    />
                                                </Grid>
                                            )
                                        }
                                        if(field.type === "textarea") {
                                            return (
                                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                                    <MultilineTextField
                                                        name={`employers.${index}.${field.name}`}
                                                        label={field.label}
                                                        required={field.required}
                                                        rowsMax={field.rows}
                                                        rows={field.rows}
                                                        fullWidth/>
                                                </Grid>
                                            )
                                        }
                                        if(field.type === "date") {
                                            return (
                                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0 form__picker__wrap top">
                                                    <DatePickerField
                                                        name={`employers.${index}.${field.name}`}
                                                        label={field.label}
                                                        required={field.required}
                                                        fullWidth/>
                                                </Grid>
                                            )
                                        }
                                        if(field.type === "phone") {
                                            return (
                                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                                    <InputFieldPhone
                                                        name={`employers.${index}.${field.name}`}
                                                        label={field.label}
                                                        required={field.required}
                                                        fullWidth/>
                                                </Grid>
                                            )
                                        }
                                        return (
                                            <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                                <InputField
                                                    name={`employers.${index}.${field.name}`}
                                                    label={field.label}
                                                    required={field.required}
                                                    fullWidth/>
                                            </Grid>
                                        )
                                    })}
                                    {index === values.employers.length-1 && (
                                        <Grid item xs={12} className="py-0">
                                            <Button
                                                className="fr-btn fr-btn-default react-form__btn_add"
                                                onClick={() => arrayHelpers.push({
                                                    companyName: "",
                                                    staffingAgency: false,
                                                    address: "",
                                                    city: "",
                                                    state: "",
                                                    supervisorName: "",
                                                    companyPhone: "",
                                                    mayWeContact: "",
                                                    dateEmployedFrom: "",
                                                    dateEmployedTo: "",
                                                    lastWage: "",
                                                    describeJob: "",
                                                    reasonLeaving: ""
                                                })}
                                            >
                                                <span className="fr-btn-title">Add an Employer</span>
                                                <span className="react-form__btn_add__cover"/>
                                            </Button>
                                        </Grid>
                                    )}
                                </Grid>
                            </Grid>
                        </div>
                    ])}
                </React.Fragment>
            )}
        />
    )
}

export default EmploymentHistory_01;