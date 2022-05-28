import * as Yup from 'yup';
import checkoutFormModel from './formModel';
const {
    formField: {
        personalData: {
            fullName,
            email,
            position,
            positionDate,
            salary,
            lastNumSsn,
            firstName,
            middleName,
            lastName,
            street,
            city,
            state,
            zip,
            phone,
            phoneOther,
            age
        },
        workHistory,
        employers: [{
            companyName,
            city: eCity,
            state: eState,
            supervisorName,
            companyPhone,
            dateEmployedFrom,
            dateEmployedTo,
            describeJob,
            reasonLeaving
        }],
        iAgree
    }
} = checkoutFormModel;

const SUPPORTED_FORMATS = [
    'application/pdf',
    'image/png',
    'image/jpeg',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'application/vnd.oasis.opendocument.presentation',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.text'
];
const FILE_SIZE = 1024 * 1024;  // 1 Mb

const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const ssnRegExp = /^[0-9]{4}/;

export default [
    Yup.object().shape({
        personalData: Yup.object().shape({
            [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
            [email.name]: Yup.string()
                .matches(emailRegEx, email.invalidErrorMsg)
                .required(`${email.requiredErrorMsg}`)
        })
    }),
    Yup.object().shape({
        personalData: Yup.object().shape({
            [position.name]: Yup.string().required(`${position.requiredErrorMsg}`),
            [positionDate.name]: Yup.string().required(`${positionDate.requiredErrorMsg}`),
            [salary.name]: Yup.string().required(`${salary.requiredErrorMsg}`),
            [lastNumSsn.name]: Yup.string()
                .matches(ssnRegExp, lastNumSsn.invalidErrorMsg)
                .required(`${lastNumSsn.requiredErrorMsg}`),
            [email.name]: Yup.string()
                .matches(emailRegEx, email.invalidErrorMsg)
                .required(`${email.requiredErrorMsg}`),
            [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
            [middleName.name]: Yup.string(),
            [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
            [street.name]: Yup.string().required(`${street.requiredErrorMsg}`),
            [city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
            [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
            [zip.name]: Yup.string().required(`${zip.requiredErrorMsg}`).test('age', 'Incorrectly filled in.', function(value) {
                if (!!value || value === 0) {
                    const schema = Yup.number().moreThan(0, 'Incorrectly filled in.');
                    return schema.isValidSync(value);
                }
                return true;
            }),
            [phone.name]: Yup.string().matches(phoneRegExp, phone.invalidErrorMsg).required(`${phone.requiredErrorMsg}`),
            [phoneOther.name]: Yup.string().matches(phoneRegExp, phone.invalidErrorMsg),
            [age.name]: Yup.number().notRequired().test('age', 'Incorrectly filled in.', function(value) {
                if (!!value || value === 0) {
                    const schema = Yup.number().moreThan(0, 'Incorrectly filled in.');
                    return schema.isValidSync(value);
                }
                return true;
            }),
        })
    }),
    null,
    Yup.object().shape({
        resume: Yup.mixed()
            .test('fileSize', 'File Size is too large',
            value => !value || value.size <= FILE_SIZE)
            .test('fileType', 'Unsupported File Format',
            value => !value || value && SUPPORTED_FORMATS.includes(value.type)),
        [workHistory.name]: Yup.boolean(),
        employers: Yup.array().when('workHistory', {
            is: value => !!value,
            then: Yup.array().of(Yup.object().shape({
                [companyName.name]: Yup.string().required(`${companyName.requiredErrorMsg}`),
                [eCity.name]: Yup.string().required(`${eCity.requiredErrorMsg}`),
                [eState.name]: Yup.string().required(`${eState.requiredErrorMsg}`),
                [supervisorName.name]: Yup.string().required(`${supervisorName.requiredErrorMsg}`),
                [companyPhone.name]: Yup.string().matches(phoneRegExp, companyPhone.invalidErrorMsg).required(`${companyPhone.requiredErrorMsg}`),
                [dateEmployedFrom.name]: Yup.date().max(new Date(), "Future date not allowed.")
                    .required(`${dateEmployedFrom.requiredErrorMsg}`),
                [dateEmployedTo.name]: Yup.date()
                    .when(
                        "dateEmployedFrom",
                        (eventStartDate, schema) => eventStartDate && schema.min(eventStartDate, "Can't be before employed."))
                    .required(`${dateEmployedTo.requiredErrorMsg}`),
                [describeJob.name]: Yup.string().required(`${describeJob.requiredErrorMsg}`),
                [reasonLeaving.name]: Yup.string().required(`${reasonLeaving.requiredErrorMsg}`),
            }))
        })
    }),
    Yup.object().shape({
        [iAgree.name]: Yup.boolean().oneOf([true], `${iAgree.requiredErrorMsg}`),
    })
];
