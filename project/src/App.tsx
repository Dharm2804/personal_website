import { useState } from "react";
import DKImage from './assets/DK.jpg';
import DKPDF from './assets/Dharm Kasundra.pdf';
import {
  User,
  GraduationCap,
  Award,
  Briefcase,
  FolderGit2,
  Sun,
  Moon,
  Mail,
  FileText,
  Menu,
  X, 
  ExternalLink, 
  Download
} from "lucide-react";
import { useTheme } from "./ThemeContext";

// Custom CSS for additional animations (add this to your CSS file, e.g., index.css)

// Add this to your CSS file (e.g., index.css) or a <style> tag in your index.html
// For simplicity, assume it's added globally

const About = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Passionate developer blending web technologies with AI/ML to create innovative solutions
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Profile Image with Enhanced Effects */}
      <div className="relative group flex-shrink-0 mx-auto lg:mx-0">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
        <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
        <img
        src={DKImage}
        alt="Dharm Kasundra"
        className="rounded-full w-60 h-90 object-cover border-4 border-white dark:border-gray-800 shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
      />
        </div>
      </div>

      {/* About Content */}
      <div className="space-y-6">
        {[
          {
            icon: "🎓", // Graduation cap
            content: "Currently pursuing <strong>B.Tech in Information Technology</strong> at <strong>Charusat University</strong>, specializing in <strong>web development</strong> and <strong>AI/ML</strong> applications."
          },
          {
            icon: "💻", // Computer
            content: "Passionate about building <strong>scalable web applications</strong> enhanced with <strong>AI-powered solutions</strong>. Focused on creating seamless user experiences through optimized frontend interfaces and robust backend systems."
          },
          {
            icon: "🚀", // Rocket
            content: "Constantly exploring <strong>emerging technologies</strong> in cloud computing and data science. Committed to lifelong learning and contributing to open-source projects that solve real-world problems."
          },
          {
            icon: "🤝", // Handshake
            content: "Enjoy collaborating on <strong>innovative projects</strong> and connecting with like-minded developers. Always open to discussing new opportunities and creative ideas."
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="flex items-start bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <span className="text-2xl mr-4 mt-1">{item.icon}</span>
            <p 
              className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        ))}
      </div>
    </div>

    {/* Skills Preview */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold dark:text-white mb-4">Technical Focus Areas</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {['Web Development', 'AI/ML', 'Cloud Computing', 'UI/UX'].map((skill, i) => (
          <span 
            key={i}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Education = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold mb-8 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Education
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Bachelor of Technology (IT)",
          institute: "Chandubhai S. Patel Institute of Technology",
          location: "Changa, Gujarat",
          duration: "Aug 2022 - Present",
          score: "CGPA: 8.58",
          icon: "🎓", // Graduation cap emoji
          highlights: [
            "Specialization in Web Development & AI/ML",
            "Active participant in coding competitions",
            "Coursework in Data Structures, Algorithms, and Database Systems"
          ]
        },
        {
          title: "Higher Secondary (PCM)",
          institute: "B.M. Patel School",
          location: "Jamnagar, Gujarat",
          duration: "June 2021 - March 2022",
          score: "Percentage: 73.07%",
          icon: "📚", // Books emoji
          highlights: [
            "Mathematics, Physics, Chemistry stream",
            "School topper in Computer Science",
            "Participated in science exhibitions"
          ]
        },
      ].map((edu, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-4">{edu.icon}</span>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">{edu.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.institute}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.location}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">
              {edu.duration}
            </span>
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
              {edu.score}
            </span>
          </div>
          
          <ul className="space-y-2 mt-4">
            {edu.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
const Skills = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold mb-8 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Skills
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          title: "Programming Languages",
          items: ["C/C++", "C#", "Python", "JavaScript", "Dart", "HTML/CSS"],
          colors: ["blue-500", "purple-500", "green-500", "yellow-500", "red-500", "indigo-500"],
          icon: "💻", // Computer icon
        },
        {
          title: "Developer Tools",
          items: ["VS Code", "Visual Studio 2022"],
          colors: ["blue-500", "purple-500"],
          icon: "🛠️", // Tools icon
        },
        {
          title: "Technologies/Frameworks",
          items: ["Node.js", ".NET Framework", ".NET Core"],
          colors: ["green-500", "yellow-500", "red-500"],
          icon: "⚙️", // Gear icon
        },
        {
          title: "Databases",
          items: ["SQL", "MySQL"],
          colors: ["blue-500", "purple-500"],
          icon: "🗄️", // Filing cabinet icon
        },
        {
          title: "Version Control",
          items: ["Git", "GitHub"],
          colors: ["green-500", "yellow-500"],
          icon: "🔀", // Arrows icon
        },
        {
          title: "Soft Skills",
          items: ["Communication", "Teamwork", "Leadership", "Confidence", "Problem-solving"],
          colors: ["blue-500", "purple-500", "green-500", "yellow-500", "red-500"],
          icon: "🌟", // Star icon
        },
      ].map((skill, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">{skill.icon}</span>
            <h3 className="text-xl font-semibold dark:text-white">{skill.title}</h3>
          </div>
          <ul className="space-y-2">
            {skill.items.map((item, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center">
                <span 
                  className={`w-2 h-2 bg-${skill.colors[i]} rounded-full mr-2 animate-pulse flex-shrink-0`}
                ></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Certificates = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold mb-8 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Certificates & Achievements
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { 
          title: "Problem Solving (Basic)", 
          provider: "HackerRank", 
          year: "2024", 
          link: "https://drive.google.com/file/d/1MkBSNNW6aS9LVS8Z6rL4tNg7BTlIURBb/view?usp=drive_link",
          icon: "🏆" // Trophy icon
        },
        { 
          title: "Python (Basic)", 
          provider: "HackerRank", 
          year: "2024", 
          link: "https://drive.google.com/file/d/1bPYRBxxW_M3SET2v0Lhu2hCnq6XeU0K9/view?usp=drive_link",
          icon: "🐍" // Snake icon for Python
        },
        { 
          title: "SQL (Basic)", 
          provider: "HackerRank", 
          year: "2023", 
          link: "https://drive.google.com/file/d/1AIXBeRyBzEbGSfjrsYf7vwHLEpqOOJWB/view?usp=drive_link",
          icon: "🗃️" // Card catalog box icon
        },
        { 
          title: "Database Management", 
          provider: "NPTEL", 
          year: "2023", 
          link: "https://drive.google.com/file/d/1oU7vwzsnoLX2Xxj6eOgjPMd8kxVLUm5z/view?usp=drive_link",
          icon: "💾" // Floppy disk icon
        },
        { 
          title: "Data Structures in Java", 
          provider: "NPTEL", 
          year: "2023", 
          link: "https://drive.google.com/file/d/1NQeZRVMIfmIGazW1GlEROg4ydbY-S0cR/view?usp=drive_link",
          icon: "📊" // Chart icon
        },
        { 
          title: "MongoDB Node.js", 
          provider: "MongoDB University", 
          year: "2024", 
          link: "https://drive.google.com/file/d/1g08xrfvKCVoJnDH12dM6LREERjcRf4MZ/view?usp=drive_link",
          icon: "🍃" // Leaf icon (MongoDB logo)
        },
      ].map((cert, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 group"
        >
          <div className="flex items-start">
            <span className="text-3xl mr-4">{cert.icon}</span>
            <div>
              <h3 className="text-xl font-semibold dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  {cert.title}
                  <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
                </a>
              </h3>
              <div className="flex items-center mt-1 text-gray-600 dark:text-gray-300">
                <span>{cert.provider}</span>
                <span className="mx-2">•</span>
                <span>{cert.year}</span>
              </div>
              <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                  style={{ width: `${90 - (index * 5)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Achievements Section */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 mt-6">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">✨</span>
        <h3 className="text-xl font-semibold dark:text-white">Additional Achievements</h3>
      </div>
      <ul className="space-y-3 pl-2">
        {[
          {
            text: "Solved 100+ problems on LeetCode",
            link: "https://leetcode.com/u/dharm_284/",
            icon: "🧠" // Brain icon
          },
          {
            text: "Participated in Bharat Blockchain Yatra",
            link: "https://drive.google.com/file/d/12qZi60cf0XLKNmm7EzbC93jnHTcoDCFv/view?usp=drive_link",
            icon: "⛓️" // Chain link icon
          },
          {
            text: "Participated in Flipkart GRiD 6.0",
            link: "https://drive.google.com/file/d/1jhPTL5Ubsi9ANY2d4KyTEBW5f3WEGQYC/view?usp=drive_link",
            icon: "🛒" // Shopping cart icon
          },
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-xl mr-3">{item.icon}</span>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-blue-500 dark:text-blue-400 transition-colors duration-200 flex items-center"
            >
              {item.text}
              <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
const Experience = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold mb-8 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Professional Experience
    </h2>
    
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 group">
      <div className="flex items-start">
        <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg mr-4">
          <Briefcase className="text-blue-500 dark:text-blue-400 w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              Web Developer Intern
            </h3>
            <span className="text-sm bg-blue-500/10 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full mt-1 sm:mt-0">
              May 2024 - June 2024
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Omnetlinks • Rajkot, Gujarat</p>
          
          <ul className="mt-4 space-y-3">
            {[
              {
                text: "Learned HTML, CSS, JavaScript and developed e-commerce designs",
                icon: "👨‍💻" // Developer icon
              },
              {
                text: "Focused on UI/UX principles and performance optimization",
                icon: "🎨" // Art palette icon
              },
              {
                text: "Collaborated with team on client requirements and project management",
                icon: "👥" // People icon
              }
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-3">{item.icon}</span>
                <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* You can add more experience entries like this */}
    {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 group mt-6">
      ...another experience...
    </div> */}
  </div>
);
const Projects = () => (
  <div className="space-y-8 px-4 sm:px-6">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        My Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Explore my technical creations that blend innovation with practical solutions
      </p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[
        {
          title: "UI Toolkit",
          duration: "Feb 2024 - Apr 2024",
          desc: "A comprehensive collection of reusable UI components with dynamic layouts and interactive widgets for modern web applications.",
          tech: ["HTML5", "CSS3", "JavaScript ES6+", "React"],
          icon: "🛠️",
          link: "https://github.com/Dharm2804/Ui-Tool-kit.git",
          accentColor: "bg-blue-100 dark:bg-blue-900/20",
          textColor: "text-blue-600 dark:text-blue-400"
        },
        {
          title: "Machine Maintenance Predictor",
          duration: "Jun 2024 - Sep 2024",
          desc: "AI-powered predictive maintenance system achieving 98% accuracy in forecasting equipment failures using ensemble learning methods.",
          tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
          icon: "🤖",
          link: "https://github.com/kiran385/Predictive-Machine-Maintenance.git",
          accentColor: "bg-emerald-100 dark:bg-emerald-900/20",
          textColor: "text-emerald-600 dark:text-emerald-400"
        },
        {
          title: "Library Management System",
          duration: "Jun 2024 - Sep 2024",
          desc: "Full-featured library management solution with inventory control, user management, and automated reporting capabilities.",
          tech: [".NET Core", "Entity Framework", "SQL Server", "Razor Pages"],
          icon: "📚",
          link: "https://github.com/Dharm2804/22itt056_library_managment_mvc_core.git",
          accentColor: "bg-purple-100 dark:bg-purple-900/20",
          textColor: "text-purple-600 dark:text-purple-400"
        },
        {
          title: "Alumni Connection Platform",
          duration: "Jan 2025 - Present",
          desc: "Interactive alumni network with role-based dashboards, event management, and professional networking features.",
          tech: ["MERN Stack", "JWT Auth", "Redux", "Tailwind CSS"],
          icon: "👥",
          link: "https://github.com/Dharm2804/Alumni_connection.git",
          accentColor: "bg-rose-100 dark:bg-rose-900/20",
          textColor: "text-rose-600 dark:text-rose-400"
        },
      ].map((project, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          <div className={`absolute top-0 left-0 h-1 w-full ${project.accentColor}`}></div>
          
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-start mb-4">
              <div className={`${project.accentColor} p-3 rounded-lg mr-4`}>
                <span className="text-2xl">{project.icon}</span>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${project.textColor}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.duration}
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-5 flex-grow">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${project.accentColor} ${project.textColor}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-lg ${project.textColor} hover:bg-opacity-10 ${project.accentColor} transition-colors duration-200`}
              >
                <span>View Repository</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {index === 3 ? 'In Progress' : 'Completed'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactMe = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold mb-8 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Get In Touch
    </h2>
    
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold dark:text-white mb-4">Contact Information</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <ul className="space-y-4">
            {[
              { 
                icon: <Mail className="w-6 h-6 text-blue-500 dark:text-blue-400" />, 
                text: "kasundradharm2845@gmail.com", 
                href: "mailto:kasundradharm2845@gmail.com",
                label: "Email"
              },
              { 
                icon: <span className="w-6 h-6 text-blue-500 dark:text-blue-400">📱</span>, 
                text: "+91 7043823803", 
                href: "tel:+917043823803",
                label: "Phone"
              },
              { 
                icon: <span className="w-6 h-6 text-blue-500 dark:text-blue-400">🔗</span>, 
                text: "linkedin.com/in/dharm-kasundra", 
                href: "https://www.linkedin.com/in/dharm-kasundra-aa520b259",
                label: "LinkedIn"
              },
              { 
                icon: <span className="w-6 h-6 text-blue-500 dark:text-blue-400">💻</span>, 
                text: "github.com/Dharm2804", 
                href: "https://github.com/Dharm2804",
                label: "GitHub"
              },
            ].map((contact, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg mr-4">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                  <a 
                    href={contact.href} 
                    target={contact.href.includes("http") ? "_blank" : undefined} 
                    rel="noopener noreferrer" 
                    className="hover:underline text-blue-500 dark:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {contact.text}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="md:w-1/2">
          <h3 className="text-xl font-semibold dark:text-white mb-4">Send Me a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>
    </div>
  </div>
);
const Resume = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold mb-8 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      My Resume
    </h2>
    
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-full mb-4">
            <FileText className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold dark:text-white text-center">Professional Profile</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
            Download my complete work history and skills overview
          </p>
        </div>
        
        <div className="md:w-2/3">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 shadow-sm">
            <iframe
              src={DKPDF}
              width="100%"
              className="w-full h-[50vh] min-h-[300px]"
              title="Dharm Kasundra Resume"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a
          href="/assets/Dharm Kasundra.pdf"
          download="Dharm_Kasundra_Resume.pdf"
          className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
        >
          <Download className="w-5 h-5 mr-2" />
          Download PDF
        </a>
        
        <a
          href="./assets/Dharm Kasundra.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          Open in New Tab
        </a>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </div>
    </div>
  </div>
);
function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const sections = [
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Award },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "contact", label: "Get In Touch", icon: Mail },
    { id: "resume", label: "Resume", icon: FileText },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about": return <About />;
      case "education": return <Education />;
      case "skills": return <Skills />;
      case "certificates": return <Certificates />;
      case "experience": return <Experience />;
      case "projects": return <Projects />;
      case "contact": return <ContactMe />;
      case "resume": return <Resume />;
      default: return <About />;
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row transition-colors duration-500 ${
        theme === "dark" ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Mobile Header with Hamburger Menu */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg animate-slide-in-left">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Dharm Kasundra
        </h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:rotate-90"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`${
          isMenuOpen ? "block animate-slide-in-left" : "hidden"
        } lg:block w-full lg:w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl lg:fixed h-auto lg:h-full z-50 transition-all duration-300`}
      >
        <div className="p-6">
          <div className="hidden lg:flex justify-between items-center mb-8 animate-fade-in-up">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dharm Kasundra
            </h1>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110"
            >
              {theme === "light" ? (
                <Moon size={20} className="animate-spin-slow" />
              ) : (
                <Sun size={20} className="text-white animate-spin-slow" />
              )}
            </button>
          </div>
          <nav className="space-y-2">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-102"
                    }
                  `}
                  style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
                >
                  <Icon
                    size={20}
                    className={
                      activeSection === section.id ? "animate-bounce" : "hover:animate-pulse"
                    }
                  />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="mt-4 lg:hidden animate-fade-in-up">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              <span>Toggle Theme</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-12 transition-all duration-500">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;