import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

const Footer = ({ setGlobalCategory, setGlobalSubCategory }) => {

    useEffect(() => {
        tuoteClick();
    }, []);
    const tuoteClick = () => {
        setGlobalCategory('');
        setGlobalSubCategory();
    }

    return (
        <footer>
            <div className="footer-grid">
                <div>
                    <h1>Leppis Oy</h1>
                    <p><small>&copy; Copyright 2021</small></p>
                </div>
                <nav className="footer-links">
                    <ul>
                    <li><Link to="/" className="footer-link">Koti</Link></li>
                    <li><Link to="/tuotteet" onClick={(e) => tuoteClick()} className="footer-link">Tuotteet</Link></li>
                    <li><Link to="/yhteystiedot" className="footer-link">Yhteystiedot</Link></li>
                    </ul>
                </nav>
                <ul className='login-btns'>
                    <li><Link to="/login" className="login-btn">Kirjaudu</Link></li>
                    <li><a className="login-btn disabled" href="#">Rekisteröidy</a></li>
                    <li><Link to="/adminpanel" className="login-btn">Admin</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
