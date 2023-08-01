import { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.scss';
import { navLinks } from '../constants/constant';
import { logo, cv } from '../assets';
import { MobileMenu, MenuButton, ThemeButton } from './helperComps/Menu';
import { DarkModeContext } from './dark_mode/DarkMode';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { darkMode } = useContext(DarkModeContext);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <nav>
            <div className="navbar_left">
                <RouterLink to='/' onClick={() => {
                    setActive("");
                    window.scrollTo(0,0);
                }}>
                    <img src={logo} alt="logo" className="logo"/>
                </RouterLink>
            </div>
            <div className="navbar_right">
                {isMobile ? (
                    <MobileMenu isOpen={isOpen} toggle={() => {setIsOpen(!isOpen)}} setActive={setActive} />
                ) : (
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
                        <li className='linkedin_img'>
                            <a href="https://www.linkedin.com/in/saurav-kc-045083200/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill={darkMode ? 'white' : '#7b7169'} className="linkedin_icon">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <ThemeButton />
                        </li>
                        <li>
                            <a href='_blank' download={cv}>
                                <button className='download_button'>
                                    <FontAwesomeIcon icon={faFileArrowDown} />
                                    <span>CV</span>
                                </button>
                            </a>
                        </li>
                    </ul>
                )}
            </div>
            {isMobile && (
                <div className='burger_wrapper' onClick={() => {handleToggle()}}>
                    <MenuButton isOpen={isOpen} color={darkMode ? 'white': 'black'} />
                </div>
            )}
        </nav>
    )
}
export default Navbar;