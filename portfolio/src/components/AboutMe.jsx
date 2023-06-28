import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Box } from '@react-three/drei';

import CanvasLoader from './Loader';

import '../styles/about.scss';
import { SectionWrapper } from '../hoc';

const Room = () => {
    const room = useGLTF('/models/room/room_model.glb')
    room.scene.scale.set(6, 6, 6);
    return (
        <mesh>
        <hemisphereLight 
            intensity={0.15} 
            groundColor={"black"}
        />
        <pointLight intensity={1}/>
        <primitive 
            object={room.scene}
        />
        </mesh>
    )
}

const RoomModel = () => {
    return (
        <Canvas 
        frameLoop='demand'
        shadows
        camera={{position: [20,3,5], fov: 25}}
        gl={{preserveDrawingBuffer: true}}
        >
        <Suspense fallback={<CanvasLoader/>} >
            <OrbitControls 
            enableZoom= {false}
            maxPolarAngle= {Math.PI / 2}
            minPolarAngle= {Math.PI / 2}
            />
            <Room />
        </Suspense>
        <Preload all />
        </Canvas>
    )
}

function AboutMe(){
    return(
        <div className="aboutMe">
            <div className="about-info">
                <h2>About Me</h2>
                <p>Hello, I'm Saurav KC, soon to be graduating with a degree in Computer Science from the University of Portsmouth. My journey in this diverse field has led me to discover a increasing appreciation for the art and science of web design and development.
                <br/><br/>This passion isn't just theoretical, it has driven me to explore a wide variety of tech stacks and apply them in practical settings, making each project a unique blend of creativity and functionality.
                Feel free to explore more about me and my work. I'm excited about the opportunities ahead and I welcome any conversations about how my passion and skills could meet your needs.
                </p>
            </div>
            <div className="about-img">
                <RoomModel/>
            </div>
        </div>
    )
}

export default SectionWrapper(AboutMe, 'about');