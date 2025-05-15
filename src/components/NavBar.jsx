import linkedinLogo from '..//../public/linkedin.png';

export default function NavBar(){

    return (
        <header className="header">
            <div id="name-and-linkedin">
                <a href="#" className="logo">Luka.</a>
                <a href="#"><img className="logo-image" src={linkedinLogo} alt='linkedin logo'/></a>
            </div>
            <nav className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}