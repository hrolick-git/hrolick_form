import React from "react";
import {Button, Grid, Typography} from '@material-ui/core';

const ThankYou = () => {

    return (
        <React.Fragment>
            <Grid container direction="row" alignItems="center" spacing={10} className="form_sub form_sub_thank form_sub__center">
                <Grid item xs={12} className="py-0">
                    <div className="form_sub_thank__text">
                        <Typography variant="h1" className="form_sub_thank__title" gutterBottom>
                            THANK YOU!
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} className="py-0">
                    <a
                        href={window.location.href.replace('/careers/application-form/', '')}
                        className="fr-btn fr-btn-default form_sub_thank__btn"
                    >
                        <span className="fr-btn-title">Go Home</span>
                        <span className="react-form__btn_add__cover"/>
                    </a>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ThankYou;
