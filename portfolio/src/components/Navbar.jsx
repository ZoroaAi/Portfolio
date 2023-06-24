import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faListCheck, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.scss';
import { navLinks } from '../constants/constant';
import { logo, menu, close} from '../assets';

function Navbar(){
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

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
            <div className="navbar">
                <div className="navbar-top">
                    <Link to='/' onClick={() => {
                        setActive("");
                        window.scrollTo(0,0);
                    }}>
                        <img src={logo} alt="logo" className="logo"/>
                    </Link>
                </div>
                <div className="navbar-middle">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id} onClick={() => setActive(link.title)}>
                                <a href={link.id}>{link.title}</a>
                            </li>
                        ))}

                        {/* <li>
                            <a href="#intro-section" onClick={(event) => handleClick(event, 'intro-section')}>
                                <FontAwesomeIcon icon={faHouse}/>
                            </a>
                        </li>
                        <li>
                            <a href="#aboutMe-section" onClick={(event) => handleClick(event, 'aboutMe-section')}>
                                <FontAwesomeIcon icon={faAddressCard} />
                            </a>
                        </li>
                        <li>
                            <a href="#project-section" onClick={(event) => handleClick(event, 'project-section')}>
                                <FontAwesomeIcon icon={faListCheck} />
                            </a>
                        </li>
                        <li>
                            <a href="#contact-section" onClick={(event) => handleClick(event, 'contact-section')}>
                                <FontAwesomeIcon icon={faAddressBook} />
                            </a>
                        </li> */}
                    </ul>

                </div>
                <div className="navbar-bottom">
                    <button type="button">Email Me</button>
                </div>
            </div>

            <div className="mobile-menu">
            {isMobileView && (
                <button onClick={() => setToggle(!toggle)}>
                <img src={toggle ? close : menu} alt="toggle menu" />
                </button>
            )}
            </div>
        </nav>
    )
}
export default Navbar;