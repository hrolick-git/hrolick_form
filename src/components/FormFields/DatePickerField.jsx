import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import {InputLabel, Popover} from "@material-ui/core";
import { KeyboardDatePicker } from '@material-ui/pickers';
import StaticPickers from "../StaticPickers";
import clsx from "clsx";

export default function DatePickerField(props) {
    const { errorText, ...rest } = props;
    const [field, meta, helper] = useField(props);
    const { touched, error } = meta;
    const { setValue } = helper;
    const isError = touched && error && true;
    const { value } = field;
    const initialDate = new Date();
    const [selectedDate, setSelectedDate] = useState(null);
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [calendar, toggleCalendar] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const _onChangeYear = (page) => {
        const currentDate= selectedDate || initialDate;
        const [month, date, year] = currentDate.toLocaleDateString("en-US").split("/");
        const newDate = new Date(page, month-1, date);
        setSelectedDate(newDate);
        setYear(page);
    }

    const _onChangeMonth = (page) => {
        const currentDate= selectedDate || initialDate;
        const [month, date, year] = currentDate.toLocaleDateString("en-US").split("/");
        const newDate = new Date(year, page, date);
        setSelectedDate(newDate);
        setMonth(page);
    }

    function _onChange(date) {
        if (date) {
            setSelectedDate(date);
            try {
                const ISODateString = date.toISOString();
                setValue(ISODateString);
            } catch (error) {
                setValue(date);
            }
        } else {
            setValue(date);
        }
    }


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (value) {
            const date = new Date(value);
            const [_month, _date, _year] = date.toLocaleDateString("en-US").split("/");
            setSelectedDate(date);
            setYear(_year);
            setMonth(_month);
        } else {
            const [_month, _date, _year] = initialDate.toLocaleDateString("en-US").split("/");
            setYear(_year);
            setMonth(_month);
        }
    }, [value]);

    useEffect(() => {
        if(!value && open) {
            setSelectedDate(initialDate);
            setValue(initialDate);
        }
    }, [open])

    return (
        <div className="form__control">
            <InputLabel
                className="form__label"
                required={props.required}>
                <span>{props.label}</span>
            </InputLabel>
            <div aria-describedby={id} className="form__control__icon-wrap" onClick={handleClick}>
                <span className={clsx(open&&"open","form__picker__icon")}/>
                <KeyboardDatePicker
                    {...field}
                    {...rest}
                    {...props}
                    className="form__picker__input"
                    open={false}
                    value={selectedDate}
                    onOpen={() => toggleCalendar(!calendar)}
                    onChange={_onChange}
                    error={isError}
                    invalidDateMessage={isError && error}
                    helperText={isError && error}
                    variant="outlined"
                    format="MM/dd/yyyy"
                    allowKeyboardControl={false}
                    label=""
                    disabled
                />
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                className="form__picker__popover"
            >
                <StaticPickers
                    toggleCalendar={handleClose}
                    year={parseInt(year)}
                    month={parseInt(month)}
                    onChangeYear={_onChangeYear}
                    onChangeMonth={_onChangeMonth}
                    onChange={_onChange}
                    selectedDate={selectedDate}
                    calendar={calendar}
                />
            </Popover>
        </div>
    );
}
