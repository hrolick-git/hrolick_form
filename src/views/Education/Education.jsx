import React, { useRef } from 'react';
import Education_01 from "./Education_01";
import Education_02 from "./Education_02";
import Education_03 from "./Education_03";
import Education_04 from "./Education_04";
import SubmitBtn from "../../components/SubmitBtn";
import {useBlockScroll, useCalculateHeight} from "../../utils/useWindowDimensions";

const Education = ({ btnSettings: { clickSubmitBtn, isSubmitting, btnNext }, ...props}) => {
    const elRef = useRef();
    useBlockScroll(elRef);
    useCalculateHeight();

    return (
        <React.Fragment>
            <div ref={elRef} className="form_sub_education">
                <div className="form_sub__center">
                    <Education_01 {...props} />
                    <div className="vertical-line" />
                    <Education_02 {...props} />
                    <div className="vertical-line" />
                    <Education_03 {...props} />
                    <div className="vertical-line" />
                    <Education_04 {...props} />
                </div>

                <SubmitBtn
                    onClick={clickSubmitBtn}
                    isSubmitting={isSubmitting}
                    btnNext={btnNext} />
            </div>
        </React.Fragment>
    )
}

export default Education;