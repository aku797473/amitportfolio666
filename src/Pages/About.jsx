import { useEffect, useState } from "react";

const About = () => {
  const roles = ["Frontend Developer", "React JS Developer"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);

    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      
      <div className="about-card max-w-3xl w-full text-center md:text-left bg-white/5 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-800">
        
        {/* Heading */}
        <h2 className="heading text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-block text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
          Hi, I'm{" "}
          <span className="text-green-400 font-semibold">
            Amit Kumar Mishra
          </span>
          , a passionate{" "}
          <span
            className={`role-text text-white font-medium ${
              fade ? "show" : ""
            }`}
          >
            {roles[index]}
          </span>{" "}
          who loves crafting modern and interactive web experiences.
        </p>

        {/* Description */}
        <p className="text-block text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
          I specialize in{" "}
          <span className="text-white font-semibold">React.js</span> and{" "}
          <span className="text-white font-semibold">JavaScript</span>, 
          building responsive, fast, and visually appealing applications 
          using tools like{" "}
          <span className="text-sky-400">Tailwind CSS</span>.
        </p>

        <p className="text-block text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
          My focus is on writing{" "}
          <span className="text-green-400">clean, scalable code</span> 
          while ensuring{" "}
          <span className="text-white">great user experience</span>.
        </p>

        <p className="text-block text-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
          Currently pursuing B.Tech in Computer Science, I am continuously 
          learning and improving my skills.
        </p>

        {/* Buttons */}
        <div className="btn-group flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
          
          <a
            href="/contact"
            className="btn-primary px-6 py-3 bg-green-400 text-white font-semibold rounded-lg shadow-md"
          >
            Contact Me
          </a>

          <a
            href="/resume1.pdf"
            download
            className="btn-secondary px-6 py-3 border border-sky-400 text-sky-400 rounded-lg"
          >
            Download CV
          </a>

        </div>
      </div>

      {/* 🔥 Animations */}
      <style>
        {`
          /* Card entry */
          .about-card {
            opacity: 0;
            transform: translateY(40px);
            animation: cardFade 1s ease forwards;
          }

          @keyframes cardFade {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Heading */
          .heading {
            opacity: 0;
            transform: translateX(-30px);
            animation: slideRight 0.8s ease forwards;
            animation-delay: 0.2s;
          }

          @keyframes slideRight {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Text blocks stagger */
          .text-block {
            opacity: 0;
            transform: translateY(20px);
            animation: textFade 0.6s ease forwards;
          }

          .text-block:nth-of-type(1) { animation-delay: 0.4s; }
          .text-block:nth-of-type(2) { animation-delay: 0.6s; }
          .text-block:nth-of-type(3) { animation-delay: 0.8s; }
          .text-block:nth-of-type(4) { animation-delay: 1s; }

          @keyframes textFade {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Role animation */
          .role-text {
            display: inline-block;
            transition: all 0.4s ease;
            opacity: 0;
            transform: translateY(10px);
          }

          .role-text.show {
            opacity: 1;
            transform: translateY(0);
          }

          /* Buttons */
          .btn-group {
            opacity: 0;
            animation: fadeIn 1s ease forwards;
            animation-delay: 1.2s;
          }

          @keyframes fadeIn {
            to { opacity: 1; }
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(34,197,94,0.3);
            transition: 0.3s;
          }

          .btn-secondary:hover {
            background: #38bdf8;
            color: black;
            transform: translateY(-3px);
            transition: 0.3s;
          }
        `}
      </style>

    </section>
  );
};

export default About;