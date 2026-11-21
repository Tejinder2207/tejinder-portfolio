import { ArrowRight, Download, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "../assets/ProfileImg.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-white pt-20 dark:bg-gray-950"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small Introduction */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            AI • Web Development • Data
          </p>

          {/* Main Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tejinder Kaur
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 sm:text-3xl">
            AI Enthusiast & Full Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            I build practical web applications, explore Artificial Intelligence
            and Data Science, and create technology solutions that are simple,
            useful, and impactful.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Projects Button */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-blue-600 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Resume Button */}
            <a
              href="/TejinderKaur.pdf"
              download="TejinderKaur.pdf"
              className="relative z-10 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              <Download size={18} />
              Download Resume
            </a>
            {/* Resume Button */}
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/tejinder2207"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-600 transition hover:border-gray-900 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:border-white dark:hover:text-white"
            >
              <Code2 size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tejinder-kaur-bab795315/"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-sm font-bold text-gray-600 transition hover:border-blue-600 hover:text-blue-600 dark:border-gray-800 dark:text-gray-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              in
            </a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-2xl dark:border-gray-800 dark:bg-gray-900">
            {/* Temporary Profile Visual */}
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="mb-6 flex h-56 w-56 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-4xl font-bold text-white shadow-xl sm:h-64 sm:w-64">
                <img
                  src={profileImg}
                  alt="Tejinder Kaur"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Building with Technology
              </p>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                AI • Web • Data
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;