import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.scss';
import { navLinks } from '../constants/constant';
import { logo, cv } from '../assets';

const MenuButton = ({
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

const navVariants = {
    open: { opacity: 1, height: "20vh" },
    closed: { opacity: 0, height: 0 }
};

const MobileMenu = ({isOpen, toggle, setActive}) => {
    return (
        <div className='mobile_wrapper'>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile_nav"
                        variants={navVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className='mobile_nav_list'>
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
                                <a href='_blank' download={cv}>
                                    <button className='download_button'>
                                        <FontAwesomeIcon icon={faFileArrowDown} />
                                        <span>Download My CV</span>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            <MenuButton isOpen={isOpen} onClick={() => {toggle()}} />
        </div>
    )
}

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <nav>
            <div className="navbar-left">
                <RouterLink to='/' onClick={() => {
                    setActive("");
                    window.scrollTo(0,0);
                }}>
                    <img src={logo} alt="logo" className="logo"/>
                </RouterLink>
            </div>
            {isMobile ? (
                <div className="navbar_right">
                    <MobileMenu isOpen={isOpen} toggle={() => {setIsOpen(!isOpen)}} setActive={setActive} />
                </div>
            ) : (
                <div className="navbar_right">
                    <div>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.id}> 
                                    <ScrollLink
                                        activeClass="active"
                                        to={link.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-20}
                                        duration={500}
                                        onClick={() => setActive(link.title)}
                                    >
                                        {link.title}
                                    </ScrollLink>
                                </li>
                            ))}
                            <li>
                                <a href='_blank' download={cv}>
                                    <button className='download_button'>
                                        <FontAwesomeIcon icon={faFileArrowDown} />
                                        <span>Download My CV</span>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navbar;