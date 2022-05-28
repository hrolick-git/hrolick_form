import { Button, CircularProgress } from "@material-ui/core";
import React from "react";

const SubmitBtn = ({ isSubmitting, onClick, btnNext }) => (
    <div className="react-form__btn__wrap">
        <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            className="react-form__btn_next"
            onClick={onClick}
        >
            <span className="react-form__btn_next__text">{btnNext}</span>
        </Button>
        {isSubmitting && (
            <CircularProgress
                size={24}
            />
        )}
    </div>
);

export default SubmitBtn;