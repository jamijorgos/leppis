import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';

import logoleppis from '../images/navLeppis2.png'

const Navbar = ({ setGlobalCategory }) => {

    useEffect(() => {
        navSlide();
    }, []);
    useEffect(() => {
        toggleSticky();
    }, []);

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const sideNav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            //toggle nav
            sideNav.classList.toggle('nav-active');

            //animate links
            navLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.3s ease forwards ${index / 10 + 0.2}s`
                }
            });
            //Burger animation
            burger.classList.toggle('toggle');
        })
    }
    const toggleSticky= () => {
        const nav = document.querySelector('.navbar');

        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 10){
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        });
    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logoleppis}/>
                <h4><Link to="/">Leppis Oy</Link></h4>
            </div> 
            <ul className='nav-links'>
                <li><NavLink to="/" className="nav-link">Etusivu</NavLink></li>
                <li><NavLink to="/tuotteet" onClick={(e) => setGlobalCategory()} className="nav-link tuotteet-link">Tuotteet</NavLink></li>
                <li><NavLink to="/yhteystiedot" className="nav-link">Yhteystiedot</NavLink></li>
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}

export default Navbar;
