import { ExternalLink, ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Java Quiz Application",
    category: "Full Stack Development",
    description:
      "A full-stack Java quiz platform with separate Admin and Student portals. The Admin portal manages quizzes and questions, while the Student portal allows students to participate in quizzes and view their results.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],

    github: "https://github.com/Tejinder2207/Java-Quiz",
    live: "#",
  },

  {
    title: "Digital Diary Platform",
    category: "AI / Backend",
    description:
      "A digital diary application with a FastAPI backend and Streamlit frontend, designed for managing personal diary entries digitally.",
    technologies: ["Python", "FastAPI", "Streamlit", "Uvicorn"],
    github:
      "https://github.com/Tejinder2207/Render-Fastapi-Project-Digital-Diary-Platform-",
    live: "https://tejinder-digital-diary.streamlit.app/",
  },

  {
    title: "Adaptive Shield",
    category: "Machine Learning",
    description:
      "A machine learning-based spam detection system designed to classify emails or messages as Spam or Ham. The project uses an adaptive learning approach to improve classification as new data becomes available.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "MLflow",
      "ONNX",
    ],

    github: "https://github.com/Tejinder2207/Adaptive-Shield",
    live: "https://adaptive-shield.onrender.com/",
  },

  {
    title: "Power BI Amazon Sales Dashboard",
    category: "Data Analytics",
    description:
      "An interactive sales dashboard designed to transform sales data into useful visual insights and business-oriented metrics.",
    technologies: ["Power BI", "Data Analysis", "Data Visualization"],
    github:
      "https://github.com/Tejinder2207/Amazon-Seller-Performance-and-Customer-Analytics-Dashboard",
    live: "#",
  },

  {
    title: "Monthly Expense Manager",
    category: "Web Application",
    description:
      "A practical application for recording, organizing and monitoring monthly expenses.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Tejinder2207/Monthly-Expense-Manager",
    live: "#",
  },
  {
    title: "EndoKido",
    category: "Web Application",
    description:
      "Responsive WordPress website built for a pediatric endocrinology clinic, featuring specialty care pages, service directories, FAQ and blog sections, and appointment information.",
    technologies: [
      "WordPress",
      "Responsive UI",
      "Healthcare UX",
      "SEO Structure",
    ],
    github: "#",
    live: "https://endokiddo.com/",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24 dark:bg-gray-900">
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
            Featured Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Projects I've{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              built
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A selection of projects across full-stack development, Artificial
            Intelligence, Machine Learning and Data Analytics.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-950"
            >
              {/* Project Visual */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

                <div className="relative text-center">
                  <div className="text-5xl font-bold text-white/90">
                    {project.title.charAt(0)}
                  </div>

                  <p className="mt-2 text-sm font-medium text-white/80">
                    {project.category}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute right-5 top-5 flex h-10 w-10 translate-x-2 -translate-y-2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <div className="mt-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      Key Features
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 p-6 dark:border-gray-800">
                {/* GitHub */}
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  <Code2 size={17} />
                  GitHub
                </a>

                {/* Live Demo */}
                <a
                  href={project.live}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;