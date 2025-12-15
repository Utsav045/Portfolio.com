
import express from 'express';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

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
// Using Port 587 with secure: false (TLS) is often more reliable for Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Must be an App Password if 2FA is on
  }
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Email Server Connection Error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

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
    console.log(`Message saved to DB with ID: ${messageId}. Attempting to send email...`);

    // Check if credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS in .env file');
      return res.status(500).json({ error: 'Server email configuration missing.' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'utsavjc@gmail.com', // Target email
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
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

// Serve React App for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
