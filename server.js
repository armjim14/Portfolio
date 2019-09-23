require("dotenv").config();

const express = require("express");
const path = require("path");
var nodemailer = require('nodemailer');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")))

let PORT = process.env.PORT || 3000;

app.post("/send/email", (req, res) => {

    let { name, email, subj, msg } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: process.env.email,
            pass: process.env.password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let HelperOptions = {
        from: `${email}`,
        to: process.env.email,
        subject: `From: ${name}, ${subj}`,
        text: `${msg} from ${email}`
    };



    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("The message was sent!");
    });

    return res.send({ msg: "Email send" })
})

app.listen(PORT, () => {
    console.log("listening")
})