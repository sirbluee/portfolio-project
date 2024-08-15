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
            {
                id: 2,
                title: 'SabaiCode Bootcamp VI',
                degree: 'Full Stack Web development',
                detail: "Explore DevOps and web development using Graph API and Micro Frontends.",
                year: '2024'
            },
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
                id: 3,
                title: 'K-QuickSight',
                role: 'Full Stack Web Developer',
                url: 'https://surveybox.istad.co/',
                desc: "I worked on these projects and thought about the flow and creating new styling.",
                year: '07/2023',
                location: 'Phnom Penh, Cambodia'
            },
            {
                id: 4,  
                title: 'Internship',
                role: 'Full Stack Developer',
                url: 'https://surveybox.istad.co/',
                desc: 'As a Full Stack Developer, I use NextJS to build user interfaces for web applications and ExpressJS for Backend.',
                year: '03/2024 - 05/2024',
                location: 'Phnom Penh, Cambodia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
