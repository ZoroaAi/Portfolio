import { motion } from "framer-motion";

import '../../styles/loader.scss';
import { clouds } from "../../assets";

function Cloud({speed, i}) {
    return (
      <motion.div
        className={`cloud cloud-${i+1}`}
        style={{
            backgroundImage: `url(${clouds})`,
        }} 
        initial={{ y: "-10%" }}
        animate={{ y: ["-50%", "5%", "-50%"] }}
        transition={{
            duration: 3 + (i*2),
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut",
            opacity: {
                duration: 0.5,
                repeat: Infinity
            }
        }}
      />
    );
}


const PageLoader = ({isLoading}) => {
    return (
        <div className="loader_wrapper">
            <motion.div className="computer">
                <div className="bevel">
                    <div className="screen">
                        <Cloud speed={2} i={0} />
                        <Cloud speed={3} i={1} />
                        <Cloud speed={3} i={2} />
                        <Cloud speed={3} i={3} />
                        <span>Loading</span>
                        <div className="ground"></div>
                        <div className="hill-1"></div>
                        <div className="hill-2"></div>
                        <div className="hill-3"></div>
                    </div>
                </div>
                <div className="keyboard_mouse">
                    <div className="keyboard">
                        <div className="row">
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                        </div>
                        <div className="row">
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                        </div>
                        <div className="row">
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                        </div>
                    </div>
                    <div className="mouse">
                        <div className="mouse_scroll"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default PageLoader;