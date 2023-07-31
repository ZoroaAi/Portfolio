import { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faLinkedin } from '@fortawesome/free-solid-svg-icons';

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
                        <li>
                            <a href="https://www.linkedin.com/in/saurav-kc-045083200/">
                                <FontAwesomeIcon icon={faLinkedin} />
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