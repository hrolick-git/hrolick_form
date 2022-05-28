import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {
    InputField,
    DatePickerField,
    CheckboxField,
    MultilineTextField
} from '../../components/FormFields';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "../../theme";

const PersonalData_03 = ({ formField : {
    personalData: {
        availability: {
            everWorkedForCompany,
            knowAnyoneWhoWorks,
            legallyAuthorized,
            sponsorshipRequire,
        },
        military: {
            militaryServed
        }
    }
}}) => {
    const fields = Object.values({
        everWorkedForCompany,
        knowAnyoneWhoWorks,
        legallyAuthorized,
        sponsorshipRequire,
        militaryServed
    });
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'), {
        defaultMatches: true
    });

    return (
        <div className="form_sub form_sub__container">
            <Grid container direction="row" alignItems="center" className="form_sub_personal-data__wrap">
                <Grid container direction="row" alignItems="flex-end" spacing={isMobile?1:3} className="form_sub_personal-data_01 py-0">
                    {fields.map((field) => {
                        if(field.type === "checkbox") {
                            return [
                                field.name === "militaryServed" && <Grid item className="py-0" xs={12}>
                                    <Typography variant="h2" gutterBottom>
                                        Military
                                    </Typography>
                                </Grid>,
                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                    <CheckboxField
                                        name={`personalData.availability.${field.name}`}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth
                                    />
                                </Grid>,
                                field.note && <Grid key={`${field.name}-note`} item xs={12} className="form_sub_personal-data_02__text">
                                    <p>
                                        {field.note}
                                    </p>
                                </Grid>
                                ,
                                field.break && <div className="break break_line-bottom form_sub_personal-data_02__break"/>
                            ]

                        }
                        if(field.type === "textarea") {
                            return (
                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                    <MultilineTextField
                                        name={`personalData.availability.${field.name}`}
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
                                        name={`personalData.availability.${field.name}`}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth/>
                                </Grid>
                            )
                        }
                        return (
                            <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                <InputField
                                    name={`personalData.availability.${field.name}`}
                                    label={field.label}
                                    required={field.required}
                                    fullWidth/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

export default PersonalData_03;