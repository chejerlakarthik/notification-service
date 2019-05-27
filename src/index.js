'use strict';
require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json());

const PORT = process.env.PORT || 3000
const email = require('./sendmail')
const service = email.emailService

app.post("/", (req, res) => {
    const to_address = req.body['to']
    const subject = req.body['subject']
    const content = req.body['content']
    const message = service.sendMessage(to_address, subject, content);
    res.send({
        'FROM' : message.from,
        'TO': message.to,
        'MESSAGE_TEXT': message.text,
        'SUBJECT': message.subject
    })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))