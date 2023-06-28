import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Room = () => {
  const room = useGLTF('../../assets/models/room/room_model.glb')
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

const RoomCanvas = () => {
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

export default RoomCanvas;