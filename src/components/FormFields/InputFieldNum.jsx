import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import theme from "../../theme";

const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-input': {
            color: "rgba(255, 255, 255, .6)",
            padding: "0 20px",
            lineHeight: "44px",
            height: "44px",
            fontSize: "16px",
            fontFamily: "'Exo 2', sans-serif",
            [theme.breakpoints.up('lg')]: {
                fontSize: "18px",
                lineHeight: "54px",
                height: "54px",
            },
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            backgroundColor: "697d99",

            '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.1)',
                transition: "all .5s",
                borderWidth: 1,
            },
            '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderWidth: 1,
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 1,
            },
        },
    },
})(TextField);

export default function InputFieldNum(props) {
    const { errorText, ...rest } = props;
    const [field, meta] = useField(props);

    function _renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return error;
        }
    }

    return (
        <div className="form__control">
            <InputLabel
                className="form__label"
                required={props.required}>
                <span>{props.label}</span>
            </InputLabel>
            <CssTextField
                type="number"
                error={meta.touched && meta.error && true}
                helperText={_renderHelperText()}
                variant="outlined"
                className="form__input_num"
                {...field}
                {...rest}
                label=""
            />
        </div>
    );
}
