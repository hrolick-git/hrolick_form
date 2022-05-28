export default {
    formId: 'appForm',
    formField: {
        personalData: {
            fullName: {
                name: 'fullName',
                label: 'Full name',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 12,
            },
            email: {
                name: 'email',
                label: 'Email',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                invalidErrorMsg: 'Incorrectly filled in.',
                col: 4,
            },
            position: {
                name: 'position',
                label: 'Position applied for',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 8,
            },
            positionDate: {
                name: 'positionDate',
                label: 'Date',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                invalidErrorMsg: 'Incorrectly filled in.',
                col: 4,
            },
            salary: {
                name: 'salary',
                label: 'Salary/wage expectations',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 4,
            },
            lastNumSsn: {
                name: 'lastNumSsn',
                label: 'Last 4 numbers of your ssn',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                invalidErrorMsg: 'Incorrectly filled in.',
                col: 4,
                type: 'ssn'
            },
            firstName: {
                name: 'firstName',
                label: 'First Name',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 4,
            },
            middleName: {
                name: 'middleName',
                label: 'Middle Name',
                required: false,
                requiredErrorMsg: 'This is a required field.',
                col: 4,
            },
            lastName: {
                name: 'lastName',
                label: 'Last Name',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 4,
            },
            street: {
                name: 'street',
                label: 'Street Address',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 12,
            },
            city: {
                name: 'city',
                label: 'City',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 4,
            },
            state: {
                name: 'state',
                label: 'State',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 4,
            },
            zip: {
                name: 'zip',
                label: 'Zip Code',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                col: 4,
                type: 'number'
            },
            phone: {
                name: 'phone',
                label: 'Telephone/Cell',
                required: true,
                requiredErrorMsg: 'This is a required field.',
                invalidErrorMsg: 'Incorrectly filled in.',
                col: 4,
                type: 'phone'
            },
            phoneOther: {
                name: 'phoneOther',
                label: 'Other Telephone',
                required: false,
                invalidErrorMsg: 'Incorrectly filled in.',
                col: 4,
                type: 'phone'
            },
            age: {
                name: 'age',
                label: 'Specify your age',
                required: false,
                col: 4,
                type: "number"
            },
            availability: {
                shiftFirst: {
                    name: 'shiftFirst',
                    label: '1st (7a~3p)',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                shiftSecond: {
                    name: 'shiftSecond',
                    label: '2nd (3p~11p)',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                shiftThird: {
                    name: 'shiftThird',
                    label: '3rd (11p~7a)',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                comment: {
                    name: 'comment',
                    label: 'Comment',
                    required: false,
                    col: 12,
                    type: "textarea",
                    rows: 4
                },
                weekends: {
                    name: 'weekends',
                    label: 'Are you available to work weekends?',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 4,
                    type: "checkbox"
                },
                overtime: {
                    name: 'overtime',
                    label: 'Will you work overtime, if required?',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 4,
                    type: "checkbox",
                    break: true,
                    note: 'It is not necessary for you to identify unavailability for work because of religious observance or practice or any other protected classification. Subsequent to any job offer, we will consider whether a reasonable accommodation can be made.'
                },
                ableStartDate: {
                    name: 'ableStartDate',
                    label: 'When will you be able to start work?',
                    required: false,
                    col: 4,
                    type: "date"
                },
                howLearnAboutCompany: {
                    name: 'howLearnAboutCompany',
                    label: 'How did you learn of the Company?',
                    required: false,
                    col: 8,
                    type: "text"
                },
                everWorkedForCompany: {
                    name: 'everWorkedForCompany',
                    label: 'Have you ever applied or worked for the Company before?',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                knowAnyoneWhoWorks: {
                    name: 'knowAnyoneWhoWorks',
                    label: 'Do you know anyone who works here?',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                legallyAuthorized: {
                    name: 'legallyAuthorized',
                    label: 'Are you legally authorized to work in the United States?',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                sponsorshipRequire: {
                    name: 'sponsorshipRequire',
                    label: 'Will you now or in the future require sponsorship for employment visa status (e.g.,H-1B visa status)?',
                    required: false,
                    col: 8,
                    type: "checkbox",
                    note: "The Federal Immigration and Reform and Control Act of 1986 requires that a DHS Employment Eligibility Verification “Form I-9” be completed for every new hire and that within 3 business days of beginning work every new hire must present to the employer documentation establishing his/her identity and authorization to work. This federal requirement must be satisfied as a condition of employment.",
                    break: true
                },
            },
            military: {
                militaryServed: {
                    name: 'militaryServed',
                    label: 'Have you ever served in the military?',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
            }
        },
        education: {
            highSchool: {
                address: {
                    name: 'address',
                    label: 'Name, City and State of Educational Institution',
                    required: false,
                    col: 12,
                    type: "text"
                },
                graduate: {
                    name: 'graduate',
                    label: 'Graduate',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                institution: {
                    name: 'institution',
                    label: 'Institution or Provider',
                    required: false,
                    col: 4,
                    type: "text"
                },
                license: {
                    name: 'license',
                    label: 'License or Certification Title',
                    required: false,
                    col: 4,
                    type: "text"
                },
                comment: {
                    name: 'comment',
                    label: 'Comment',
                    required: false,
                    col: 12,
                    type: "textarea",
                    rows: 8
                },
            },
            university: {
                address: {
                    name: 'address',
                    label: 'Name, City and State of Educational Institution',
                    required: false,
                    col: 12,
                    type: "text"
                },
                graduate: {
                    name: 'graduate',
                    label: 'Graduate',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                institution: {
                    name: 'institution',
                    label: 'Institution or Provider',
                    required: false,
                    col: 4,
                    type: "text"
                },
                license: {
                    name: 'license',
                    label: 'License or Certification Title',
                    required: false,
                    col: 4,
                    type: "text"
                },
                comment: {
                    name: 'comment',
                    label: 'Comment',
                    required: false,
                    col: 12,
                    type: "textarea",
                    rows: 8,
                },
            },
            technical: {
                address: {
                    name: 'address',
                    label: 'Name, City and State of Educational Institution',
                    required: false,
                    col: 12,
                    type: "text"
                },
                graduate: {
                    name: 'graduate',
                    label: 'Graduate',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                institution: {
                    name: 'institution',
                    label: 'Institution or Provider',
                    required: false,
                    col: 4,
                    type: "text"
                },
                license: {
                    name: 'license',
                    label: 'License or Certification Title',
                    required: false,
                    col: 4,
                    type: "text"
                },
                comment: {
                    name: 'comment',
                    label: 'Comment',
                    required: false,
                    col: 12,
                    type: "textarea",
                    rows: 8
                },
            },
            other: {
                address: {
                    name: 'address',
                    label: 'Name, City and State of Educational Institution',
                    required: false,
                    col: 12,
                    type: "text"
                },
                graduate: {
                    name: 'graduate',
                    label: 'Graduate',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                institution: {
                    name: 'institution',
                    label: 'Institution or Provider',
                    required: false,
                    col: 4,
                    type: "text"
                },
                license: {
                    name: 'license',
                    label: 'License or Certification Title',
                    required: false,
                    col: 4,
                    type: "text"
                },
                comment: {
                    name: 'comment',
                    label: 'Comment',
                    required: false,
                    col: 12,
                    type: "textarea",
                    rows: 8
                },
            }
        },
        employers: [
            {
                companyName: {
                    name: 'companyName',
                    label: 'Company Name',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 8,
                    type: "text"
                },
                staffingAgency: {
                    name: 'staffingAgency',
                    label: 'Is this a Staffing Agency?',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 4,
                    type: "checkbox"
                },
                address: {
                    name: 'address',
                    label: 'Address',
                    required: false,
                    col: 4,
                    type: "text"
                },
                city: {
                    name: 'city',
                    label: 'City',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 4,
                    type: "text"
                },
                state: {
                    name: 'state',
                    label: 'State',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 4,
                    type: "text"
                },
                supervisorName: {
                    name: 'supervisorName',
                    label: 'Supervisor Name',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 4,
                    type: "text"
                },
                companyPhone: {
                    name: 'companyPhone',
                    label: 'Company Phone',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    invalidErrorMsg: 'Incorrectly filled in.',
                    col: 4,
                    type: "phone"
                },
                mayWeContact: {
                    name: 'mayWeContact',
                    label: 'May we contact?',
                    required: false,
                    col: 4,
                    type: "checkbox"
                },
                dateEmployedFrom: {
                    name: 'dateEmployedFrom',
                    label: 'Date Employed From',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 4,
                    type: "date"
                },
                dateEmployedTo: {
                    name: 'dateEmployedTo',
                    label: 'Date Employed To',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 4,
                    type: "date"
                },
                lastWage: {
                    name: 'lastWage',
                    label: 'Last Wage',
                    required: false,
                    col: 4,
                    type: "text"
                },
                describeJob: {
                    name: 'describeJob',
                    label: 'Describe Job',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 12,
                    type: "text"
                },
                reasonLeaving: {
                    name: 'reasonLeaving',
                    label: 'Reason for leaving',
                    required: true,
                    requiredErrorMsg: 'This is a required field.',
                    col: 12,
                    type: "text"
                }
            }
        ],
        references: [
            {
                name: {
                    name: 'name',
                    label: 'Name',
                    required: false,
                    col: 6,
                    type: "text"
                },
                address: {
                    name: 'address',
                    label: 'Address',
                    required: false,
                    col: 6,
                    type: "text"
                },
                phone: {
                    name: 'phone',
                    label: 'Phone',
                    required: false,
                    col: 6,
                    type: "phone"
                },
                relationship: {
                    name: 'relationship',
                    label: 'Relationship',
                    required: false,
                    col: 6,
                    type: "text"
                },
            }
        ],
        resume: {
            name: 'resume',
            label: 'Attach Resume',
            required: false,
            col: 12,
            type: "file",
            rows: 8
        },
        workHistory: {
            name: 'workHistory',
            label: 'Do you have any work history (count all temporary work, independent work etc.)?',
            required: true,
            col: 6,
            type: "checkbox"
        },
        iAgree: {
            name: 'iAgree',
            label: ' I agree that I have read and understand this APPLICANT’S ACKNOWLEDGMENT',
            required: true,
            requiredErrorMsg: 'This is a required field.',
            col: 6,
            type: "checkboxMini"
        }
    }
};
