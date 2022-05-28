import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { Field } from 'formik';
import {CheckboxField, InputFileUpload} from "../../components/FormFields";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "../../theme";

const EmploymentHistory_00 = ({ formField : {
    resume,
    workHistory
}, values }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'), {
        defaultMatches: true
    });

    return (
        <div className="form_sub form_sub__container form_sub_employment_00">
            <Grid container direction="row" alignItems="center" className="form_sub_employment__wrap">
                <Grid container direction="row" spacing={isMobile?1:3} className="form_sub_employment_01 py-0 my-0">
                    <Grid item className="py-0" xs={12}>
                        <Typography variant="h1" gutterBottom>
                            Employment history
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="py-0">
                        <div className="form_sub_employment_00__text">
                            <p className="my-0">
                                Please complete for all full-time or part-time employment <b>beginning with most recent employer (including temporary jobs)</b>.
                                You may include as part of your employment history any verified work performed on a volunteer basis.
                                All applicants should start with their most recent job, include military assignments and voluntary employment
                                and provide ten (10) years of history. (A separate sheet may be attached.) You must explain any gaps in your
                                employment history.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} className="py-0">
                        <Field
                            name={resume.name}
                            label={resume.label}
                            required={resume.required}
                            component={InputFileUpload}
                            value={values.resume}
                        />
                    </Grid>

                    <Grid key={workHistory.name} item xs={12} sm={workHistory.col} className="py-0 form_sub_employment_00__work-history">
                        <CheckboxField
                            name={workHistory.name}
                            label={workHistory.label}
                            required={workHistory.required}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default EmploymentHistory_00;