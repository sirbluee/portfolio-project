const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'The University of Cambodia',
                degree: 'Information Technology',
                detail: "Bachelor's Degree in Information Technology from The University of Cambodia.",
                year: '2020-2024'
            },
            {
                id: 1,
                title: 'Center of Science and Technology Advanced Development',
                degree: 'Full Stack Web development, Data Analytics',
                detail: "The first generation completed the final project and got number one.",
                year: '2023'
            },
            // {
            //     id: 2,
            //     title: 'Camasean Internaltion School',
            //     degree: 'English Department',
            //     detail: "Completed the English level Intermedated",
            //     year: '2021-2022'
            // },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'SurveyBox',
                role: 'Junior Frontend Developer',
                url: 'https://surveybox.istad.co/',
                desc: 'As a junior frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '07/2023 - Present',
                location: 'Phnom Penh, Cambodia'
            },
            {
                id: 2,
                title: 'Computer Department',
                role: 'Teacher',
                url: 'no website',
                desc: 'I have worked as a teacher to learn about the foundations of computers for one year.',
                year: '02/2023 - Present',
                location: 'Phnom Penh, Cambodia'
            },
            {
                id: 3,
                title: 'SurveyBox',
                role: 'UI/UX Designer',
                url: 'https://surveybox.istad.co/',
                desc: "I worked on these projects and thought about the flow and creating new styling.",
                year: '07/2023',
                location: 'Phnom Penh, Cambodia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
