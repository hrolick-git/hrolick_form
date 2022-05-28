import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStepIconStyles = makeStyles({
    root: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontWeight: 'bold',
        display: 'flex',
        height: 22,
        alignItems: 'center'
    },
    active: {
        color: '#ff4f81',
    },
    circle: {
    },
    completed: {
        marginRight: 10
    }
});

const zeroPad = (num, places) => String(num).padStart(places, '0')

const AlbaStepIcon = ({ active, completed, icon, width, endForm }) => {
    const classes = useStepIconStyles();

    if (endForm) {
        return (
            <div
                className={clsx(classes.root, {
                    [classes.active]: active
                })}
            >
                <span className={clsx(classes.completed,"icon-completed")} />
            </div>
        )
    }

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {width > 767 && completed ? <span className={clsx(classes.completed,"icon-completed")} /> : ""}
            <div className={clsx(classes.number, "stepper__label__num")}>
                {width < 767 && completed ? <span className={clsx(classes.completed,"icon-completed")} /> : ""}
                {zeroPad(icon, 2)}{width < 767 && <span className="steps-col">/05</span>}
            </div>
        </div>
    );
}

export default AlbaStepIcon;

AlbaStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.number
};
