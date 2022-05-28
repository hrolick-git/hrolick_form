import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import { FieldArray } from "formik";
import ProfessionalReferencesTwin from "./ProfessionalReferencesTwin";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "../../theme";

const EmploymentHistory_02 = ({ formField : {
    references
}, values }) => {
    const fields = Object.values(references[0]);
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'), {
        defaultMatches: true
    });

    const referencesTwin = [];

    values.references.forEach((item, index) => {
        const firstRef = values.references[index - 1];
        const secondRef = values.references[index];

        if (index % 2) {
            referencesTwin.push([{...firstRef, index: index - 1}, {...secondRef, index: index}]);
        }

        if (values.references.length % 2 && index === values.references.length-1) {
            referencesTwin.push([{...secondRef, index: index}]);
        }

    });

    return (
            <FieldArray
                name="references"
                render={arrayHelpers => (
                    <React.Fragment>
                        {referencesTwin.map((reference, index) => {
                            return [
                                <div className="vertical-line" />,
                                <div key={index} className="form_sub form_sub__container">
                                    <Grid container direction="row" alignItems="center" className="form_sub_employment__wrap">
                                        <Grid container direction="row" spacing={isMobile?1:3} className="form_sub_employment_01 py-0">
                                            <Grid item className="py-0" xs={12}>
                                                <Typography variant="h2" gutterBottom>
                                                    Professional References
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} className="py-0">
                                                <div className="form_sub_references__text">
                                                    <p>
                                                        Please list three individuals unrelated to you with whom you have worked who know your qualifications for this position
                                                    </p>
                                                </div>
                                            </Grid>
                                    <Grid item className="py-0" xs={12}>
                                        <ProfessionalReferencesTwin arrayHelpers={arrayHelpers} double={false} fields={fields} index={reference[0].index} />
                                        {reference[1]&& <ProfessionalReferencesTwin arrayHelpers={arrayHelpers} double={true} fields={fields} index={reference[1].index} />}
                                    </Grid>
                                    {index === referencesTwin.length-1 && (
                                        <Grid item xs={12} className="py-0">
                                            <Button
                                                className="fr-btn fr-btn-default react-form__btn_add"
                                                onClick={() => arrayHelpers.push({
                                                    name: "",
                                                    address: "",
                                                    phone: "",
                                                    relationship: ""
                                                })}
                                            >
                                                <span className="fr-btn-title">Add References</span>
                                                <span className="react-form__btn_add__cover"/>
                                            </Button>
                                        </Grid>
                                    )}
                                        </Grid>
                                    </Grid>
                                </div>
                            ]
                        })}
                    </React.Fragment>
                )}
            />
    )
}

export default EmploymentHistory_02;