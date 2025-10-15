import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaCode, FaLaptopCode, FaPalette } from 'react-icons/fa';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: 'C Programming',
      issuer: 'TECMAC',
      date: '2023',
      description: 'Comprehensive certification covering C programming fundamentals, data structures, and algorithms.',
      icon: FaCode,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'C++ Programming',
      issuer: 'TECMAC',
      date: '2023',
      description: 'Advanced C++ programming including OOP concepts, STL, and modern C++ features.',
      icon: FaCode,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Java Programming',
      issuer: 'TECMAC',
      date: '2023',
      description: 'Java fundamentals, object-oriented programming, and application development.',
      icon: FaCode,
      color: 'from-red-500 to-orange-600',
    },
    {
      title: 'Web Development Internship',
      issuer: 'Prodigy Infotech',
      date: '2024',
      description: 'Hands-on experience in full-stack web development, building real-world applications.',
      icon: FaLaptopCode,
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Web Development Internship',
      issuer: 'InternPe',
      date: '2024',
      description: 'Practical training in modern web technologies and agile development practices.',
      icon: FaLaptopCode,
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'HTML & CSS Program',
      issuer: 'Error Makes Clever',
      date: '2023',
      description: 'Mastery of HTML5, CSS3, responsive design, and modern web layout techniques.',
      icon: FaPalette,
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" ref={ref} className="section-container bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-violet-900/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Training</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and training programs that validate my technical expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 rounded-full" />

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  className="w-full md:w-5/12 glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 bg-gradient-to-br ${cert.color} rounded-xl shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <cert.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <FaCertificate className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  className="hidden md:flex w-2/12 justify-center"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <motion.div
                    className={`w-6 h-6 bg-gradient-to-br ${cert.color} rounded-full shadow-lg relative z-10`}
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-full`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: '6+', label: 'Certifications' },
            { number: '3+', label: 'Internships' },
            { number: '5+', label: 'Languages' },
            { number: '10+', label: 'Technologies' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-effect rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
