import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail, HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Prashanth R S</h3>
            <p className="text-gray-400 mb-4">
              Final-Year EEE Student passionate about Full Stack Development and IoT innovations. 
              Building the future, one line of code at a time.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Prashanth-Ravikumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prashanth-ravikumar-531836290/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prashanthravikumar12@gmail.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiMail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <HiMail className="w-5 h-5 text-blue-500" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prashanthravikumar12@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  prashanthravikumar12@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaGithub className="w-5 h-5 text-blue-500" />
                <a href="https://github.com/Prashanth-Ravikumar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  github.com/Prashanth-Ravikumar
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="w-5 h-5 text-blue-500" />
                <a href="https://www.linkedin.com/in/prashanth-ravikumar-531836290/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Prashanth Ravikumar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Prashanth R S. Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
