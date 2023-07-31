import '../styles/footer.scss';

function Footer(){
    return (
        <footer className="footer-wrapper">
            <div className="footer_break"></div>
            <p>{new Date().getFullYear()} Saurav KC.</p>
        </footer>
    );
}

export default Footer;