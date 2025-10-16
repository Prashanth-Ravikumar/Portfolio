import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiMongodb, SiExpress, SiNodedotjs, SiArduino, SiTailwindcss, SiJavascript } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Symposium Event Website',
      description: 'A comprehensive event management website for college symposium featuring event registration, schedule management, and real-time updates. Built with modern web technologies for optimal performance and user experience.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      technologies: [
        { name: 'React', Icon: SiReact, color: 'text-blue-500' },
        { name: 'Tailwind', Icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-500' },
      ],
      
      github: 'https://github.com/Prashanth-Ravikumar',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Smart Energy Management System',
      description: 'An IoT-based energy monitoring and management system using MERN stack. Features real-time energy consumption tracking, automated control, and data visualization with Arduino integration for hardware control.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      technologies: [
        { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-500' },
        { name: 'Express', Icon: SiExpress, color: 'text-gray-600' },
        { name: 'React', Icon: SiReact, color: 'text-blue-500' },
        { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'Arduino', Icon: SiArduino, color: 'text-teal-600' },
      ],
      github: 'https://github.com/Prashanth-Ravikumar',
      demo: '#',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'To-Do List App',
      description: 'A feature-rich task management application with user authentication, task categorization, priority levels, and deadline reminders. Includes drag-and-drop functionality and local storage persistence.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      technologies: [
        { name: 'React', Icon: SiReact, color: 'text-blue-500' },
        { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'Tailwind', Icon: SiTailwindcss, color: 'text-cyan-500' },
      ],
      github: 'https://github.com/Prashanth-Ravikumar',
      demo: '#',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" ref={ref} className="section-container bg-white dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative glass-effect rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="w-6 h-6 text-gray-800 dark:text-white" />
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt className="w-5 h-5 text-gray-800 dark:text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(({ name, Icon, color }) => (
                    <motion.div
                      key={name}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className={`w-4 h-4 ${color}`} />
                      <span className="text-gray-700 dark:text-gray-300">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Prashanth-Ravikumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
