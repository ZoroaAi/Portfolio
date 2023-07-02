import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { motion, useCycle } from 'framer-motion';

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
    <button onClick={toggle}>
      <svg width="15" height="15" viewBox="0 0 15 15">
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


function Navbar(){
    const [active, setActive] = useCycle(false, true);
    const [isOpen, toggleOpen] = useState();
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobileView(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
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
            <div className="navbar">
                <div className="navbar-right">
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

            <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
                <motion.div className={`mobile-menu ${isOpen ? 'open' : ''}`} variants={sideBarVariant}>
                    <div>
                        {/* <button onClick={() => toggleOpen(!isOpen)}>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="fa_icon" />
                        </button> */}
                        <motion.ul variants={mobileNavVariant}>
                            {navLinks.map((link) => (
                            <motion.li key={link.id} variants={mobileItemVariant} 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ScrollLink
                                    activeClass="active"
                                    to={link.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => setActive(link.title)}
                                >
                                    {link.title}
                                </ScrollLink>
                            </motion.li>
                            ))}
                            <li></li>
                        </motion.ul>
                        <MenuToggle toggle={() => toggleOpen()} />
                    </div>
                </motion.div>
            </motion.nav>
        </nav>
    )
}
export default Navbar;