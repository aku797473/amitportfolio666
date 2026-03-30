import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
      
      <div className="max-w-8xl mx-auto px-6 py-10 text-center">
        
        <h2 className="text-2xl font-semibold mb-4">
          Amit Kumar Mishra<span className="text-blue-400">.</span>
        </h2>

        <div className="flex justify-center gap-6 mb-6 text-xl">
          
          <a href="https://github.com/aku797473" target="_blank" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>

          <a href="https://www.instagram.com/x_ak666_y/" target="_blank" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/amit-kumar-mishra-575b3332b/" target="_blank" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>

          <a href="https://leetcode.com/u/x_ak7974_y/" target="_blank" className="hover:text-yellow-400 transition">
            <SiLeetcode />
          </a>

        </div>

        <p className="text-gray-400 text-sm">
          © 2026 Amit Kumar Mishra. All rights reserved.
        </p>

        {/* Triangle */}
        <div className="flex justify-center mt-4">
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-blue-400"></div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;