import '../styles/footer.scss';

function Footer(){
    return (
        <footer className="footer-wrapper">
            <p>{new Date().getFullYear()} Saurav KC.</p>
        </footer>
    );
}

export default Footer;