import React, {useEffect, useRef, useState} from "react";
import { useForm, useStep } from "react-hooks-helper";
import clsx from 'clsx';
import {
    Stepper,
    Step,
    StepLabel,
    Grid
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import checkoutFormModel from '../components/FormModel/formModel';
import formInitialValues from "../components/FormModel/formInitialValues";
import validationSchema from "../components/FormModel/validationSchema";
import { addPost } from "../utils";
import Introduction from "./Introduction";
import AlbaStepIcon from "../components/Stepper/AlbaStepIcon";
import PersonalData from "./PersonalData/PersonalData";
import Education from "./Education/Education";
import EmploymentHistory from "./EmploymentHistory/EmploymentHistory";
import Disclaimer from "./Disclaimer";
import ThankYou from "./ThankYou";
import {useStepsScroll} from "../utils/useWindowDimensions";
import FormikOnError from "./FormikOnError";
import SwipeableViews from 'react-swipeable-views';

const { formId, formField } = checkoutFormModel;

const steps = [
    { id: "introduction", title: "Introduction", btnNext: "Register" },
    { id: "personalData", title: "Personal Data", btnNext: "Save & Next Page" },
    { id: "education", title: "Education", btnNext: "Save & Next Page" },
    { id: "employmentHistory", title: "Employment History", btnNext: "Save & Next Page" },
    { id: "disclaimer", title: "Disclaimer", btnNext: "Finish & Send" },
    { id: "end", title: "Thank you!", btnNext: "Go Home" }
];

const MultiStepForm = () => {
    const [formData, setForm] = useForm(formInitialValues);
    const { step, index: stepIndex, navigation } = useStep({ initialStep: 0, steps });
    const { go } = navigation;
    const currentValidationSchema = validationSchema[stepIndex];
    const { id: stepId, btnNext } = step;
    const [completed, setCompleted] = useState([false, false, false, false, false]);
    const [unlockedSteps, setUnlockedSteps] = useState([true, false, false, false, false]);
    const checkerArray = arr => arr.every(v => v === true);
    const elRef = useRef();
    const elActiveStep = useRef();
    const { width } = useStepsScroll(elRef);
    const props = { formData, setForm, navigation, formField };

    const setUncompleted = () => {
        const newCompleted = completed;
        newCompleted[stepIndex] = false;
        setCompleted([...newCompleted]);
    }

    const handleSubmit = (values, actions) => {
        const newCompleted = completed;
        const newUnlockedSteps = unlockedSteps;
        newCompleted[stepIndex] = true;
        newUnlockedSteps[stepIndex+1] = true;
        setCompleted([...newCompleted]);
        setUnlockedSteps([...newUnlockedSteps]);

        if(checkerArray(completed)) {
            if(completed.length === steps.length - 1 && checkerArray(completed)) {
                // addPost(values);
                console.log("Finish.");
            }
            go(5);
        } else {
            actions.setTouched({});
            actions.setSubmitting(false);
            if(stepIndex + 1 === steps.length-1 && !checkerArray(completed)) {
                const index = completed.findIndex(element => element !== true);
                go(index);
            } else {
                go(stepIndex + 1);
            }
            if (width < 992) {
                window.scrollTo( 0, 0 );
            }
        }
    }

    const renderStepContent = (id, values, clickSubmitBtn, isSubmitting, btnNext) => {
        const btnSettings = {clickSubmitBtn, isSubmitting, btnNext};
        switch (id) {
            case "introduction":
                return <Introduction {...props} btnSettings={btnSettings} />;
            case "personalData":
                return <PersonalData {...props} btnSettings={btnSettings} />;
            case "education":
                return <Education {...props} btnSettings={btnSettings} />;
            case "employmentHistory":
                return <EmploymentHistory {...props} values={values} btnSettings={btnSettings} />;
            case "disclaimer":
                return <Disclaimer {...props} btnSettings={btnSettings} values={values} />;
            case "end":
                return <ThankYou {...props} btnSettings={btnSettings} />;
            default:
                return null;
        }
    }

    useEffect(() => {
        const scrollContainer = elRef.current;
        const activeItem = elActiveStep.current;
        if(!activeItem) {
            return;
        }
        const scrollRect = scrollContainer.getBoundingClientRect();
        const activeRect = activeItem.getBoundingClientRect();
        const scrollLeftPosition = activeRect.left - scrollRect.left - (scrollRect.width / 2) + (activeRect.width / 2);
        if (scrollContainer && width < 992) {
            scrollContainer.scrollLeft += scrollLeftPosition;
        }
    }, [stepIndex]);

    return (
        <div className="react-form__wrap">
            <React.Fragment>
                <div className="stepper__wrap">
                    <Stepper ref={elRef} nonLinear activeStep={stepIndex} className="stepper" connector={0}>
                    {steps.map(item => {
                        const endForm = width < 536 && item.id === "end";
                        return (
                            <Step
                                ref={(ref) => {
                                    if(steps.indexOf(item) === stepIndex) {
                                        elActiveStep.current = ref;
                                    }
                                }}
                                onClick={() => go(steps.indexOf(item))}
                                key={item.id}
                                className={
                                    clsx("stepper__item",
                                        steps.indexOf(item) === stepIndex && "active",
                                        checkerArray(completed) && "not-click",
                                        width > 536 && item.id === "end" && "not-display",
                                        endForm && "finish",
                                        !unlockedSteps[steps.indexOf(item)] && "step-lock"
                                    )}>

                                <StepLabel
                                    className="stepper__label"
                                    key={item.id}
                                    completed={completed[steps.indexOf(item)]}
                                    StepIconComponent={(props) => <AlbaStepIcon {...props} endForm={endForm} width={width} />}>
                                    <span className={clsx("stepper__label__title", steps.indexOf(item) === stepIndex && "active")}>
                                        {!endForm && item.title}
                                    </span>
                                </StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
                </div>
                <div className="react-form__over">
                    <React.Fragment>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className="react-form__container"
                        >
                        {stepIndex === steps.length ? (
                            <div>Success</div>
                        ) : (
                            <Formik
                                initialValues={formInitialValues}
                                validationSchema={currentValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, isValid, values }) => {
                                    const clickSubmitBtn = () => {
                                        if(!isValid) {
                                            setUncompleted()
                                        }
                                    }
                                    const btnSettings = {clickSubmitBtn, isSubmitting, btnNext};
                                    return (
                                        <Form id={formId} className="react-form" noValidate>
                                            <FormikOnError>
                                                <div className={clsx("react-form__content", stepId === "end" && "align-items-center")}>
                                                    {width < 992 && renderStepContent(stepId, values, clickSubmitBtn, isSubmitting, btnNext)}
                                                    {width > 992 && (
                                                        <SwipeableViews
                                                            disabled={true}
                                                            springConfig={{
                                                                delay: '0s',
                                                                duration: '1s',
                                                                easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)'
                                                            }}
                                                            containerStyle={{
                                                                transition: 'transform 1s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
                                                            }}
                                                            slideStyle={{duration: '1s', delay: '0s'}}
                                                            slideClassName="fr-slide"
                                                            index={stepIndex}
                                                        >
                                                            <Introduction {...props} btnSettings={btnSettings} />
                                                            <PersonalData {...props} btnSettings={btnSettings} />
                                                            <Education {...props} btnSettings={btnSettings} />
                                                            <EmploymentHistory {...props} values={values} btnSettings={btnSettings} />
                                                            <Disclaimer {...props} btnSettings={btnSettings} values={values} />
                                                            <ThankYou {...props} btnSettings={btnSettings} />
                                                        </SwipeableViews>
                                                    )}
                                                </div>
                                            </FormikOnError>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        )}
                        </Grid>
                    </React.Fragment>
                </div>
            </React.Fragment>
        </div>
    )
};

export default MultiStepForm;
