import { useState } from "react";
import { Mail, MapPin, Send, Phone, Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    formData.append("access_key", "9d9041a9-e678-4633-95fd-fb06365db03e");
    formData.append("subject", "New Portfolio Message from " + formData.get("name"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 py-24 dark:bg-gray-900"
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
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Let's work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              together
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Have an opportunity, project or idea you'd like to discuss?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                I'm open to discussing internships, full-time opportunities,
                freelance projects and technology collaborations.
              </p>

              <div className="mt-8 space-y-5">

                {/* Email */}
                <a
                  href="mailto:tejinderkaurgrewal22@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50 dark:border-gray-800 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                      tejinderkaurgrewal22@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50 dark:border-gray-800 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                      +91 7009285248
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 dark:border-gray-800">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                      Ludhiana, Punjab, India
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 dark:border-gray-800">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400">
                    <Briefcase size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      Availability
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                      Open to opportunities
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send a message
              </h3>

              <div className="mt-8 space-y-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your opportunity or project..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-500 dark:hover:text-white"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <Send size={17} />
                </button>

                {/* Feedback Messages */}
                {status === "success" && (
                  <p className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                    <CheckCircle2 size={18} />
                    Message sent! I'll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300">
                    Something went wrong. Please email me directly at tejinderkaurgrewal22@gmail.com.
                  </p>
                )}

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;