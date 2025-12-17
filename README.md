# 🚀 Utsav J. Charkhawala - Portfolio

![Portfolio Badge](https://img.shields.io/badge/Portfolio-Live-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

A modern, responsive, and dark-themed portfolio website for **Utsav J. Charkhawala**, a Data Scientist, Full-Stack Developer, and Creative Designer. This project highlights professional experience, technical skills in AI & Automation, and featured projects with a sleek UI, animated interactions, and a custom Resume generator.

## 🔗 Live Links
- **GitHub**: [github.com/Utsav045](https://github.com/Utsav045)
- **LinkedIn**: [linkedin.com/in/utsav-charkhawala](https://www.linkedin.com/in/utsav-charkhawala-769127324/)

---

## ✨ Features

- **🎨 Modern UI/UX**: Built with React and Tailwind CSS for a glassmorphism and neon aesthetic.
- **📱 Fully Responsive**: Optimized for Mobile, Tablet, and Desktop screens.
- **🤖 AI & Creative Showcase**: Dedicated sections for AI Agents, Automation, and Graphic Design skills.
- **💬 WhatsApp Integration**: Direct "Send via WhatsApp" button for instant communication.
- **📄 Resume Generation**: Built-in HTML-to-PDF print-friendly resume modal.
- **🤖 3D Mascot**: Custom animated robot mascot in the hero section.
- **🌙 Dark/Light Mode**: Interactive theme toggle with persistent state.
- **📨 Contact Backend**: Integrated Node.js/Express backend with SQLite database to store contact form messages.
- **📧 Email Notifications**: Automatic email notifications for new contact form submissions.
- **⚡ High Performance**: Built with Vite for fast HMR and optimized production builds.

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** (Functional Components, Hooks)
- **Tailwind CSS** (Styling, Animations)
- **FontAwesome** (Icons)
- **Recharts** (Data Visualization)

### **Backend**
- **Node.js & Express** (API Server)
- **SQLite3** (Lightweight Database)
- **Nodemailer** (Email Services)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Utsav045/portfolio.git
cd portfolio
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Email Settings
Create a `.env` file in the root directory with your email configuration:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
PORT=3000
```

**Important**: For Gmail, you need to use an App Password instead of your regular password:
1. Enable 2-Factor Authentication on your Google account
2. Visit [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Use this 16-character password in your `.env` file

### 4️⃣ Run Locally (Development)
This is a full-stack app. You need to run both the Backend (API) and Frontend (React) servers.

**Option A: Separate Terminals (Recommended)**

1.  **Terminal 1 (Backend)**:
    ```bash
    npm start
    ```
    *Server runs on port 3000.*

2.  **Terminal 2 (Frontend)**:
    ```bash
    npm run dev
    ```
    *Vite runs on port 5173 (usually) and proxies API requests to port 3000.*

**Option B: Production Preview**
To build the frontend and serve it via the backend (like in production):
```bash
npm run build
npm start
```
*Open `http://localhost:3000` in your browser.*

---

## 🖼️ Logo Configuration

To use your custom logo image:
1.  Name your image file `logo.png`.
2.  Place it in the `public/` folder (or the root folder if using Vite publicDir defaults).
3.  The app will automatically detect it. If missing, it falls back to the stylized text logo.

---

## ☁️ Deployment

This project is configured for easy deployment on [Render](https://render.com/), [Vercel](https://vercel.com), or [Netlify](https://netlify.com).

**For Render (Full Stack):**
1.  **Create a New Web Service**.
2.  Connect your GitHub repository.
3.  **Build Command**: `npm install && npm run build`
4.  **Start Command**: `npm start`
5.  **Environment**: Node.js
6.  **Add Environment Variables**:
    - `EMAIL_USER`: your_email@gmail.com
    - `EMAIL_PASS`: your_app_password

---

## 📂 Project Structure

```
utsav-portfolio/
├── dist/                # Production build artifacts
├── components/          # React Components (Hero, Navbar, ResumeModal, etc.)
├── constants/           # Data (Projects, Experience, Skills)
├── App.tsx              # Main Application Component
├── server.js            # Express Backend & API
├── vite.config.ts       # Vite Configuration
├── package.json         # Dependencies & Scripts
└── README.md            # Documentation
```

---

Made with ❤️ by **Utsav Charkhawala**