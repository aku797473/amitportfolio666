import { useState } from "react";
import { Mail, Phone, MapPin, Send, Circle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10 sm:py-14 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      <div className="container w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* Left Side */}
        <div className="left space-y-6 text-center md:text-left">
          
          <h1 className="title text-3xl md:text-4xl font-bold leading-tight">
            Let’s Build Something
          </h1>

          <p className="desc text-green-300 text-sm sm:text-base leading-relaxed">
            Have a project idea or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities.
          </p>

          <div className="info space-y-3 text-sm sm:text-base">
            
            <p className="item flex items-center gap-2 justify-center md:justify-start">
              <Mail size={18} />
              <span className="font-semibold">Email:</span> 
              akagnihotri797473@gmail.com
            </p>

            <p className="item flex items-center gap-2 justify-center md:justify-start">
              <Phone size={18} />
              <span className="font-semibold">Phone:</span> 
              +91 9770483883
            </p>

            <p className="item flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={18} />
              <span className="font-semibold">Location:</span> 
              Bhopal, MP
            </p>

            <p className="item flex items-center gap-2 justify-center md:justify-start text-green-400 font-medium mt-3">
              <Circle size={5} className="fill-green-400 animate-pulse" />
              Currently Available
            </p>

          </div>
        </div>

        {/* Right Side */}
        <form
          onSubmit={handleSubmit}
          className="right bg-yellow-800/20 backdrop-blur-lg p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl space-y-4 sm:space-y-5 border border-gray-700 w-full"
        >
          <div className="input-group">
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="input w-full px-4 py-2 rounded-lg text-white"
              required
            />
          </div>

          <div className="input-group">
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className="input w-full px-4 py-2 rounded-lg text-white"
              required
            />
          </div>

          <div className="input-group">
            <label className="block mb-1 text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              className="input w-full px-4 py-2 rounded-lg text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-full flex items-center justify-center gap-2 bg-green-500 py-2.5 rounded-lg font-semibold"
          >
            <Send size={14} />
            Send Message
          </button>
        </form>

      </div>

      {/* 🔥 Animations */}
      <style>
        {`
          /* Left side */
          .left {
            opacity: 0;
            transform: translateX(-40px);
            animation: slideLeft 1s ease forwards;
          }

          @keyframes slideLeft {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Right side */
          .right {
            opacity: 0;
            transform: translateX(40px);
            animation: slideRight 1s ease forwards;
          }

          @keyframes slideRight {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Text stagger */
          .title { animation: fadeUp 0.8s ease forwards; }
          .desc { animation: fadeUp 0.8s ease forwards; animation-delay: 0.2s; }
          .item { animation: fadeUp 0.8s ease forwards; animation-delay: 0.4s; opacity: 0; }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Inputs */
          .input {
            background: #111827;
            border: 1px solid #374151;
            transition: 0.3s;
          }

          .input:focus {
            outline: none;
            border-color: #22c55e;
            box-shadow: 0 0 10px rgba(34,197,94,0.3);
          }

          /* Button */
          .btn {
            transition: 0.3s;
          }

          .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(34,197,94,0.4);
          }
        `}
      </style>

    </section>
  );
};

export default Contact;