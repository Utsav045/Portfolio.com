# 🚀 Deployment Guide

This is a **frontend-only** portfolio application that can be deployed to any static hosting provider.

## ☁️ Platform-Specific Deployment

### Vercel Deployment (Recommended)

1. **Fork and Prepare**
   - Fork this repository to your GitHub account
   - Clone your forked repository locally

2. **Deploy to Vercel**
   - Go to [https://vercel.com](https://vercel.com) and sign up
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings
   - Click "Deploy"

3. **Configure Settings** (if needed)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Netlify Deployment

1. **Fork and Prepare**
   - Fork this repository to your GitHub account

2. **Deploy to Netlify**
   - Go to [https://netlify.com](https://netlify.com) and sign up
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

### GitHub Pages Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - The built files will be in the `dist` folder
   - You can deploy this folder to GitHub Pages using the GitHub UI
   - Or use the `gh-pages` npm package:
     ```bash
     npm install -D gh-pages
     # Add to package.json scripts:
     # "deploy": "gh-pages -d dist"
     # Then run: npm run deploy
     ```

### Self-Hosting

For self-hosting on your own server:

1. **Build the Project**
   ```bash
   npm install
   npm run build
   ```

2. **Serve the Build Directory**
   Copy the `dist` folder to your web server and serve it as static files.

   **Using Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

   **Using Apache:**
   ```apache
   <VirtualHost *:80>
       DocumentRoot /path/to/dist
       ServerName your-domain.com
       
       <Directory /path/to/dist>
           AllowOverride All
           Require all granted
       </Directory>
   </VirtualHost>
   ```

## 📝 Deployment Notes

- This portfolio is **100% frontend** with no backend dependencies
- Contact form uses WhatsApp integration for communication
- All content is static and can be served from any static hosting provider
- No server-side processing or database required
- Perfect for free hosting options like Vercel, Netlify, or GitHub Pages