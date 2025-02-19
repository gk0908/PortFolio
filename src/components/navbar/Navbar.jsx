import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Corrected import statement
import { HiX } from 'react-icons/hi'; // Corrected import statement
import { Link } from 'react-router-dom';
import './style.scss';
import Gon from './gk.jpg';

const data = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'About me', // Corrected typo
        to: '/about',
    },
    {
        label: 'Skills',
        to: '/skills',
    },
    {
        label: 'Resume',
        to: '/resume',
    },
    {
        label: 'Portfolio',
        to: '/portfolio',
    },
    {
        label: 'Contacts',
        to: '/contact',
    },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon); 
    }

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to='/' className='navbar_container_logo'>
                        <img 
                            src={Gon} // Ensure the image path is correct
                            alt="Your Logo" 
                            style={{ 
                                width: '60px', 
                                height: '60px', 
                                borderRadius: '60%', // Makes the image circular
                                border: '0.4px solid yellow' // Adds a yellow border
                            }} 
                        />
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}> {/* Corrected template literal usage */}
                    {data.map((item, key) => (
                        <li key={key} className='navbar_container_menu_item'>
                            <Link 
                                className='navbar_container_menu_links' 
                                to={item.to} 
                                style={{
                                    color: 'var(--yellow-theme-main-color)', // Inline CSS for the yellow color
                                    textDecoration: 'none',
                                    padding: '0.5rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;