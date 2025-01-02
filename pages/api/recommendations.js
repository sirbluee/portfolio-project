// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Seangleng',
    image: "images/leng.jpg",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "I had the privilege of working alongside Osama on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Osama's professionalism and attention to detail shone brightly. I wholeheartedly endorse Osama for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "#"
  },
  {
    id: 1,
    name: 'Sun Jessica',
    image: "images/jessi.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Sophearum as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "#"
  },
  {
    id: 2,
    name: 'Navatt Takon',
    image: "images/somboleap.jpg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Sorn Sophearum for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "#"
  },
  {
    id: 3,
    name: 'Phon Sobon',
    image: "images/sobon.jpg",
    designation: 'GSR MERL | Grad student at UC Santa Cruz',
    view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
    linkednURL: "#"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
