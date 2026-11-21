import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Eduacation, Training & Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-gray-950">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="text-2xl font-bold tracking-tight text-white"
        >
          TG<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}

          {/* Dark / Light Mode */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">

          {/* Theme Button */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-gray-300 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-800 bg-gray-950 md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-5">

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-gray-900 hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;