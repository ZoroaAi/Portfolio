import '../styles/navbar.scss'
import logo from '../images/Logo.png'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-top">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="navbar-middle">
                <ul>
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#aboutMe">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-bottom">
                <button type="button">Email me</button>
            </div>
        </div>
    )
}
export default Navbar;