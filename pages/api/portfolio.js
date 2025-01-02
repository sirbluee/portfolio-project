const portfolio = [
    {
        id: 0,
        projectName: "SurveyBox",
        url: "https://surveybox.istad.co/",
        image: "projects/surveybox.jpg",
        projectDetail: "SurveyBox, an online survey service developed in 2023 by Institute of Science and Technology Advanced Development students, allows users to create, distribute, and analyze surveys for data-driven decision-making.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NextJS"
            },
            {
                tech: ".co"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "K-QuickSight",
        url: "https://k-quicksight.istad.co/",
        image: "https://k-quicksight.istad.co/assets/logos/logo.png",
        projectDetail: "Catalyze your data journey with our powerful tools for discovery, analysis, and informed decision-making. Explore your data full potential and drive success with confidence.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "Spring Boot"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "MUI"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Spatay",
        url: "https://spatay.com/",
        image: "projects/spatay.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Culyte",
        url: "https://culyte.com",
        image: "projects/culyte.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
