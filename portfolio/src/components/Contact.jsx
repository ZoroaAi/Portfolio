import { useState, useRef, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress } from "@react-three/drei";

import '../styles/contact.scss';
import Loader from './Loaders/CanvasLoader';
import { fadeIn, slideIn, staggerContainer } from '../utils/motion';
import { LoadingProgressContext } from './Loaders/LoadProgressContext';

const useResponsiveModel = () => {
    const { size } = useThree()
    // Calculate a responsive scale value based on canvas size
    const scale = Math.min(size.width, size.height) / 150
    return scale
}

const Earth = () => {
    const earth = useGLTF('./models/planet/scene.gltf');
    const scale = useResponsiveModel();

    return(
        <primitive 
            object={earth.scene}
            scale={scale}
            position-y={0}
        />
    )
}

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true}}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
            className='earth'
        >
            <Suspense fallback={<Loader/>}>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    )
}

function Contact() {
    const [fromName, setFromName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [isSending, setIsSending] = useState(false);

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        setIsSending(true);

        const service = process.env.REACT_APP_SERVICE_ID;
        const template = process.env.REACT_APP_TEMPLATE_ID;
        const publick = process.env.REACT_APP_PUBLIC_KEY;

        emailjs.sendForm(service,
            template,
            form.current,
            publick)
        .then((result) => {
            console.log(result.text);
            setIsSending(false);
        }, (error) => {
            console.log(error.text);
            setIsSending(false);
        });
    }

    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.25}} 
            className="contact-wrapper" 
            id='contact'
        >
            <motion.div 
                variants={slideIn('left','tween',0.2,1)} 
                className="contact-inside-wrapper"
            >
                <div className="contact_title">
                    <p>Get in touch</p>
                    <h2>Contact.</h2>
                </div>
                <form ref={form} onSubmit={sendEmail} className='email-form'>
                    <div className="title-email">
                        <input type="text" placeholder="Your Name" value={fromName} name='from_name' onChange={e => setFromName(e.target.value)} required/>
                        <input type="email" placeholder="Email" value={email} name='email' onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <textarea placeholder="Message" value={message} name='message' onChange={e => setMessage(e.target.value)}  required></textarea>
                    <button type="submit" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send' }
                    </button>
                </form>
            </motion.div>
            <motion.div 
                className='earth_wrapper'
                variants={slideIn('right','tween',0.2,1)}
            >
                <EarthCanvas />
            </motion.div>
        </motion.section>
    );
}

export default Contact;
