import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Award,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    type: "Internship",
    title: "Data Mining Intern",
    organization: "GAO Tek International",
    period: "August 2026",
    location: "Remote",
    description:
      "Worked on data mining and lead generation activities, including researching prospects, applying data filters, extracting relevant information, and organizing data for business use.",
    skills: [
      "Data Mining",
      "Lead Generation",
      "Data Research",
      "Data Management",
    ],
    icon: BriefcaseBusiness,
  },
  {
    type: "Training",
    title: "Data Science & AI Training",
    organization: "Sabudh Foundation",
    period: "January2026-July 2026",
    location: "India",
    description:
      "Completed training focused on Data Science and Artificial Intelligence, working with Python, data analysis, machine learning concepts, visualization and practical projects.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Data Analysis",
    ],
    icon: Award,
  },
  {
    type: "Education",
    title: "B.Tech in Information Technology",
    organization: "Guru Nanak Dev Engineering College (GNDEC)",
    period: "Graduated 2026",
    location: "Ludhiana, Punjab",
    description:
      "Completed a Bachelor of Technology in Information Technology with a focus on software development, databases, data science, web technologies and emerging AI technologies.",
    skills: [
      "Information Technology",
      "Web Development",
      "Databases",
      "Data Science",
      "AI",
    ],
    icon: GraduationCap,
  },
    {
    type: "Training",
    title: "MERN Stack Training",
    organization: "Aptech, Ludhiana",
    period: "June – July 2025",
    location: "Ludhiana, Punjab",
    description:
      "Completed training focused on MERN stack development and building full-stack web applications using modern web technologies.",
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Full Stack Development",
    ],
    icon: BriefcaseBusiness,
  },
  {
    type: "Training",
    title: "Full Stack Web Development",
    organization: "Ansh Infotech, Ludhiana",
    period: "June – July 2024",
    location: "Ludhiana, Punjab",
    description:
      "Completed training in full-stack web development with practical exposure to frontend and backend web technologies.",
    skills: [
      "Web Development",
      "Frontend",
      "Backend",
      "JavaScript",
    ],
    icon: BriefcaseBusiness,
  },
  {
    type: "Training",
    title: "Python Programming",
    organization: "Infosys Springboard",
    period: "June – July 2023",
    location: "Online",
    description:
      "Completed Python programming training covering fundamental programming concepts and practical development skills.",
    skills: [
      "Python",
      "Programming",
      "Problem Solving",
    ],
    icon: BriefcaseBusiness,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
            My journey through education, practical experience and continuous
            learning in technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gray-200 dark:bg-gray-800 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={`${experience.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: isRight ? 40 : -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`relative md:flex md:items-center ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-8 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-md dark:border-gray-950 md:flex md:left-1/2 md:-translate-x-1/2">
                    <Icon size={17} />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[44%] ${
                      isRight ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900">

                      {/* Top Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3">

                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          {experience.type}
                        </span>

                        {/* Date */}
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {experience.period}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>

                      {/* Organization */}
                      <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
                        {experience.organization}
                      </p>

                      {/* Location */}
                      <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin size={15} />
                        {experience.location}
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {experience.description}
                      </p>

                      {/* Skills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-8 dark:border-blue-950 dark:bg-blue-950/20">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Always learning. Always building.
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              I enjoy turning what I learn into practical projects and
              continuously improving my technical and problem-solving skills.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;