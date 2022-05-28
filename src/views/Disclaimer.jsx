import React from "react";
import {Button, Grid, Typography} from '@material-ui/core';
import { CheckboxMiniField } from '../components/FormFields';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "../theme";

const Disclaimer = ({btnSettings: { clickSubmitBtn, isSubmitting, btnNext }, formField: { iAgree }, values}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'), {
        defaultMatches: true
    });

    return (
        <React.Fragment>
            <div className="form_sub_disclaimer__wrap">
                <div className="form_sub_disclaimer">
                    <Grid container direction="row" alignItems="center" spacing={isMobile?1:3} className="form_sub">
                        <Grid item xs={12} className="py-0">
                            <div className="form_sub_disclaimer__text">
                                <Typography variant="h1" gutterBottom>
                                    APPLICANT’S ACKNOWLEDGMENT
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                  <br/><br/>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                  <br/><br/>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                  <br/><br/>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} className="py-0">
                            <CheckboxMiniField value={values.iAgree} name={iAgree.name} label={iAgree.label} required={iAgree.required} fullWidth />
                        </Grid>
                        <Grid item xs={12} className="py-0">
                            <Button
                                type="submit"
                                onClick={clickSubmitBtn}
                                isSubmitting={isSubmitting}
                                className="fr-btn fr-btn-default form_sub_disclaimer__btn"
                            >
                                <span className="fr-btn-title">{btnNext}</span>
                                <span className="react-form__btn_add__cover"/>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Disclaimer;
