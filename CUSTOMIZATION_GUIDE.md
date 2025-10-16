# Portfolio Customization Guide

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization Areas](#customization-areas)
- [Personal Information](#personal-information)
- [Styling & Theme](#styling--theme)
- [Components Customization](#components-customization)
- [Content Updates](#content-updates)
- [Advanced Customization](#advanced-customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## 🚀 Project Overview

This is a modern, responsive portfolio website built with React, Vite, and Tailwind CSS. It features:

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Dark/Light Theme**: Automatic theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Components**: Animated sections with scroll-triggered effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Clean structure for search engine optimization

## 🛠 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.jsx        # About section
│   ├── Certifications.jsx # Certifications timeline
│   ├── Contact.jsx      # Contact form and info
│   ├── Footer.jsx       # Footer with links
│   ├── Hero.jsx         # Hero/landing section
│   ├── Navbar.jsx       # Navigation bar
│   ├── Projects.jsx     # Projects showcase
│   └── Skills.jsx       # Skills with progress bars
├── context/
│   └── ThemeContext.jsx # Theme management
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🎨 Customization Areas

### 1. Personal Information

#### Update Basic Info
**File**: `src/components/Hero.jsx`
```jsx
// Lines 11-15: Update role rotation
const roles = [
  'Your Role 1',
  'Your Role 2', 
  'Your Role 3'
];

// Lines 121-122: Update name
<span className="gradient-text">Your Name</span>

// Lines 134-135: Update description
<p className="text-lg text-gray-600 dark:text-gray-400">
  Your personal description here
</p>

// Lines 142-144: Update bio
<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
  Your detailed bio and background information
</p>
```

#### Update Contact Information
**File**: `src/components/Contact.jsx`
```jsx
// Lines 42-64: Update contact info array
const contactInfo = [
  {
    icon: HiMail,
    title: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com',
    color: 'from-blue-500 to-blue-600',
  },
  // Add more contact methods
];
```

#### Update Social Links
**File**: `src/components/Hero.jsx`
```jsx
// Lines 178-197: Update social media links
<motion.a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  // ... rest of the component
>
```

### 2. Navigation

**File**: `src/components/Navbar.jsx`
```jsx
// Lines 19-26: Update navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

// Lines 64: Update logo/name
Prashanth R S
```

### 3. About Section

**File**: `src/components/About.jsx`
```jsx
// Lines 102-116: Update about content
<h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
  Your Title & Description
</h3>

<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
  Your about paragraph 1
</p>

<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
  Your about paragraph 2
</p>

// Lines 30-39: Update technology icons
const techIcons = [
  { Icon: FaReact, name: 'React', color: 'text-blue-500' },
  { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
  // Add your technologies
];
```

### 4. Skills Section

**File**: `src/components/Skills.jsx`
```jsx
// Lines 16-53: Update skill categories and levels
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 85, Icon: FaReact, color: 'from-blue-400 to-blue-600' },
      { name: 'JavaScript', level: 80, Icon: SiJavascript, color: 'from-yellow-400 to-yellow-600' },
      // Add your skills with proficiency levels (0-100)
    ],
  },
  // Add more categories
];
```

### 5. Projects Section

**File**: `src/components/Projects.jsx`
```jsx
// Lines 11-54: Update projects array
const projects = [
  {
    title: 'Your Project Title',
    description: 'Detailed project description...',
    image: 'https://your-image-url.com/image.jpg', // Use your project images
    technologies: [
      { name: 'React', Icon: SiReact, color: 'text-blue-500' },
      { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-600' },
      // Add technologies used
    ],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-live-demo.com', // Optional
    color: 'from-blue-500 to-cyan-500', // Gradient colors
  },
  // Add more projects
];
```

### 6. Certifications Section

**File**: `src/components/Certifications.jsx`
```jsx
// Lines 10-59: Update certifications array
const certifications = [
  {
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2024',
    description: 'Description of the certification',
    icon: FaCertificate, // Choose appropriate icon
    color: 'from-blue-500 to-blue-600', // Gradient colors
  },
  // Add more certifications
];
```

## 🎨 Styling & Theme

### Color Scheme Customization

**File**: `tailwind.config.js`
```javascript
// Lines 10-35: Update color palette
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... update to your brand colors
    900: '#0c4a6e',
  },
  // Add your custom color palette
}

// Lines 36-40: Update gradient backgrounds
backgroundImage: {
  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  'gradient-primary': 'linear-gradient(135deg, #your-color1 0%, #your-color2 100%)',
  'gradient-blue-violet': 'linear-gradient(135deg, #your-color1 0%, #your-color2 100%)',
}
```

### Custom CSS Classes

**File**: `src/index.css`
```css
/* Lines 15-27: Update component classes */
@layer components {
  .glass-effect {
    @apply bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20;
  }
  
  .gradient-text {
    @apply bg-gradient-to-r from-your-color1 to-your-color2 bg-clip-text text-transparent;
  }
  
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24;
  }
}
```

### Animation Customization

**File**: `tailwind.config.js`
```javascript
// Lines 41-54: Update animations
animation: {
  'float': 'float 3s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
  // Add your custom animations
},
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  // Add your custom keyframes
}
```

## 📱 Responsive Design

The portfolio is built with a mobile-first approach. Key breakpoints:
- **Mobile**: Default styles (up to 768px)
- **Tablet**: `md:` prefix (768px and up)
- **Desktop**: `lg:` prefix (1024px and up)

### Customizing Responsive Behavior
```jsx
// Example: Responsive text sizing
<h1 className="text-3xl md:text-5xl lg:text-7xl">
  Your Heading
</h1>

// Example: Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Content */}
</div>
```

## 🔧 Advanced Customization

### Adding New Sections

1. **Create Component**: Create a new file in `src/components/`
2. **Add to App**: Import and add to `src/App.jsx`
3. **Update Navigation**: Add link to `src/components/Navbar.jsx`

Example new section:
```jsx
// src/components/Experience.jsx
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>
        {/* Your content */}
      </motion.div>
    </section>
  );
};

export default Experience;
```

### Custom Hooks

Create reusable hooks in `src/hooks/`:
```jsx
// src/hooks/useScrollPosition.js
import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};
```

### Environment Variables

Create `.env` file for sensitive data:
```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure build settings

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Deploy: `npm run deploy`

## 🔍 SEO Optimization

### Meta Tags
Update `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-image-url">
```

### Structured Data
Add JSON-LD for better SEO:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Title",
  "url": "https://yourwebsite.com"
}
</script>
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check for missing dependencies
   - Verify import paths
   - Clear node_modules and reinstall

2. **Styling Issues**
   - Ensure Tailwind classes are properly configured
   - Check for conflicting CSS
   - Verify responsive breakpoints

3. **Animation Problems**
   - Check Framer Motion version compatibility
   - Verify animation props
   - Test on different devices

4. **Contact Form Issues**
   - Implement proper form handling
   - Add email service integration
   - Test form validation

### Performance Optimization

1. **Image Optimization**
   - Use WebP format
   - Implement lazy loading
   - Optimize image sizes

2. **Code Splitting**
   - Use React.lazy for components
   - Implement dynamic imports
   - Optimize bundle size

3. **Caching**
   - Configure proper cache headers
   - Use CDN for static assets
   - Implement service worker

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Customizing! 🎉**

For additional help or questions, feel free to open an issue or contact the maintainer.
