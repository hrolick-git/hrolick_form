import React, { useRef } from 'react';
import EmploymentHistory_01 from "./EmploymentHistory_01";
import EmploymentHistory_02 from "./EmploymentHistory_02";
import EmploymentHistory_00 from "./EmploymentHistory_00";
import SubmitBtn from "../../components/SubmitBtn";
import {useBlockScroll, useCalculateHeight} from "../../utils/useWindowDimensions";

const EmploymentHistory = ({
    btnSettings: { clickSubmitBtn, isSubmitting, btnNext }, ...props}) => {
    const elRef = useRef();
    useBlockScroll(elRef);
    useCalculateHeight();
    const workHistory = props?.values?.workHistory || false;

    return (
        <React.Fragment>
            <div ref={elRef} className="form_sub_employment">
                <div className="form_sub__center">
                    <EmploymentHistory_00 {...props} />
                    {workHistory && <EmploymentHistory_01 {...props} />}
                    <EmploymentHistory_02 {...props} />
                </div>

                <SubmitBtn
                    onClick={clickSubmitBtn}
                    isSubmitting={isSubmitting}
                    btnNext={btnNext} />
            </div>
        </React.Fragment>
    )
}

export default EmploymentHistory;