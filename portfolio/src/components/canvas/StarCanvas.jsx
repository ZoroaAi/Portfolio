import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { wrap } from "comlink";

const Stars = (props) => {
    const ref = useRef();
    const [sphere, setSphere] = useState();

    useEffect(() => {
      const generateStars = async () => {
        const storedStars = localStorage.getItem('stars');

        // Retrieve/ Store stars (for speed)
        if (storedStars){
          setSphere(JSON.parse(storedStars));
        }else{
          const stars = new Float32Array(3 * 10000);
          for (let i = 0; i < 10000 * 3; i+=3) {
            stars[i] = 100 * (Math.random() - 0.5);
            stars[i + 1] = 100 * (Math.random() - 0.5);
            stars[i + 2] = 100 * (Math.random() - 0.5);
          }
          localStorage.setItem('stars', JSON.stringify(stars));
          setSphere(stars);
        }
      };
      
      generateStars();
    }, []);
  
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