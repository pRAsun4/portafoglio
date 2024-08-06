
import nodeMailer from 'nodemailer';


const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email',
        pass: 'pass'
    }
});

export const sendEmail = (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'email',
        to: email,
        subject: "Thank you for your interest",
        text: `Hi ${name},\n\nThank you for reaching out! We have received your message:\n\n"${message}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Company`
    };

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email send' + info.response)
    })
};


