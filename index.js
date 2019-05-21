'use strict';

const express = require('express')
const app = express()
app.use(express.json());

const PORT = 3000
const email = require('./sendmail')
const service = email.emailService

app.post("/", (req, res) => {
    const from_address = req.body['from']
    const to_address = req.body['to']
    const subject = req.body['subject']
    const content = req.body['content']
    service.sendMessage(from_address, to_address, subject, content)
    res.send('Hello World..')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))