import React, {useState} from "react";
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../components/FormFields';
import SubmitBtn from "../components/SubmitBtn";
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import clsx from "clsx";
import {useCalculateHeight} from "../utils/useWindowDimensions";

const Introduction = ({ formField: { personalData  }, btnSettings: { clickSubmitBtn, isSubmitting, btnNext }, setForm, ...rest}) => {
    const {
        fullName,
        email
    } = personalData;
    const [visible, setVisible] = useState(false);
    useCalculateHeight();

    return (
        <React.Fragment>
            <div className="form_sub__wrap form_sub_introduction__spacing">
                <Grid container direction="row" alignItems="center" className="form_sub form_sub_introduction__wrap">
                    <Grid item xs={12} lg={6} className="form_sub_introduction_left py-0">
                        <Typography variant="h1" gutterBottom>
                            Introduction
                        </Typography>
                        <Typography variant="body1" gutterBottom className="introduction__text">
                            <span className={clsx(!visible&&"short-text")}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.
                            </span>
                            <SlideDown className={'dropdown-slidedown'}>
                                { visible ? <span>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                  </span>
                                    : null }
                            </SlideDown>
                            <span className="form_sub_introduction__expand" onClick={() => setVisible(!visible)}>{visible ? 'Show Less' : 'Read More'}</span>
                        </Typography>
                        <div className="form_sub_introduction__company">
                            <Typography variant="h3" gutterBottom>
                                Company
                            </Typography>
                            <Typography variant="body1" gutterBottom className="form_sub_introduction__company__text">
                                <a target="_blank" href="https://goo.gl/maps/UWEy1qC9QHLq5G2j6">Lorem Ipsum, 895623</a>
                            </Typography>
                        </div>
                    </Grid>
                    <div className="vertical-line" />
                    <Grid item xs={12} lg={6} className="form_sub_introduction py-0">
                        <InputField name="personalData.fullName" label={fullName.label} required={fullName.required} fullWidth />
                        <InputField name="personalData.email" label={email.label} required={email.required} fullWidth />
                    </Grid>
                </Grid>
            </div>

            <SubmitBtn
                onClick={clickSubmitBtn}
                isSubmitting={isSubmitting}
                btnNext={btnNext} />
        </React.Fragment>
    );
};

export default Introduction;
