import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { wrap } from "comlink";

const Stars = (props) => {
    const ref = useRef();
    const [stars, setStars] = useState();

    useEffect(() => {
      const generateStars = async () => {
        const worker = new Worker(new URL('../../workers/starWorker', import.meta.url));
        const actions = wrap(worker);
        const stars = await actions.generateStars();
        setStars(stars);
        worker.terminate();
      };
      
      generateStars();
    }, []);

    useFrame((state, delta) => {
      if (ref.current){
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 30;
      }
    });
  
    return stars ? (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={stars} count={stars.length / 3} {...props}>
          <PointMaterial
            transparent
            color='#f272c8'
            size={0.1}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    ) : null;
};
  
const StarsCanvas = () => {
    return (
        <div className='star_canvas'>
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
            <Stars />
            </Suspense>
            <Preload all />
        </Canvas>
        </div>
    );
};

export default StarsCanvas;