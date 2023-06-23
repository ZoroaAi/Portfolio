import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faListCheck, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.scss'
import logo from '../assets/Logo.png'

function Navbar(){
    const handleClick = (event, targetId) => {
        event.preventDefault();

        console.log('In handleClick Event');

        const targetElement = document.getElementById(targetId);
        if (targetElement){
            window.scrollTo({
                top: 100,
                behavior:'smooth',
            });
        }
    }
    return(
        <div className="navbar">
            <div className="navbar-top">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="navbar-middle">
                <ul>
                    <li>
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
                    </li>
                </ul>
            </div>
            <div className="navbar-bottom">
                <button type="button">Email Me</button>
            </div>
        </div>
    )
}
export default Navbar;