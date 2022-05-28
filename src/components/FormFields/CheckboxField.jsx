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

export default function CheckboxField(props) {
    const { label, ...rest } = props;
    const [field, meta, helper] = useField(props);
    const { setValue } = helper;

    function _renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }

    function _onChange(e) {
        setValue(e.target.checked);
    }

    return (
        <div className="form__control py-0">
            <InputLabel
                className="form__label"
                required={props.required}>
                <span>{props.label}</span>
            </InputLabel>
            <FormControl {...rest}>
                <FormControlLabel
                    value={field.value}
                    checked={field.value}
                    className="form__checkbox__switch"
                    control={
                        <>
                            <span className={clsx("form__checkbox__slider__no", !field.value && "checked")}>No</span>
                            <span className={clsx("form__checkbox__slider__yes", field.value && "checked")}>Yes</span>
                            <Checkbox {...field} className={clsx("form__checkbox__input", field.value && "checked")} onChange={_onChange} />
                            <span className={clsx("form__checkbox__slider", field.value && "checked")}/>
                        </>
                    }
                    label=""
                />
                {_renderHelperText()}
            </FormControl>
        </div>
    );
}
