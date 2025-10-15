import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'IoT Innovator',
    'Creative Technologist'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.substring(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-violet-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-full text-sm font-semibold shadow-lg">
            Welcome to my Portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Prashanth R S</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            I'm a{' '}
            <span className="gradient-text inline-block min-w-[300px] text-left">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Final-Year EEE Student | Aspiring Full Stack Developer | IoT Enthusiast | Creative Coder
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
        >
          Motivated engineering student with hands-on experience in IoT-based projects and strong interest in full-stack web development. 
          Passionate about building innovative digital solutions that merge hardware and software.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <motion.a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload className="w-5 h-5" />
            View Resume
          </motion.a>

          <motion.a
            href="#contact"
            onClick={scrollToContact}
            className="flex items-center gap-2 px-8 py-3 glass-effect text-gray-700 dark:text-gray-300 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/Prashanth1903"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/prashanth-r-s-6b6b2b1b3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="mailto:prashanthravikumar12@gmail.com"
            className="p-3 glass-effect rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiMail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-violet-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
