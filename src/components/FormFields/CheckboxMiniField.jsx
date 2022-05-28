import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText, InputLabel
} from '@material-ui/core';
import clsx from "clsx";

export default function CheckboxMiniField(props) {
    const { label, value, ...rest } = props;
    const [field, meta, helper] = useField(props);
    const { setValue } = helper;
    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;

    function _renderHelperText() {
        if (isError) {
            return <span className="MuiFormHelperText-root Mui-error Mui-required">{error}</span>;
        }
    }

    return (
        <div className="form__control form__checkbox__mini__control">
            <FormControl {...rest} error={isError} className="form__checkbox__mini__wrap">
                <FormControlLabel
                    value={field.value}
                    checked={field.value}
                    className="form__checkbox__mini"
                    control={
                        <>
                            <Checkbox {...field} className={clsx("form__checkbox__input", field.value && "checked")} onChange={() => setValue(!value)} />
                            <span className={clsx("form__checkbox__mini__check", field.value && "checked")}/>
                        </>
                    }
                    label=""
                />
            </FormControl>
            <InputLabel
                className="form__label form__checkbox__mini__label"
                onClick={() => setValue(!value)}
                required={props.required}>
                <span>{props.label}</span>
            </InputLabel>
            {_renderHelperText()}
        </div>
    );
}
