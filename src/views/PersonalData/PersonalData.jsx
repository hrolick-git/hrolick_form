import React, { useRef } from 'react';
import PersonalData_01 from './PersonalData_01';
import PersonalData_02 from './PersonalData_02';
import PersonalData_03 from './PersonalData_03';
import SubmitBtn from "../../components/SubmitBtn";
import {useBlockScroll, useCalculateHeight} from "../../utils/useWindowDimensions";

const PersonalData = ({ btnSettings: { clickSubmitBtn, isSubmitting, btnNext }, ...props}) => {
    const elRef = useRef();
    useBlockScroll(elRef);
    useCalculateHeight();

    return (
        <React.Fragment>
            <div ref={elRef} className="form_sub_personal-data">
                <div className="form_sub__center">
                    <PersonalData_01 {...props} />
                    <div className="vertical-line" />
                    <PersonalData_02 {...props} />
                    <div className="vertical-line" />
                    <PersonalData_03 {...props} />
                </div>

                <SubmitBtn
                    onClick={clickSubmitBtn}
                    isSubmitting={isSubmitting}
                    btnNext={btnNext} />
            </div>
        </React.Fragment>
    )
}

export default PersonalData;