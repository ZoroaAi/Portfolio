import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/contact.scss';

function Contact() {
    const [fromName, setFromName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        const service = process.env.REACT_APP_SERVICE_ID;
        const template = process.env.REACT_APP_TEMPLATE_ID;
        const publick = process.env.REACT_APP_PUBLIC_KEY;

        emailjs.sendForm(service,
            template,
            form.current,
            publick)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div>
            <div className="contact-wrapper">
                <div className="contact-inside-wrapper">
                    <h2>Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail} className='email-form'>
                        <div className="title-email">
                            <input type="text" placeholder="Your Name" value={fromName} name='from_name' onChange={e => setFromName(e.target.value)} required/>
                            <input type="email" placeholder="Email" value={email} name='email' onChange={e => setEmail(e.target.value)} required/>
                        </div>
                        <textarea placeholder="Message" value={message} name='message' onChange={e => setMessage(e.target.value)}  required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contact-img">
                    <div>Placeholder for Image</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
