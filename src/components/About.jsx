import { Code2, Brain, Database, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech in IT",
      description: "Information Technology graduate with a strong technical foundation.",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building responsive web applications using modern technologies.",
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Exploring AI, machine learning, data analysis and practical solutions.",
    },
    {
      icon: Database,
      title: "Problem Solving",
      description: "Enjoy creating practical projects that solve real-world problems.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gray-50 py-24 dark:bg-gray-900"
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
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Turning curiosity into{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              practical solutions
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
            I'm a technology enthusiast who enjoys learning, building and
            experimenting with different areas of technology.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              A little about my journey
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400">
              <p>
                I completed my B.Tech in Information Technology and developed
                an interest in building technology solutions that are useful,
                accessible and practical.
              </p>

              <p>
                My learning journey has taken me across web development,
                databases, Data Science, Artificial Intelligence and modern
                development tools.
              </p>

              <p>
                I enjoy working on projects where I can combine technical
                knowledge with creativity and problem-solving. I'm especially
                interested in AI-powered applications and beginner-friendly
                technology solutions.
              </p>
            </div>

            {/* Small Quote */}
            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/40 dark:bg-blue-950/30">
              <p className="text-lg font-medium italic text-gray-800 dark:text-gray-200">
                "Not perfect, but always improving."
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                Learn • Build • Improve • Repeat
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/40 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;