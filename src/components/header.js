import React from 'react';
import './Header.css'; // Asegúrate de que esta línea esté presente

const Header = () => {
    return (
        <header className="header">
            <img 
                src="/Screenshot 2024-09-28 211712.png" 
                alt="Rick and Morty" 
                className="header-image" 
            />
        </header>
    );
};

export default Header;