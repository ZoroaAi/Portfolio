import { Suspense, useEffect, useRef, useState} from 'react'
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { DirectionalLightHelper, Object3D, SpotLightHelper } from 'three';
import * as THREE from 'three';


import Loader from './Loader';

import '../styles/about.scss';
import { SectionWrapper } from '../hoc';

const Room = (isMobile) => {
    const room = useGLTF('/models/room/room_model.glb');
    const dirLightRef = useRef();
    const spotLightRef = useRef();
    const deskTarget = new Object3D();
    deskTarget.position.set(-3, 0, -4);

    const { scene } = useThree();

    useEffect(() => {
        if (dirLightRef.current) { 
            const dirHelper = new DirectionalLightHelper(dirLightRef.current);
            scene.add(dirHelper);
        }

        if (spotLightRef.current) { 
            // const spotHelper = new SpotLightHelper(spotLightRef.current);
            // scene.add(spotHelper);
            spotLightRef.current.target = deskTarget;
            scene.add(spotLightRef.current.target);
        }
        scene.fog = new THREE.Fog('#e9d3c5', 10, 250)

    }, [scene]);

    return (
        <mesh>
        <ambientLight 
            intensity={0.3}
        />
        <directionalLight 
            ref={dirLightRef}
            color={'#FF8C00'}
            intensity={2}
            position={[-1.5, 3, -10]}
            castShadow
        />
        <spotLight 
            ref={spotLightRef}
            color={'#FF8C00'}
            position={[-1.5, 3, -10]} 
            angle={3} 
            penumbra={0.5} 
            intensity={0.8} 
            castShadow 
        />
        <spotLight 
            ref={spotLightRef}
            color={'#c1dbf1'}
            position={[-5.2, 1.5, -6.7]} 
            angle={3} 
            penumbra={0.5} 
            intensity={0.8} 
            castShadow 
        />
        <pointLight 
            color={'#d8af93'}
            intensity={0.4}
            position={[5, 3, -10]}
        />
        <primitive 
            object={room.scene}
            scale={isMobile ? 4 : 5}
            position={[0,-3.25,-1.5]}
        />
        </mesh>
    )
}

const RoomModel = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect( () => {
        const mediaQuery = window.matchMedia('(max-width:500px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    return (
        <Canvas 
            frameLoop='demand'
            shadows
            camera={{position: [40,70,30], fov: 14}}
            gl={{preserveDrawingBuffer: true}}
        >
        <Suspense fallback={<Loader/>} >
            <OrbitControls 
            enableZoom= {false}
            maxPolarAngle= {Math.PI / 2}
            minPolarAngle= {Math.PI / 4}
            maxAzimuthAngle= {Math.PI / 4}
            minAzimuthAngle= {Math.PI / 4}
            />
            <Room isMobile={isMobile} />
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