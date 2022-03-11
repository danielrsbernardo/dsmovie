import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './style.css';
function NavBar() {
    return (
        <header>
            <nav className='container'>
                <div className='ds-movie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/danielrsbernardo/dsmovie/commits?author=danielrsbernardo">
                        <div className='dsmovie-contact-container'>
                            <GitHubIcon />
                            <p className='dsmovie-contact-link'>/danielrsbernardo</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;