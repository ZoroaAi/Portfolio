import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { motion, useCycle, AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.scss';
import { navLinks } from '../constants/constant';
import { logo, cv } from '../assets';
import { mobileItemVariant, mobileNavVariant, sideBarVariant } from '../utils/motion';

const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
);
  
const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} className='menu_toggle_button'>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
);

const navVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
};

const MobileMenu = ({isOpen, toggle}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="navbar-collapse"
                    variants={navVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
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
                                    onClick={toggle}
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
    )
}

function Navbar(){
    const [isOpen, toggleOpen] = useState(false);
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
            <div className="navbar_right">
            {isMobile ? (
                <div className="navbar_right">
                    <MenuToggle toggle={() => toggleOpen(!isOpen)} />
                    <MobileMenu isOpen={isOpen} toggle={() => toggleOpen(!isOpen)} />
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

            </div>
        </nav>
    )
}
export default Navbar;