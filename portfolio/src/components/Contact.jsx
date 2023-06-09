import { useState } from 'react';

import '../styles/contact.scss';

function Contact() {
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, email, message })
        });

        if (response.ok) {
            alert("Message sent!");
            setTitle("");
            setEmail("");
            setMessage("");
        } else {
            alert("Message failed to send.");
        }
    };

    return (
        <div>
            <div className="contact-wrapper">
                <div className="contact-inside-wrapper">
                    <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit} className='email-form'>
                        <div className="title-email">
                            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required/>
                            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                        </div>
                        <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}  required></textarea>
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
