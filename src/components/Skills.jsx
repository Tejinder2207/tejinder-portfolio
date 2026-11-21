
import {
  Code2,
  Brain,
  Database,
  BarChart3,
  GitBranch,
  Wrench,
  Search,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

const skillGroups = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building modern, responsive web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "REST APIs",
      "Wordpress"
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Exploring practical AI and machine learning solutions.",
    skills: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "EDA",
      "ONNX",
      "MLflow",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    description: "Working with structured and NoSQL data.",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "MySQL",
      "SQL",
      "Database Design",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Visualization",
    description: "Turning data into useful insights and visualizations.",
    skills: [
      "Power BI",
      "Matplotlib",
      "Data Analysis",
      "Data Cleaning",
      "Data Visualization",
      "Excel",
    ],
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    description: "Tools used to build, manage and deploy projects.",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "VS Code",
      "Axios",
      "Postman",
    ],
  },
  {
    icon: Wrench,
    title: "Backend & APIs",
    description: "Creating APIs and connecting applications with services.",
    skills: [
      "FastAPI",
      "Uvicorn",
      "Node.js",
      "Express.js",
      "REST API",
      "Cloudinary",
    ],
  },
  {
    icon: Search,
    title: "Data Mining & Lead Generation",
    description: "Researching companies, collecting business data and identifying potential leads.",
    skills: [
      "Data Mining",
      "Lead Generation",
      "Apollo.io",
      "LinkedIn Research",
      "Google Maps Research",
      "Company Research",
      "Email Verification",
      "Data Collection",
      "Excel Data Management",
    ],
  },
  {
    icon: Users,
    title: "Telecalling & HR Services",
    description: "Supporting candidate communication and recruitment coordination.",
    skills: [
      "Telecalling",
      "Candidate Communication",
      "Candidate Follow-ups",
      "Initial Candidate Screening",
      "Interview Scheduling",
      "HR Coordination",
      "Communication Skills",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Skills & Technologies
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Tools I use to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              build ideas
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A growing skill set across web development, AI,
            data science, backend development, data research
            and professional communication.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900 dark:hover:bg-gray-900"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
