// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuration de Nodemailer avec votre service email (Gmail dans cet exemple)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'iradaimable17@gmail.com', // Remplacez par votre email Gmail
        pass: 'zgfe zhql kfyd ckkk', // Remplacez par votre mot de passe Gmail ou App Password
      },
    });

    // Options de l'email
    let mailOptions = {
      from: email,
      to: 'iradaimable17@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Envoyer l'email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
