import { useEffect, useState } from 'react';
import isObject from 'lodash/isObject';
import { useFormikContext } from 'formik';

const getFirstErrorKey = (object, keys = []) => {
    const firstErrorKey = Object.keys(object)[0];
    if (isObject(object[firstErrorKey])) {
        return getFirstErrorKey(object[firstErrorKey], [...keys, firstErrorKey]);
    }
    return [...keys, firstErrorKey].join('.');
};

const FormikOnError = ({ children }) => {
    const formik = useFormikContext();
    const [submitCount, setSubmitCount] = useState(formik.submitCount)

    useEffect(() => {
        if (!formik.isValid && formik.submitCount > submitCount && formik.isSubmitting) {
            const firstErrorKey = getFirstErrorKey(formik.errors);
            if (global.window.document.getElementsByName(firstErrorKey).length) {
                if(global.window.document.getElementsByName(firstErrorKey)[0].disabled) {
                    global.window.document.getElementsByName(firstErrorKey)[0].scrollIntoView({block: "center", inline: "center"});
                }
                global.window.document.getElementsByName(firstErrorKey)[0].focus();
            }
            setSubmitCount(formik.submitCount)
        }
    }, [formik.submitCount, formik.isValid, formik.errors]);
    return children;
};

export default FormikOnError;