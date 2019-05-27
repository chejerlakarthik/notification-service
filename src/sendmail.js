const sendGridMail = require('@sendgrid/mail')
const apiKey = process.env.SENDGRID_API_KEY
sendGridMail.setApiKey(apiKey)

const sendMessage = (to_address, subject, text) => {
    const message = {
        'from': 'chejerlakarthik@gmail.com',
        'to': to_address,
        'subject': subject,
        'text': text
    }

    console.log(`Sending email...`)
    sendGridMail.send(message)
                .then((result) => {
                    //Celebrate
                    console.log("Success");
                })
                .catch(error => {
                    //Log friendly error
                    console.error(`Error occurred: ${error.toString()}`);
                    //Extract error msg
                    const { message, code, response } = error;
                    //Extract response msg
                    const { headers, body } = response;
                });
    return message
}

module.exports.emailService = {
    sendMessage
}