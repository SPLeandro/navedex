import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logoFull from '../../assets/LogoFull.svg';

function Header(){
    return (
        <header>
            <Link to="/">
                <img src={logoFull} alt="nave.rs"></img>
            </Link>
            
            <Link to="/login" onClick={()=> {sessionStorage.clear()}}>
                <strong>Sair</strong>
            </Link>

        </header>
    )
}

export default Header;