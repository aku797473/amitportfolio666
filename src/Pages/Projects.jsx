import { useEffect, useState } from "react";
import {
  FolderKanban,
  ShoppingCart,
  Apple,
  Building2,
  Monitor,
  Leaf,
} from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "Tech Store (E-commerce)",
    desc: "A modern e-commerce platform for tech products featuring a clean UI, responsive design, and smooth user experience.",
    tech: ["React", "Tailwind", "JavaScript"],
    live: "https://aku797473.github.io/explore/",
    code: "https://github.com/aku797473/explore.git",
    icon: <ShoppingCart className="icon text-green-400 w-5 h-5" />,
  },
  {
    id: 2,
    title: "Fruits Website",
    desc: "A visually appealing landing page for a fruit business with modern UI and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://peace-dusky-one.vercel.app/",
    code: "https://github.com/aku797473/peace.git",
    icon: <Apple className="icon text-green-400 w-5 h-5" />,
  },
  {
    id: 3,
    title: "Tech Company Website",
    desc: "A professional multi-section company website with clean and structured UI.",
    tech: ["React", "Tailwind"],
    live: "https://aku797473.github.io/nrmalweb/",
    code: "https://github.com/aku797473/nrmalweb.git",
    icon: <Building2 className="icon text-green-400 w-5 h-5" />,
  },
  {
    id: 4,
    title: "Microsoft Clone",
    desc: "A clone of the Microsoft homepage focusing on UI accuracy and responsiveness.",
    tech: ["HTML", "CSS"],
    live: "https://aku797473.github.io/amit789/",
    code: "https://github.com/aku797473/amit789.git",
    icon: <Monitor className="icon text-green-400 w-5 h-5" />,
  },
  {
    id: 5,
    title: "GoldFruit Mart",
    desc: "A JavaScript-based fruit shopping website with dynamic features and interactive UI.",
    tech: ["JavaScript", "CSS"],
    live: "https://aku797473.github.io/github3/",
    code: "https://github.com/aku797473/github3.git",
    icon: <Leaf className="icon text-green-400 w-5 h-5" />,
  },
];

const Projects = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="min-h-screen px-6 py-12 bg-black text-white">
      
      {/* Heading */}
      <h1 className="heading text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FolderKanban className="text-green-400 w-8 h-8" />
        My <span className="text-green-400">Projects</span>
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className={`card ${show ? "show" : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            
            {/* Title */}
            <div className="flex items-center gap-2 mb-2">
              {project.icon}
              <h2 className="text-lg font-semibold text-white">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-3 text-sm leading-relaxed">
              {project.desc}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="tech-badge text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live px-4 py-2 bg-green-500 text-white rounded-lg text-sm"
              >
                Live
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code px-4 py-2 border border-gray-500 text-gray-300 rounded-lg text-sm"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Animations */}
      <style>
        {`
          /* Heading */
          .heading {
            opacity: 0;
            transform: translateY(-20px);
            animation: fadeDown 0.8s ease forwards;
          }

          @keyframes fadeDown {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Cards */
          .card {
            opacity: 0;
            transform: translateY(40px);
            background: #111827;
            padding: 24px;
            border-radius: 16px;
            border: 1px solid #1f2937;
            transition: all 0.3s ease;
            animation: cardFade 0.8s ease forwards;
          }

          .card.show {
            opacity: 1;
          }

          @keyframes cardFade {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Hover effect */
          .card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 30px rgba(34,197,94,0.2);
          }

          /* Icon animation */
          .card:hover .icon {
            transform: rotate(10deg) scale(1.2);
            transition: 0.3s;
          }

          /* Tech badges */
          .tech-badge {
            transition: 0.3s;
          }

          .tech-badge:hover {
            background: #22c55e;
            color: black;
          }

          /* Buttons */
          .btn-live:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(34,197,94,0.4);
            transition: 0.3s;
          }

          .btn-code:hover {
            background: #374151;
            color: white;
            transform: translateY(-2px);
            transition: 0.3s;
          }
        `}
      </style>

    </section>
  );
};

export default Projects;