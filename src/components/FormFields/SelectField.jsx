import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
    FormControl,
    InputBase
} from '@material-ui/core';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "../../theme";

const useStyles = makeStyles({
    icon: {
        position: "absolute",
        right: "20px",
        top: 0,
        lineHeight: "40px",
        [theme.breakpoints.up('lg')]: {
            lineHeight: "50px",
        },
        '&.MuiSelect-iconOpen': {
            top: "5px",
            opacity: 1,
        }
    },
    selectMenu: {
        padding: "0 20px",
        color: "rgba(255, 255, 255, .6)",
        lineHeight: "47px",
        height: "37px",
        fontFamily: "'Exo 2', sans-serif",
        [theme.breakpoints.up('lg')]: {
            lineHeight: "47px",
            height: "47px",
        },
        borderBottom: "1px solid rgba(255, 255, 255, .05)",
        backgroundColor: "697d99",

        '&:last-child': {
            borderBottom: 'none'
        },
        '&.Mui-selected': {
            color: "#fff",
            background: "rgba(255, 255, 255, .05)"
        },
        "&:hover": {
            background: "rgba(255, 255, 255, .05)",
        },
    }
});

const CssTextField = withStyles((theme) => ({
    input: {
        color: "rgba(255, 255, 255, .6)",
        lineHeight: "42px",
        height: "44px",
        fontSize: "16px",
        [theme.breakpoints.up('lg')]: {
            fontSize: "18px",
            lineHeight: "52px",
            height: "54px",
        },
        padding: "0 20px",
        borderRadius: 0,
        position: 'relative',
        backgroundColor: "697d99",
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxSizing: "border-box",
        transition: "all .5s",
        '&:hover, &:focus': {
            border: '1px solid rgba(255, 255, 255, 0.3)',
        },
    }
}))(InputBase);

function SelectField(props) {
    const classes = useStyles();
    const { label, data, ...rest } = props;
    const [field, meta] = useField(props);
    const { value: selectedValue } = field;
    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;

    function _renderHelperText() {
        if (isError) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }

    return (
        <div className="form__control">
            <InputLabel
                className="form__label"
                required={props.required}>
                <span>{props.label}</span>
            </InputLabel>
            <FormControl className="form__select__wrap" fullWidth error={isError}>
                <Select {...field}
                    value={selectedValue ? selectedValue : ''}
                    input={<CssTextField label="" />}
                    displayEmpty
                    IconComponent={props => (
                        <div className={clsx(classes.icon, props.className)}>
                            <span className="alba-icon__arrow"/>
                        </div>
                    )}
                    inputProps={{
                        className: clsx(isError && "form__input__error")
                    }}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        getContentAnchorEl: null
                    }}
                >
                    {data.map((item, index) => (
                        <MenuItem disabled={item.disabled}  className={classes.selectMenu} key={index} value={item.value}>
                            <span className={clsx(!item.value&&"empty-value")}>{item.label}</span>
                        </MenuItem>
                    ))}
                </Select>
                {_renderHelperText()}
            </FormControl>
        </div>
    );
}

SelectField.defaultProps = {
    data: []
};

SelectField.propTypes = {
    data: PropTypes.array.isRequired
};

export default SelectField;
