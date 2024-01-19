import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const SENDER_EMAIL = process.env.MAILTRAP_SENDER_EMAIL;
const RECIPIENT_EMAIL = process.env.MAILTRAP_RECIPIENT_EMAIL;

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
    .send({
        from: sender,
        to: [{ email: RECIPIENT_EMAIL }],
        subject: "Hello from Mailtrap!",
        text: "Welcome to Mailtrap Sending!",
    })
    .then(console.log)
    .catch(console.error);