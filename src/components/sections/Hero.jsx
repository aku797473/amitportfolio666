import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero min-h-screen flex flex-col items-center justify-center px-4 bg-sky-900">

      {/* Profile Image */}
      <div className="profile relative mb-8 group">
        <img
          src="/amit1.jpeg"
          alt="Amit Kumar Mishra"
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border-4 border-white shadow-md object-cover"
        />
        <span className="absolute bottom-1 right-1 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">
          Available
        </span>
      </div>

      {/* Card */}
      <div className="card text-center max-w-xl w-full bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg">
        
        <h1 className="title text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Amit Kumar Mishra
          </span>
        </h1>

        <p className="subtitle text-gray-200 text-sm sm:text-base mb-2">
          Frontend Developer | React | Tailwind
        </p>

        <p className="desc text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
          I build modern, responsive web applications with clean UI and smooth user experience.
        </p>

        <div className="btn-group flex gap-3 justify-center flex-wrap">
          <a
            href="/projects"
            className="btn-primary px-5 py-2 bg-green-500 text-white rounded-md"
          >
            Projects
          </a>

          <a
            href="/contact"
            className="btn-secondary px-5 py-2 border border-blue-400 text-blue-400 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="skills mt-12 w-full max-w-3xl">
        <h2 className="text-center text-white text-xl font-semibold mb-6">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "React JS", icon: <FaReact /> },
            { name: "Java", icon: <FaJava /> },
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
          ].map((skill, index) => (
            <div key={index} className="skill-box flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg backdrop-blur-md border border-white/20">
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Animations */}
      <style>
        {`
          /* Section entry */
          .hero {
            animation: fadeScale 1s ease;
          }

          @keyframes fadeScale {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* Profile floating */
          .profile {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }

          /* Card */
          .card {
            opacity: 0;
            transform: translateY(30px);
            animation: slideUp 1s ease forwards;
            animation-delay: 0.3s;
          }

          /* Text stagger */
          .title { animation: slideUp 0.8s ease forwards; animation-delay: 0.4s; opacity: 0; }
          .subtitle { animation: slideUp 0.8s ease forwards; animation-delay: 0.6s; opacity: 0; }
          .desc { animation: slideUp 0.8s ease forwards; animation-delay: 0.8s; opacity: 0; }

          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(20px);
            }
          }

          /* Buttons */
          .btn-group {
            animation: fadeIn 1s ease forwards;
            animation-delay: 1s;
            opacity: 0;
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(34,197,94,0.4);
            transition: 0.3s;
          }

          .btn-secondary:hover {
            background: #3b82f6;
            color: white;
            transform: translateY(-3px);
            transition: 0.3s;
          }

          @keyframes fadeIn {
            to { opacity: 1; }
          }

          /* Skills animation */
          .skill-box {
            animation: slideX 3s ease-in-out infinite alternate;
          }

          .skill-box:nth-child(odd) {
            animation-duration: 4s;
          }

          .skill-box:nth-child(even) {
            animation-duration: 5s;
          }

          @keyframes slideX {
            0% { transform: translateX(-12px); }
            100% { transform: translateX(12px); }
          }

          /* Skill hover */
          .skill-box:hover {
            transform: scale(1.1);
            transition: 0.3s;
          }
        `}
      </style>

    </section>
  );
};

export default Hero;