import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

import '../../styles/loader.scss';
import { clouds } from "../../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons'

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

const PageLoader = ({loading}) => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        if (loading) {
        const controls = animate(0, 100, {
            duration: 3,
            onUpdate(value) {
            setLoadingProgress(value);
            },
        });

        return controls.stop;
        } else {
        setLoadingProgress(100);
        }
    }, [loading]);

    return (
        <div className="loader_wrapper">
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
                        initial= {{ opacity: 0, scale:0.8 }}
                        animate={{ opacity: 1, scale: [1,1.1,1]}}
                        transition={{
                            duration: 0.7,
                            delay: 0.8,
                            ease: 'easeOut'
                        }}
                        style={{
                            visibility: isVisible ? 'visible' : 'hidden',
                            width: `${loadingProgress}%`,
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default PageLoader;