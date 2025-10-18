import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaHtml5, FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiArduino, SiJavascript, 
  SiCplusplus, SiC, SiMysql, SiPostman
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 65, Icon: FaReact, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 60, Icon: SiJavascript, color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML5', level: 90, Icon: FaHtml5, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 85, Icon: FaCss3Alt, color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', level: 68, Icon: SiTailwindcss, color: 'from-cyan-400 to-cyan-600' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, Icon: FaNodeJs, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 78, Icon: SiExpress, color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', level: 62, Icon: SiMongodb, color: 'from-green-400 to-green-600' },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 85, Icon: SiC, color: 'from-blue-400 to-blue-600' },
        { name: 'C++', level: 82, Icon: SiCplusplus, color: 'from-blue-400 to-blue-600' },
        { name: 'Javascript', level: 60, Icon: FaJava, color: 'from-red-400 to-red-600' },
        { name: 'Python', level: 78, Icon: FaPython, color: 'from-blue-400 to-yellow-600' },
      ],
    },
    {
      title: 'IoT & Tools',
      skills: [
        { name: 'Arduino', level: 85, Icon: SiArduino, color: 'from-teal-400 to-teal-600' },
        { name: 'Git', level: 82, Icon: FaGitAlt, color: 'from-orange-400 to-orange-600' },
        { name: 'Postman', level: 80, Icon: SiPostman, color: 'from-orange-400 to-orange-600' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" ref={ref} className="section-container bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-violet-900/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.Icon className={`w-6 h-6 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
            Other Technologies & Tools
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'Responsive Design', 'IoT Integration', 'Version Control', 'Agile', 'Problem Solving'].map((tag, index) => (
              <motion.span
                key={tag}
                className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 hover:text-white transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
