const sendGridMail = require('@sendgrid/mail')
const apiKey = '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'
sendGridMail.setApiKey(apiKey)

const sendMessage = (from_address, to_address, subject, text) => {
    const message = {
        'from': 'chejerlakarthik@gmail.com',
        'to': to_address,
        'subject': subject,
        'text': text
    }

    console.log(`Sending email from ${from_address} to ${to_address}`)
    sendGridMail.send(message)
                .then((result) => {
                    //Celebrate
                    console.log("Success " + Object.keys(result))
                    console.log(result[0]['statusCode'])
                })
                .catch(error => {
                    //Log friendly error
                    console.error(error.toString());
                    //Extract error msg
                    const { message, code, response } = error;
                    //Extract response msg
                    const { headers, body } = response;
                });
}

module.exports.emailService = {
    sendMessage
}