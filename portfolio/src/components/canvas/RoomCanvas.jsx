import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { React, Suspense, useEffect, useRef, useState } from 'react';
import { Object3D } from 'three';
import Loader from '../Loaders/CanvasLoader';

const Room = (isMobile) => {
    const room = useGLTF('/models/room/room_model.glb');
    const dirLightRef = useRef();
    const spotLightRef = useRef();
    const deskTarget = new Object3D();
    deskTarget.position.set(-3, 0, -4);

    const { scene } = useThree();

    useEffect(() => {
        console.log('Room Model Loaded');
        // if (dirLightRef.current) { 
        //     const dirHelper = new DirectionalLightHelper(dirLightRef.current);
        //     scene.add(dirHelper);
        // }

        if (spotLightRef.current) { 
            // const spotHelper = new SpotLightHelper(spotLightRef.current);
            // scene.add(spotHelper);
            spotLightRef.current.target = deskTarget;
            scene.add(spotLightRef.current.target);
        }
    });

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
        />
        <spotLight 
            ref={spotLightRef}
            color={'#FF8C00'}
            position={[-1.5, 3, -10]} 
            angle={3} 
            penumbra={0.5} 
            intensity={0.8} 
        />
        <spotLight 
            ref={spotLightRef}
            color={'#c1dbf1'}
            position={[-5.2, 1.5, -6.7]} 
            angle={3} 
            penumbra={0.5} 
            intensity={0.8} 
        />
        <pointLight 
            color={'#d8af93'}
            intensity={0.4}
            position={[5, 3, -10]}
        />
        <primitive 
            object={room.scene}
            scale={isMobile ? 2:3}
            position={[0,-3.25,-1.5]}
        />
        </mesh>
    )
};

const RoomCanvas = () => {
    const [modelLoaded, setModelLoaded] = useState(false);
    const modelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setModelLoaded(true);
              if (modelRef.current) {
                observer.unobserve(modelRef.current);
              }
            }
          },
          // Start loading the model when it's 10% visible
          { threshold: 0.1 } 
        );
        if (modelRef.current) {
          observer.observe(modelRef.current);
        }
        const currentRef = modelRef.current;
        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        };
    }, []);

    return (
        <div ref={modelRef} className='rCanvas_wrapper'>
            {modelLoaded && (
                <Canvas
                frameloop='demand'
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
                    <Room/>
                </Suspense>
                <Preload all />
            </Canvas>
            )}
        </div>
    );
};

export default RoomCanvas;