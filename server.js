import express from 'express';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from the React app
const distPath = join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  
  // Also serve static files from public directory
  const publicPath = join(__dirname, 'public');
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }
} else {
  console.log('Dist folder not found, skipping static file serving');
  
  // Serve static files from public directory
  const publicPath = join(__dirname, 'public');
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }
}

// Database Setup
const dbFile = join(__dirname, 'contacts.db');
const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      message TEXT,
      date TEXT
    )`);
  }
});

// Configure Email Transporter
let transporter;
let emailConfigured = false;

// Check if email credentials are properly configured
if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your_app_password_here') {
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  // Verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log("Email Server Connection Error:", error);
    } else {
      console.log("Server is ready to take our messages");
      emailConfigured = true;
    }
  });
} else {
  console.log("Email not configured: Missing EMAIL_USER or EMAIL_PASS in .env file, or using placeholder password");
}

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const stmt = db.prepare('INSERT INTO messages (name, email, message, date) VALUES (?, ?, ?, ?)');
  const date = new Date().toISOString();
  
  // We wrap the DB run in a Promise to make the flow cleaner
  // However, since sqlite3 is callback based, we'll handle the email inside the callback
  stmt.run(name, email, message, date, async function(dbErr) {
    if (dbErr) {
      console.error('Database Error:', dbErr);
      return res.status(500).json({ error: 'Failed to save message to database' });
    }

    const messageId = this.lastID;
    console.log(`Message saved to DB with ID: ${messageId}.`);
    
    // Check if email is configured
    if (!emailConfigured || !transporter) {
      console.log('Email not configured, skipping email notification');
      return res.json({ 
        success: true, 
        id: messageId, 
        warning: 'Message saved but email notification not sent (email not configured)' 
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to the same email as configured
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #003e91; margin-top: 0;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
        </div>
      `
    };

    try {
      // Await the email sending
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully!');
      // ONLY return success if email sends
      return res.json({ success: true, id: messageId });
    } catch (emailErr) {
      console.error('Email Sending Failed:', emailErr);
      return res.status(500).json({ 
        error: 'Message saved, but failed to send email notification. Please check server logs.',
        details: emailErr.message 
      });
    }
  });
  stmt.finalize();
});

// New endpoint for testing email configuration
app.post('/api/test-email-config', (req, res) => {
  // Only allow this in development environment for security
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Endpoint not available in production' });
  }
  
  // Check if credentials exist
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({ 
      error: 'Email configuration missing',
      details: 'EMAIL_USER or EMAIL_PASS not found in environment variables'
    });
  }
  
  // Check if using placeholder password
  if (process.env.EMAIL_PASS === 'your_app_password_here') {
    return res.status(500).json({ 
      error: 'Email configuration incomplete',
      details: 'Using placeholder password. Please replace "your_app_password_here" with your actual Gmail App Password.'
    });
  }
  
  // Check if email is configured and working
  if (emailConfigured) {
    return res.json({ 
      success: true, 
      message: 'Email configuration is working',
      user: process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}***@gmail.com` : 'Not configured'
    });
  } else {
    return res.status(500).json({ 
      error: 'Email configuration failed verification',
      details: 'Email transport is not verified. Check server logs for details.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    emailConfigured: emailConfigured,
    emailUser: process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}***@gmail.com` : 'Not configured'
  });
});

// Serve React App for all other routes
app.get('*', (req, res) => {
  if (fs.existsSync(distPath)) {
    res.sendFile(join(distPath, 'index.html'));
  } else {
    res.json({ message: 'API server is running. Frontend build not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // Log email configuration status on startup (without revealing password)
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your_app_password_here') {
    console.log(`Email configured for: ${process.env.EMAIL_USER}`);
  } else {
    console.log('Warning: Email configuration incomplete. Check .env file.');
    if (process.env.EMAIL_PASS === 'your_app_password_here') {
      console.log('Hint: Replace "your_app_password_here" in .env with your actual Gmail App Password');
    }
  }
});