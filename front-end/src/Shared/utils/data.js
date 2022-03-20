export const user = [
    {
        userID: 1,
        first_name: 'paul',
        last_name: 'devlin',
        email: 'pd@email.com',
        password: '1234',
        admin: true,
    },
    {
        userID: 2,
        first_name: 'john',
        last_name: 'moore',
        email: 'jm@email.com',
        password: '1234',
        admin: false,
    },
    {
        userID: 3,
        first_name: 'kevin',
        last_name: 'heleodoro',
        email: 'kh@email.com',
        password: '1234',
        admin: true,
    },
    {
        userID: 4,
        first_name: 'nick',
        last_name: 'raffaele',
        email: 'nr@email.com',
        password: '1234',
        admin: false,
    },
    {
        userID: 5,
        first_name: 'isaias',
        last_name: 'nuno',
        email: 'in@email.com',
        password: '1234',
        admin: false,
    },
    {
        userID: 6,
        first_name: 'fernando',
        last_name: 'curiel',
        email: 'fc@email.com',
        password: '1234',
        admin: false,
    },
];

const singleUser = [
    {
        userID: 6,
        group_name: 'MCSP-10',
        first_name: 'fernando',
        last_name: 'curiel',
        email: 'fc@email.com',
        password: '1234',
        admin: false,
        applications: [
            {
                app_Id: 1,
                company: 'Google',
                job_title: 'SWE',
                deadline: Date.now(),
                job_url: '',
                description: 'it rocks',
                status: 'interested',
                salary: 100000,
                location: 'Remote',
                comments: [
                    {
                        comment_id: 1,
                        admin_name: 'Caroline',
                        body: 'good job bro you are killing it',
                        time_stamp: Date.now(),
                    },
                ],
                updates: [
                    {
                        body: 'la la la la la la la',
                        time_stamp: Date.now(),
                    },
                ],
            },
        ],
    },
    // {
    //     userID: 6,
    //     first_name: 'fernando',
    //     last_name: 'curiel',
    //     email: 'fc@email.com',
    //     password: '1234',
    //     admin: false,
    //     applications: [
    //         {
    //             app_Id: 2,
    //             company: 'Google',
    //             job_title: 'SWE',
    //             deadline: Date.now(),
    //             job_url: '',
    //             description: 'it rocks my socks off',
    //             status: 'applied',
    //             salary: 100000,
    //             location: 'space station',
    //             comments: [
    //                 {
    //                     comment_id: 2,
    //                     admin_name: 'Caroline',
    //                     body: 'ill be back',
    //                     time_stamp: Date.now(),
    //                 },
    //             ],
    //             updates: [
    //                 {
    //                     body: 'well i got the job',
    //                     time_stamp: Date.now(),
    //                 },
    //             ],
    //         },
    //     ],
    // },
];
export default singleUser;

export const applications = [
    {
        id: 1,
        company: 'Google',
        job_title: 'Front End Engineer',
        logo: 'https://logo.clearbit.com/google.com',
        status: 'Interested',
    },
    {
        id: 2,
        company: 'Netflix',
        job_title: 'Back End Engineer',
        logo: 'https://logo.clearbit.com/netflix.com',
        status: 'Applied',
    },
    {
        id: 3,
        company: 'LinkedIn',
        job_title: 'Full Stack Engineer Apprentice',
        logo: 'https://logo.clearbit.com/linkedin.com',
        status: 'Applied',
        deadline: 'tomorrow',
        salary: 100000,
        location: 'Los Angeles, CA',
        url: 'www.linkedin.com',
        comments: [
            {
                content:
                    'Nice job on this. You are candidate number 1. I want my kids to be like you when they grow up.',
                author: 'Mike Jones',
                time_stamp: Date.now(),
            },
            {
                content: 'Call the person',
                author: 'Mike Jones',
                time_stamp: Date.now(),
            },
            {
                content: 'Horrible job on this',
                author: 'Mike Jones',
                time_stamp: Date.now(),
            },
        ],
    },
    {
        id: 4,
        company: 'Apple',
        job_title: 'Front End Engineer',
        logo: 'https://logo.clearbit.com/apple.com',
        status: 'Interested',
    },
    {
        id: 5,
        company: 'Walmart',
        job_title: 'Back End Engineer',
        logo: 'https://logo.clearbit.com/walmart.com',
        status: 'Rejected',
    },
    {
        id: 6,
        company: 'Facebook',
        job_title: 'Full Stack Engineer',
        logo: 'https://logo.clearbit.com/facebook.com',
        status: 'Interviewing',
    },
    {
        id: 7,
        company: 'Yahoo',
        job_title: 'Front End Engineer',
        logo: 'https://logo.clearbit.com/yahoo.com',
        status: 'Offered',
    },
];
