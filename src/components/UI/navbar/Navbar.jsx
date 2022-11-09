import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';

const Navbar = () => {
    return (
        <div className="navbar">
         <div className="navbar__links">
            <MyButton><Link to="/about">Об</Link></MyButton>
            <MyButton><Link to="/posts">Посты</Link></MyButton>
         </div>
      </div>
    );
};

export default Navbar;