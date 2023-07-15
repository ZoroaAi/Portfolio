import { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import '../../styles/loader.scss';
import { clouds } from "../../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons'
import { LoadingProgressContext } from "./LoadProgressContext";

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

const PageLoader = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { isLoading } = useContext(LoadingProgressContext);
    const controls = useAnimation();

    useEffect(() => {
        setIsVisible(true);
        controls.start({
            width: '100%',
            transition: { duration: 3 }
        })
    }, [isLoading]);

    return (
        <motion.div 
            className="loader_wrapper"
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div className="computer">
                <motion.div
                    initial= {{ opacity: 0, scale:0.8 }}
                    animate={{ opacity: 1, scale: [1,1.1,1]}}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                        ease: 'easeOut'
                    }}
                    style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                >
                    <div className="bevel">
                        <div className="screen">
                            <Cloud speed={2} i={0} />
                            <Cloud speed={3} i={1} />
                            <Cloud speed={3} i={2} />
                            <Cloud speed={3} i={3} />
                            <span>Loading...</span>
                            <div className="ground"></div>
                            <div className="hill-1"></div>
                            <div className="hill-2"></div>
                            <div className="hill-3"></div>
                            <FontAwesomeIcon 
                                className="pointer" 
                                icon={faArrowPointer}
                            />
                        </div>
                    </div>
                </motion.div>
                <div className="keyboard_mouse">
                    <motion.div
                        initial= {{ opacity: 0, scale:0.8 }}
                        animate={{ opacity: 1, scale: [1,1.1,1]}}
                        transition={{
                            duration: 0.7,
                            delay: 0.4,
                            ease: 'easeOut'
                        }}
                        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                    >
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
                    </motion.div>
                    <motion.div
                        initial= {{ opacity: 0, scale:0.8 }}
                        animate={{ opacity: 1, scale: [1,1.1,1]}}
                        transition={{
                            duration: 0.7,
                            delay: 0.6,
                            ease: 'easeOut'
                        }}
                        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                    >
                        <div className="mouse">
                            <div className="mouse_scroll"></div>
                        </div>
                    </motion.div>
                </div>
                <div className="bar_wrapper">
                    <motion.div
                        className="loading_bar"
                        initial= {{ opacity: 1, scale:0.8, width: '0%' }}
                        animate={{ 
                            opacity: isLoading ? 1 : 0, 
                            scale: [1,1.1,1],
                            width: isLoading ? '100%' : '0%',
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.8,
                            ease: 'easeOut'
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default PageLoader;