import { useEffect, useState } from "react";

const skillsData = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "React JS", level: 75 },
  { name: "Java", level: 70 },
  { name: "SQL", level: 65 },
  { name: "OOPS", level: 75 },
  { name: "Problem Solving", level: 80 },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // trigger animation on load
  }, []);

  return (
    <section className="min-h-screen px-4 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white fade-in">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 slide-up">
        My <span className="text-green-400">Technical Skills</span>
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-400 max-w-xl mx-auto mb-6 text-sm sm:text-base leading-relaxed slide-up delay-1">
        I am an aspiring <span className="text-green-400 font-medium">Full Stack Java Developer</span> 
        with a strong passion for building modern, scalable, and user-friendly web applications. 
        I continuously improve my skills by working on real-world projects and solving problems.
      </p>

      <p className="text-center text-gray-500 max-w-lg mx-auto mb-10 text-sm slide-up delay-2">
        Skilled in frontend technologies, problem solving, and exploring new technologies like GenAI.
      </p>

      {/* Skills */}
      <div className="max-w-2xl mx-auto space-y-6">
        
        {skillsData.map((skill, index) => (
          <div key={index} className={`skill-item ${animate ? "show" : ""}`} style={{ animationDelay: `${index * 0.2}s` }}>
            
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
              <span className="text-sm text-gray-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="progress-bar bg-green-400 h-2.5 rounded-full"
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              ></div>
            </div>

          </div>
        ))}

      </div>

      {/* Footer Text */}
      <div className="max-w-2xl mx-auto mt-12 text-center text-gray-500 text-sm leading-relaxed fade-in delay-3">
        <p>
          Skill levels represent my confidence and experience in each technology.  
          I focus on writing clean, efficient code and continuously improving through practice.
        </p>
      </div>

      {/* 🔥 Animations */}
      <style>
        {`
          /* Fade in */
          .fade-in {
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Slide up */
          .slide-up {
            animation: slideUp 0.8s ease forwards;
          }

          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }

          @keyframes slideUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Skill item animation */
          .skill-item {
            opacity: 0;
            transform: translateY(20px);
            animation: skillFade 0.6s ease forwards;
          }

          .skill-item.show {
            opacity: 1;
          }

          @keyframes skillFade {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Progress bar animation */
          .progress-bar {
            transition: width 1.5s ease-in-out;
          }

          /* Hover effect */
          .skill-item:hover {
            transform: scale(1.02);
            transition: 0.3s;
          }
        `}
      </style>

    </section>
  );
};

export default Skills;