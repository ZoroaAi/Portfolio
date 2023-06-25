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

                    </ul>

                </div>
                {/* <div className="navbar-bottom">
                    <button type="button">Email Me</button>
                </div> */}
            </div>

            <div className={`mobile-menu ${toggle ? 'open' : ''}`}>
                <div>
                    <button onClick={() => setToggle(!toggle)}>
                        <img src={toggle ? close : menu} alt="toggle menu" />
                    </button>
                    <ul>
                        {navLinks.map((link) => (
                        <li key={link.id} onClick={() => setActive(link.title)}>
                            <a href={link.id}>{link.title}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;