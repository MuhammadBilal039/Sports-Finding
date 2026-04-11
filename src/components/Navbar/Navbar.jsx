import { useState } from "react";
import images from "../../constrants/images";
import text from "../../constrants/text";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { to: "/", label: text.navbar.home },
  { to: "/features", label: text.navbar.features },
  { to: "/about", label: text.navbar.about },
  { to: "/download", label: text.navbar.download },
  { to: "/contact", label: text.navbar.contact },
];

const linkClass =
  "pb-1 border-b-[2px] border-transparent transition-all duration-300 hover:border-[#2EA5E7] hover:text-[#2EA5E7]";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`relative w-full ${styles.bgNavbar}`}>
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            className="w-10 sm:w-12 lg:w-[55px]"
            src={images.logo}
            alt="logo"
          />
          <h2
            className={`${styles.primaryText} font-bold text-base sm:text-lg lg:text-xl`}
          >
            {text.appName}
          </h2>
        </Link>

        <ul className="hidden lg:flex gap-6 xl:gap-8 font-bold text-sm text-[#4B5564]">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className={linkClass}>
              {label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="font-bold text-sm py-2.5 px-5 text-[#4B5564] hover:text-[#2EA5E7] hover:underline transition-all duration-300"
          >
            {text.navbar.login}
          </Link>
          <button
            className={`font-bold text-sm py-2.5 px-6 rounded-full cursor-pointer transition-all duration-300 ${styles.primaryBg} hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40`}
          >
            {text.navbar.signup}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#4B5564] hover:text-[#2EA5E7] hover:bg-blue-50 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } ${styles.bgNavbar} border-t border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col py-4 gap-1 font-bold text-sm text-[#4B5564]">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 rounded-lg border-b border-gray-100 hover:text-[#2EA5E7] hover:bg-blue-50 transition-all duration-300"
              >
                {label}
              </Link>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pb-5 pt-2">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-sm py-3 px-5 text-center text-[#4B5564] border border-gray-200 rounded-full hover:text-[#2EA5E7] hover:border-[#2EA5E7] transition-all duration-300"
            >
              {text.navbar.login}
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className={`font-bold text-sm py-3 px-6 rounded-full cursor-pointer transition-all duration-300 ${styles.primaryBg} hover:shadow-lg hover:shadow-blue-500/40`}
            >
              {text.navbar.signup}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
