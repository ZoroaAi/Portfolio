
import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink} from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import '../../styles/navbar.scss';
import { navLinks } from '../../constants/constant';
import { cv } from '../../assets/';
import { DarkModeContext } from '../dark_mode/DarkMode';

const navVariants = {
    open: { opacity: 1, height: "100vh" },
    closed: { opacity: 0, height: 0 }
};

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

export const MenuButton = ({
    isOpen = false,
    width = 24,
    height = 24,
    strokeWidth = 1,
    color = "#000",
    transition = null,
    lineProps = null,
    onClick,
    ...props
    }) => {
        const variant = isOpen ? "opened" : "closed";
        const top = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: 2
        }
        };
        const center = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
        };
        const bottom = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: -45,
            translateY: -2
        }
        };
        lineProps = {
            stroke: color,
            strokeWidth: Number(strokeWidth),
            vectorEffect: "non-scaling-stroke",
            initial: "closed",
            animate: variant,
            transition,
            ...lineProps
        };
        const unitHeight = 4;
        const unitWidth = (unitHeight * Number(width)) / Number(height);
    
        return (
        <motion.svg
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            width={width}
            height={height}
            className={'burger'}
            onClick={onClick}
            {...props}
        >
            <motion.line
            x1="0"
            x2={unitWidth}
            y1="0"
            y2="0"
            variants={top}
            {...lineProps}
            />
            <motion.line
            x1="0"
            x2={unitWidth}
            y1="2"
            y2="2"
            variants={center}
            {...lineProps}
            />
            <motion.line
            x1="0"
            x2={unitWidth}
            y1="4"
            y2="4"
            variants={bottom}
            {...lineProps}
            />
        </motion.svg>
    );
};

export const MobileMenu = ({isOpen, toggle, setActive}) => {
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul className={`mobile_nav mobile_nav_list ${isOpen ? 'open' : ''}`}
                        variants={navVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {navLinks.map((link) => (
                            <li key={link.id} className='mobile_nav_list_item'>
                                <ScrollLink
                                    activeClass="active"
                                    to={link.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={500}
                                    onClick={() => {setActive(link.title)}}
                                >
                                    {link.title}
                                </ScrollLink>
                            </li>
                        ))}
                        <li>
                            <ThemeButton />
                        </li>
                        <li>
                            <a href='_blank' download={cv}>
                                <button className='download_button'>
                                    <FontAwesomeIcon icon={faFileArrowDown} />
                                    <span>Download My CV</span>
                                </button>
                            </a>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    )
}

export const ThemeButton = (props) => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    const toggleSwitch = () => {
        console.log("Theme Button Clicked.")
        setDarkMode(prevMode => !prevMode);
    }
    
    return(
        <div className={`switch ${darkMode ? 'dark' : ''}`} data-darkMode={darkMode} onClick={toggleSwitch}>
            <input type="checkbox" checked={darkMode} readonly/>
            <motion.div className="handle" layout transition={spring} />
        </div>
    );
}