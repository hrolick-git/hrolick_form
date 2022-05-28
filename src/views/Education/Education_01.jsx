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

const Education_01 = ({ formField : {
    education: {
        highSchool: {
            address,
            graduate,
            institution,
            license,
            comment
        }
    }
}}) => {
    const fields = Object.values({
        address,
        graduate,
        institution,
        license,
        comment
    });
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'), {
        defaultMatches: true
    });


    return (
        <div className="form_sub form_sub__container line-right">
            <Grid container direction="row" alignItems="center" className="form_sub_education__wrap">
                <Grid container direction="row" spacing={isMobile?1:3} className="form_sub_education_01 py-0 my-0">
                    <Grid item className="py-0" xs={12}>
                        <Typography variant="h1" gutterBottom>
                            Education
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="py-0">
                        <div className="form_sub_education_01__text">
                            <p>
                                Describe any educational degrees, skills, training or experience you believe are relevant to the job applied for:
                            </p>
                        </div>
                    </Grid>
                    <Grid item className="py-0" xs={12}>
                        <Typography variant="h2" gutterBottom>
                            High School
                        </Typography>
                    </Grid>
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
                                        name={`education.highSchool.${field.name}`}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth
                                    />
                                </Grid>,
                                field.note && <Grid key={`${field.name}-note`} item xs={12} className="form_sub_education_01__text">
                                    <p>
                                        {field.note}
                                    </p>
                                </Grid>
                                ,
                                field.break && <div className="break break_line-bottom form_sub_education_01__break"/>
                            ]

                        }
                        if(field.type === "textarea") {
                            return (
                                <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                    <MultilineTextField
                                        name={`education.highSchool.${field.name}`}
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
                                        name={`education.highSchool.${field.name}`}
                                        label={field.label}
                                        required={field.required}
                                        fullWidth/>
                                </Grid>
                            )
                        }
                        return (
                            <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                                <InputField
                                    name={`education.highSchool.${field.name}`}
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

export default Education_01;