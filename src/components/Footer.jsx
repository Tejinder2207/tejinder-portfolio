import { ArrowUp, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo / Intro */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              TG<span className="text-blue-500">.</span>
            </a>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              AI enthusiast and full stack developer building practical
              technology solutions.
            </p>
          </div>

          {/* Email */}
          <a
            href="tejinderkaurgrewal22@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-blue-400"
          >
            <Mail size={17} />
            Get in touch
          </a>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Tejinder Kaur. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;