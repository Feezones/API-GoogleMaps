import './header.css'
import {Link} from 'react-router-dom'


function Header(){
    return(
        <header>
            <Link className='logo' to="/"> API GoogleMaps</Link>
        </header>
    )
}

export default Header;