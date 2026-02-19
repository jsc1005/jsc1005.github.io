const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Booking request
app.post('/api/booking', async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER || 'your-email@gmail.com',
    to: 'jscrow49504@gmail.com',
    subject: 'New Booking Request from Sarenade Studio',
    text: `New booking request:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message || 'No message provided'}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Booking request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send booking request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
