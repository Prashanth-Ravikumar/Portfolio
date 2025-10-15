import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiArduino, SiJavascript } from 'react-icons/si';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const techIcons = [
    { Icon: FaReact, name: 'React', color: 'text-blue-500' },
    { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
    { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { Icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
    { Icon: FaPython, name: 'Python', color: 'text-blue-600' },
    { Icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500' },
    { Icon: SiArduino, name: 'Arduino', color: 'text-teal-600' },
    { Icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
  ];

  return (
    <section id="about" ref={ref} className="section-container bg-white dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white text-6xl font-bold">
                    PR
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-violet-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Final-Year EEE Student & Aspiring Full Stack Developer
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a motivated engineering student with a passion for creating innovative digital solutions. 
              My journey combines the worlds of hardware and software, with hands-on experience in IoT-based 
              projects and a strong foundation in full-stack web development.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in building modern, responsive web applications using the MERN stack and have 
              developed several IoT solutions that bridge the gap between physical devices and digital interfaces. 
              My goal is to leverage technology to solve real-world problems and create meaningful user experiences.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Technologies I Work With:
              </h4>
              <div className="grid grid-cols-4 gap-4">
                {techIcons.map(({ Icon, name, color }, index) => (
                  <motion.div
                    key={name}
                    className="flex flex-col items-center gap-2 p-3 glass-effect rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Icon className={`w-8 h-8 ${color}`} />
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
