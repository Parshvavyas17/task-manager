const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parshvavyas07@gmail.com',
        subject: 'Thanks for joining us on the task manager app',
        text: `Welcome to the app, ${name}. Hit us up if you have any queries regarding the usage of the app.`
    });
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parshvavyas07@gmail.com',
        subject: "We'll miss you.",
        text: `Sorry to see you leave, ${name}. Please tell us why you left so that we can improve the app.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
};
