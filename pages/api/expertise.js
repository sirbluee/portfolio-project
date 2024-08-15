const expertise = [
  {
    id: 0,
    title: "Full Stack Development",
    desc: "I am a skilled full stack web developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.",
  },
  {
    id: 4,
    title: "Scrum Project Manager",
    desc: "Skilled in leading Agile teams using Scrum to deliver projects efficiently. Proficient in facilitating Scrum ceremonies, managing backlogs, and resolving impediments to ensure timely project completion and alignment with business goals.",
  },
  {
    id: 1,
    title: "Data Analyst",
    desc: "Skilled in collecting, cleaning, and analyzing data to extract meaningful insights and solve business problems. Strong understanding of statistical methods, data visualization tools, and machine learning algorithms. Effective communicator, able to present complex data findings clearly to both technical and non-technical audiences.",
  },
  {
    id: 3,
    title: "Github",
    desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
