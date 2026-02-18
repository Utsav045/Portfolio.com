# 🚀 Utsav J. Charkhawala - Portfolio

<div align="center">

![Portfolio Badge](https://img.shields.io/badge/Portfolio-Live-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

**A modern, full-stack portfolio showcasing Data Science, Full-Stack Development, and Creative Design expertise**

[Live Demo](YOUR_RENDER_URL_HERE) • [LinkedIn](https://www.linkedin.com/in/utsav-charkhawala-769127324/) • [GitHub](https://github.com/Utsav045)

</div>

---

## 🌟 Overview

A **sophisticated, responsive portfolio** built with modern web technologies, featuring a stunning dark/light theme, animated 3D robot mascot, interactive data visualizations, and a full-featured contact system with email notifications. Designed for data scientists and full-stack developers to showcase technical skills, projects, and professional experience.

## ✨ Key Features

🎯 **Modern Tech Stack**
- Built with **React 18** + **TypeScript** for robust frontend development
- **Tailwind CSS** for sleek, responsive design with glassmorphism effects
- **Node.js + Express** backend with **SQLite** database
- **Vite** for lightning-fast development and optimized builds

🎨 **Immersive UI/UX**
- **Animated 3D Robot Mascot** with blinking eyes and floating animations
- **Interactive Skill Icons** orbiting the mascot in the hero section
- **Smooth Reveal Animations** on scroll for engaging user experience
- **Dark/Light Theme Toggle** with persistent user preference
- **Fully Responsive** design optimized for all devices

💼 **Professional Showcase**
- **AI & Automation** expertise highlighting
- **Project Portfolio** with detailed descriptions and tech stacks
- **Interactive Resume Modal** with print-friendly formatting
- **Education Timeline** showcasing academic achievements
- **Skills Radar Chart** visualizing technical competencies

📬 **Smart Contact System**
- **Frontend-only Contact Form** with WhatsApp integration
- **Direct Email Communication** via Gmail link
- **WhatsApp Integration** for instant communication
- **Form Validation** and success feedback

⚡ **Performance & SEO**
- **Optimized Asset Loading** with Vite's code splitting
- **Custom Favicons** with adaptive theme support
- **Semantic HTML** structure for better accessibility
- **Fast Loading Times** with production-ready optimizations

## 🛠️ Tech Stack

### Frontend
```bash
React 18           # Component-based UI library
TypeScript         # Type-safe JavaScript
Tailwind CSS       # Utility-first CSS framework
FontAwesome        # Icon library
Recharts           # Data visualization components
Vite               # Next-generation frontend tooling
```

### Tooling
```bash
npm                # Package manager
ESLint             # Code linting
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/Utsav045/utsav-charkhawala-portfolio.git
cd utsav-charkhawala-portfolio
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
Create a `.env` file in the root directory:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
PORT=3000
```

**Note**: For Gmail, use an App Password (16-character) instead of your regular password.

4. **Start Development Servers**

**Option 1: Separate Terminals (Recommended)**
```bash
# Terminal 1 - Backend Server
npm start

# Terminal 2 - Frontend Development Server  
npm run dev
```

**Option 2: Production Preview**
```bash
npm run build
npm start
```

5. **Open in Browser**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

## 📁 Project Structure

```
utsav-charkhawala-portfolio/
├── components/              # React components
│   ├── Contact.tsx         # Contact form with validation
│   ├── Education.tsx       # Education timeline component
│   ├── Experience.tsx      # Professional experience section
│   ├── Hero.tsx           # Hero section with 3D mascot
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Project showcase
│   ├── ResumeModal.tsx    # Interactive resume viewer
│   ├── Skills.tsx         # Skills visualization
│   └── Logo.tsx           # Logo component
├── public/                 # Static assets
│   ├── favicon.svg        # Custom SVG favicon
│   ├── favicon-16x16.png  # Favicon sizes
│   ├── favicon-32x32.png  # 
│   └── apple-touch-icon.png
├── App.tsx                 # Main application component
├── constants.tsx           # Portfolio data and configurations
├── server.js               # Express backend server
├── vite.config.ts          # Vite configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎯 Key Components

### Hero Section
- Animated 3D robot mascot with blinking eyes
- Orbiting skill icons with tooltips
- Dark/light theme toggle
- Social media links and resume access

### Skills Visualization
- Interactive radar chart showing technical competencies
- Categorized skill sections (AI, Design, Programming, etc.)
- Progress indicators for key competencies

### Projects Showcase
- Filterable project portfolio
- Detailed tech stack information
- Work/personal project distinction
- Responsive project cards

### Contact System
- Full-featured contact form
- Backend validation and storage
- Email notifications
- Success/error feedback

## 🎨 Customization

### Theme Colors
Modify color variables in `tailwind.config.js`:
```js
colors: {
  'brand-primary': '#003e91',
  'brand-accent': '#38bdf8',
  'brand-dark': '#0f172a',
  'brand-light': '#f8fafc'
}
```

### Personal Information
Update `constants.tsx` with your details:
- Personal information
- Experience data
- Project listings
- Skills and certifications

### Mascot Customization
Edit the robot mascot in `components/Hero.tsx`:
- Modify colors and animations
- Adjust size and positioning
- Change orbital skill icons

## 🚀 Deployment

### Vercel (Recommended - Frontend Only)
Deploy your frontend-only portfolio on Vercel:

1. **Prepare Your Repository**
   - Fork this repository to your GitHub account
   - Clone your forked repository locally
   - Make any customizations you want to your portfolio

2. **Sign Up on Vercel**
   - Go to [https://vercel.com](https://vercel.com) and sign up for a free account
   - Connect your GitHub account to Vercel

3. **Deploy Your Project**
   - Click "New Project" in Vercel dashboard
   - Import your GitHub repository
   - Vercel will auto-detect the project settings
   - Click "Deploy" and wait for the build to complete

4. **Configure Build Settings** (if needed)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Netlify (Alternative - Frontend Only)
Deploy your frontend-only portfolio on Netlify:

1. **Prepare Your Repository**
   - Fork this repository to your GitHub account
   - Clone your forked repository locally

2. **Sign Up on Netlify**
   - Go to [https://netlify.com](https://netlify.com) and sign up for a free account
   - Connect your GitHub account to Netlify

3. **Deploy Your Project**
   - Click "New site from Git" in Netlify dashboard
   - Choose your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

### Self-Hosting
To host on your own server:
1. Clone the repository
2. Install dependencies: `npm install`
3. Build the frontend: `npm run build`
4. Serve the `dist` folder using any static file server:
   ```bash
   # Using serve (npm install -g serve)
   serve -s dist
   
   # Using Python 3
   python -m http.server 8000 --directory dist
   
   # Using Node.js http-server
   npx http-server dist
   ```

### Deployment Notes
- This is a **frontend-only** portfolio
- Contact form uses WhatsApp integration for communication
- All content is static and can be served from any static hosting provider
- No backend server or database required

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Key responsive features:
- Flexible grid layouts
- Adaptive typography
- Mobile-friendly navigation
- Optimized touch targets

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - For the amazing component library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [FontAwesome](https://fontawesome.com/) - For beautiful icons
- [Recharts](https://recharts.org/) - For data visualization
- [Vite](https://vitejs.dev/) - For lightning-fast development

---

<div align="center">

**Built with ❤️ by [Utsav Charkhawala](https://github.com/Utsav045)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/utsav-charkhawala-769127324/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Utsav045)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:utsavjc@gmail.com)

</div>