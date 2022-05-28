import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import clsx from 'clsx';
import {
    CheckboxField,
    DatePickerField,
    InputField,
    InputFieldPhone,
    MultilineTextField
} from "../../components/FormFields";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "../../theme";

const ProfessionalReferencesTwin = ({ fields, index, double, arrayHelpers }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'), {
        defaultMatches: true
    });
    return (
        <Grid container direction="row" spacing={isMobile?1:3} className={clsx(double&&"double", "form_sub_references")}>
            {index !== 0 &&(
                <div
                    onClick={() => arrayHelpers.remove(index)}
                    className="fr-btn fr-btn-close fr-btn-dark">
                    <span className="close-icon"></span>
                </div>
            )}
            {fields.map((field, i) => {
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
            })}
        </Grid>
    )
}

export default ProfessionalReferencesTwin;