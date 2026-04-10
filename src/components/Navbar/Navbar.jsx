import images from "../../constrants/images";
import text from "../../constrants/text";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div
      className={`flex justify-between items-center ${styles.bgNavbar} px-90`}
    >
      <div className="w-[250px] flex items-center">
        <img className="w-[55px]" src={images.logo} alt="logo" />
        <h2 className={`${styles.primaryText} font-bold text-xl`}>
          {text.appName}
        </h2>
      </div>

      <ul className="flex gap-[32px] font-bold text-sm text-[#4B5564]">
        <Link
          to="/"
          className="pb-2 border-b-[2px] border-transparent transition-all duration-500 hover:border-[#2EA5E7] hover:text-[#2EA5E7] hover:transition-all hover:duration-500"
        >
          {text.navbar.home}
        </Link>
        <Link
          to="/features"
          className="pb-2 border-b-[2px] border-transparent transition-all duration-500 hover:border-[#2EA5E7] hover:text-[#2EA5E7] hover:transition-all hover:duration-500"
        >
          {text.navbar.features}
        </Link>
        <Link
          to="/about"
          className="pb-2 border-b-[2px] border-transparent transition-all duration-500 hover:border-[#2EA5E7] hover:text-[#2EA5E7] hover:transition-all hover:duration-500"
        >
          {text.navbar.about}
        </Link>
        <Link
          to="/download"
          className="pb-2 border-b-[2px] border-transparent transition-all duration-500 hover:border-[#2EA5E7] hover:text-[#2EA5E7] hover:transition-all hover:duration-500"
        >
          {text.navbar.download}
        </Link>
        <Link
          to="/contact"
          className="pb-2 border-b-[2px] border-transparent transition-all duration-500 hover:border-[#2EA5E7] hover:text-[#2EA5E7] hover:transition-all hover:duration-500"
        >
          {text.navbar.contact}
        </Link>
      </ul>

      <div className="flex gap-3 transform-flat">
        <Link
          to="/"
          className={`font-bold text-sm py-3 px-5 text-[#4B5564] cursor-pointer hover:${styles.primaryText} hover:underline hover:transition-all hover:text-[#2EA5E7]`}
        >
          {text.navbar.login}
        </Link>
        <button
          className={`font-bold text-sm py-3 rounded-full px-6 cursor-pointer transition-all duration-500 ${styles.primaryBg}  hover:-translate-y-1 hover:transition-all hover:duration-500 hover:shadow-2xl hover:shadow-blue-500/50 `}
        >
          {text.navbar.signup}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
