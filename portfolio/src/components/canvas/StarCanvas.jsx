import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { wrap } from "comlink";

const Stars = (props) => {
    const ref = useRef();
    const [sphere, setSphere] = useState();

    useEffect(() => {
      const generateStars = async () => {
        const worker = new Worker(new URL('../../workers/starWorker', import.meta.url));
        const actions = wrap(worker);

        const storedStars = localStorage.getItem('stars');

        // Retrieve stored stars (for speed)
        if (storedStars){
          setSphere(JSON.parse(storedStars));
        }else{
          const stars = await actions.generateStars();
          localStorage.setItem('stars', JSON.stringify(stars));
          setSphere(stars);
        }

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
  
    return sphere ? (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color='#f272c8'
            size={0.001}
            sizeAttenuation={false}
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