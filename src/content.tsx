import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, Code, Users, Lightbulb, Target, ChevronDown, ChevronUp } from 'lucide-react';

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState(null);

  const skills = {
    technical: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'VUE', 'SQL', 'Git', 'Python', 'Java', 'Linux', 'REST APIs', 'Node.js', 'MongoDB'],
    soft: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Time Management', 'Critical Thinking']
  };

  const projects = [
    {
      id: 1,
      title: 'Personal Finance Tracker',
      tech: 'React, Local Storage',
      description: 'A web app to track personal expenses and income with visual charts.',
      details: 'Built to solve my own budgeting needs. Features include expense categorization, monthly reports, and savings goals tracking. Learned React hooks and data visualization.',
      link: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Local Business Website Redesign',
      tech: 'HTML, CSS, JavaScript',
      description: 'Redesigned a local café website to improve user experience and mobile responsiveness.',
      details: 'Volunteered to help a local business improve their online presence. Increased mobile usability by 60% and improved loading speed. Gained experience in client communication and project management.',
      link: '#',
      status: 'Volunteer Project'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      tech: 'JavaScript, Weather API',
      description: 'A responsive weather app showing current conditions and 5-day forecast.',
      details: 'Personal project to learn API integration and responsive design. Features include location search, favorites, and weather alerts. Practicing clean code principles and error handling.',
      link: '#',
      status: 'In Progress'
    }
  ];

  const experience = [
    {
      title: 'Front-end Developer ',
      company: 'Aura Explorer',
      period: ' Mar 2024 - Sep 2024',
      description: '',
      achievements: ['Architected and developed a comprehensive AI chat integration platform using Vue.js that seamlessly connects multiple leading AI models (ChatGPT, Claude, Deepseek and so on) through a unified interface ',
         'Designed an intuitive and responsive UI that enables users to easily switch between different AI models and compare responses, enhancing user experience and engagement']
    },
    {
      title: 'Front-end Developer',
      company: 'Wuhan BILL-JC Technology Co. Ltd',
      period: 'June 2022 - Aug 2023',
      description: '',
      achievements: ['Developed and maintained 10+ responsive web interfaces for a large-scale distributed storage system using React, Redux, and Arco Design UI library, significantly improving user engagement and system accessibility',
         'Collaborated with backend team to implement system upgrade features, including large file upload functionality with breakpoint resume capability using "uppy" component, significantly improving upload experience.',
        'Collaborated with QA team to establish comprehensive testing protocols, achieving 100% test pass rate with 48-hour issue resolution guarantee', 
        'Collaborated with cross-functional teams in Agile environment to deliver complex features including real-time data visualization and storage monitoring dashboards',
        'Produced high-fidelity UI prototypes, maintaining over 95% design accuracy.']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl ml-10 font-bold text-gray-600">LC</h1>
            <div className="hidden md:flex space-x-6 mr-10">
              <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-500 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-500 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-500 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-500 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-left bg-gradient-to-br from-purple-50 to-grey-50 pl-46">
        <div className="max-w-7xl mx-auto px-6 mt-20 mb-20">
          {/* <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
            LC
          </div> */}
          <p className='mb-8 text-gray-500'>Hello! My name is</p>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">Logan Chen</span>
          </h1>
          <h1 className="text-2xl font-semibold text-gray-500 mb-8">
            Experienced and driven full stack developer
          </h1>
          <p className="text-xl text-gray-500 mb-18 max-w-2xl">
            Based in Ireland, skilled in building and maintaining robust frontend and backend systems with clean, efficient code. Known for strong problem-solving ability, clear communication, and a hands-on approach to delivering scalable, production-ready solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Download size={20} />
              Download CV
            </button>
            {/* <a href="#contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Get In Touch
            </a> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-grey-50">
        <div className="max-w-6xl mx-auto px-6 pl-50">
          <h2 className="text-3xl text-gray-700 font-bold text-left mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a motivated individual with a passion for technology and problem-solving. Currently transitioning into web development while building practical skills through personal projects and continuous learning.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My background in customer service has given me strong communication skills and the ability to understand user needs - qualities I bring to every development project.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-600">Ireland</span>
                </div>
              </div>
            </div>
            <div>
              <div className='w-64 h-64 bg-[url(assets/photo.jpg)]  bg-cover bg-center rounded-lg shadow-md'></div>
              {/* <img src="/assets/photo.jpg" alt="" className='w-64 h-64 rounded-lg border-hidden' /> */}
            </div>
            {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What I'm Looking For</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Target className="text-blue-600 mt-1" size={16} />
                  <span className="text-gray-600">Entry-level or junior developer positions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-blue-600 mt-1" size={16} />
                  <span className="text-gray-600">Collaborative team environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="text-blue-600 mt-1" size={16} />
                  <span className="text-gray-600">Opportunities to learn and grow</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-700 text-left mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-purple-600" size={24} />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projects & Portfolio</h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-blue-600 font-medium">{project.tech}</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-2">
                      {project.status}
                    </span>
                  </div>
                  <button
                    // onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    {expandedProject === project.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {expandedProject === project.id && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700">{project.details}</p>
                  </div>
                )}
                <div className="flex gap-3">
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{job.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 text-blue-100">
            I'm actively seeking opportunities in Ireland's tech scene. Let's discuss how I can contribute to your team!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:longkangchen@outlook.com" className="flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              <Mail size={20} />
              longkangchen@outlook.com
            </a>
            <a href="tel:+353xxxxxxxxx" className="flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              <Phone size={20} />
              +353 876970892
            </a>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <a href="#" className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Logan Chen. Built with React & Tailwind CSS and Love.</p>
        </div>
      </footer>
    </div>
  );
}