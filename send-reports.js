import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lokeshpandian@gmail.com',
    pass: 'yuai olxb tmwy wkya', // Use an app password, not your main password
  },
});

let mailOptions = {
  from: 'lokeshpandian@gmail.com',
  to: 'qa@datascopeplc.com',
  subject: 'Cypress Test Report',
  text: 'Please find the attached Cypress test report.',
  attachments: [
    {
      filename: 'mochawesome.html',
      path: './cypress/reports/mochawesome.html',
    },
  ],
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
