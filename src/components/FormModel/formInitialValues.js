import checkoutFormModel from "./formModel";
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
            age,
            availability: {
                shiftFirst,
                shiftSecond,
                shiftThird,
                comment,
                weekends,
                overtime,
                ableStartDate,
                howLearnAboutCompany,
                everWorkedForCompany,
                knowAnyoneWhoWorks,
                legallyAuthorized,
                sponsorshipRequire,
            },
            military: {
                militaryServed
            }
        },
        education: {
            highSchool,
            university,
            technical,
            other
        },
        employers,
        references
    }
} = checkoutFormModel;

export default {
    personalData: {
        [fullName.name]: "",
        [email.name]: "",
        [position.name]: "",
        [positionDate.name]: "",
        [salary.name]: "",
        [lastNumSsn.name]: "",
        [firstName.name]: "",
        [middleName.name]: "",
        [lastName.name]: "",
        [street.name]: "",
        [city.name]: "",
        [state.name]: "",
        [zip.name]: "",
        [phone.name]: "",
        [phoneOther.name]: "",
        [age.name]: "",
        availability: {
            [shiftFirst.name]: false,
            [shiftSecond.name]: false,
            [shiftThird.name]: false,
            [comment.name]: "",
            [weekends.name]: false,
            [overtime.name]: false,
            [ableStartDate.name]: "",
            [howLearnAboutCompany.name]: "",
            [everWorkedForCompany.name]: false,
            [knowAnyoneWhoWorks.name]: false,
            [legallyAuthorized.name]: false,
            [sponsorshipRequire.name]: false,
        },
        military: {
            [militaryServed.name]: false,
        }
    },
    education: {
        highSchool: {
            [highSchool.address.name]: "",
            [highSchool.graduate.name]: false,
            [highSchool.institution.name]: "",
            [highSchool.license.name]: "",
            [highSchool.comment.name]: ""
        },
        university: {
            [university.address.name]: "",
            [university.graduate.name]: false,
            [university.institution.name]: "",
            [university.license.name]: "",
            [university.comment.name]: ""
        },
        technical: {
            [technical.address.name]: "",
            [technical.graduate.name]: false,
            [technical.institution.name]: "",
            [technical.license.name]: "",
            [technical.comment.name]: ""
        },
        other: {
            [other.address.name]: "",
            [other.graduate.name]: false,
            [other.institution.name]: "",
            [other.license.name]: "",
            [other.comment.name]: ""
        }
    },
    employers: [
        {
            [employers[0].companyName.name]: "",
            [employers[0].staffingAgency.name]: false,
            [employers[0].address.name]: "",
            [employers[0].city.name]:"",
            [employers[0].state.name]: "",
            [employers[0].supervisorName.name]: "",
            [employers[0].companyPhone.name]: "",
            [employers[0].mayWeContact.name]: false,
            [employers[0].dateEmployedFrom.name]: "",
            [employers[0].dateEmployedTo.name]: "",
            [employers[0].lastWage.name]: "",
            [employers[0].describeJob.name]: "",
            [employers[0].reasonLeaving.name]: ""
        }
    ],
    references: [
        {
            [references[0].name.name]: "",
            [references[0].address.name]: "",
            [references[0].phone.name]: "",
            [references[0].relationship.name]: ""
        }
    ],
    resume: null,
    workHistory: false,
    iAgree: false
};
