import React from 'react';
import {Grid} from '@material-ui/core';
import {
    InputField,
    DatePickerField,
    CheckboxField,
    MultilineTextField,
    InputFieldPhone
} from '../../components/FormFields';

const ProfessionalReferences = ({ field, index }) => {

    if(field.type === "checkbox") {
        return (
            <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                <CheckboxField
                    name={`references.${index}.${field.name}`}
                    label={field.label}
                    required={field.required}
                    fullWidth
                />
            </Grid>)

    }
    if(field.type === "textarea") {
        return (
            <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
                <MultilineTextField
                    name={`references.${index}.${field.name}`}
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
                    name={`references.${index}.${field.name}`}
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
                    name={`references.${index}.${field.name}`}
                    label={field.label}
                    required={field.required}
                    fullWidth/>
            </Grid>
        )
    }
    return (
        <Grid key={field.name} item xs={12} sm={field.col} className="py-0">
            <InputField
                name={`references.${index}.${field.name}`}
                label={field.label}
                required={field.required}
                fullWidth/>
        </Grid>
    )
}

export default ProfessionalReferences;