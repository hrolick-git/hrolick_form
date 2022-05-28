import React from 'react';
import {FormHelperText, Input, InputLabel} from '@material-ui/core';
import {at} from "lodash";
import {useField} from "formik";

export default function InputFileUpload({ value , ...props}) {
    const [field, meta, helper] = useField(props.field);
    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;

    function _renderHelperText() {
        if (isError) {
            return <FormHelperText className="MuiFormHelperText-root Mui-error Mui-required">{error}</FormHelperText>;
        }
    }
    return (
        <div className="form__control form__control_file">
            <InputLabel
                className="form__label form_sub_employment__input_file__label"
                required={props.required}>
                <span>{props.label}</span>
            </InputLabel>
            <span className="form_sub_employment__input_file__name">{value ? value.name : "The file is not selected"}</span>
            <InputLabel
                className="form_sub_employment__input_file__add"
                required={props.required}>
                {!value && "Attach Resume"}

                <Input
                    className="form_sub_employment__input_file"
                    error={meta.touched && meta.error && true}
                    inputProps={{
                        type: 'file',
                        disabled: props.disabled || props.form.isSubmitting,
                        name: field.name,
                        onChange: (event) => {
                            const file = event.currentTarget.files[0];
                            props.form.setFieldValue(field.name, file);
                        },
                    }}
                />
            </InputLabel>

            {value && (
                <span
                    className="form_sub_employment__input_file__delete"
                    onClick={() => props.form.setFieldValue(props.field.name, null)}>
                    Delete Resume
                </span>
            )}
            {_renderHelperText()}
        </div>
    );
}
