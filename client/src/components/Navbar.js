import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';

import logoleppis from '../images/navLeppis2.png'

const Navbar = ({ setGlobalCategory, setGlobalSubCategory }) => {

    useEffect(() => {
        navSlide();
    }, []);
    useEffect(() => {
        toggleSticky();
    }, []);

    // Mobiili navbar animaatiot    
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const sideNav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            //toggle nav
            sideNav.classList.toggle('nav-active');
            const sidebar = document.querySelector('.sidebar');
            
            if(!sideNav.classList.contains('nav-active') && sidebar.style.display != "none"){
                toggleSubMenu();
            }
            //animate links
            navLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.3s ease forwards ${index / 10 + 0.2}s`
                }
            });
            //Burger animaatio
            burger.classList.toggle('toggle');
            
        })
    }
    // Sticky navbar
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
    // Reset global category
    const tuoteClick = () => {
        setGlobalCategory('');
        setGlobalSubCategory();
        toggleSubMenu();
    }
    //Tuotevalikon avaus/sulkeminen mobiilissa
    const toggleSubMenu = () => {
        const sidebar = document.querySelector('.sidebar');
        var WIDTH_LIMIT = 900;
        var windowWidth = window.innerWidth;
        if(sidebar.style.display == 'none' && windowWidth <= WIDTH_LIMIT){
            sidebar.style.display = 'block';
        } else if (windowWidth <= WIDTH_LIMIT){
            sidebar.style.display = 'none';
        }
        window.addEventListener("resize", function(){
            if(window.innerWidth >= 900)
                sidebar.style.display = 'block';
        })
    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logoleppis}/>
                <h4><Link to="/">Leppis Oy</Link></h4>
            </div> 
            <ul className='nav-links'>
                <li><NavLink to="/" className="nav-link">Etusivu</NavLink></li>
                <li><NavLink to="/tuotteet" onClick={(e) => tuoteClick()} className="nav-link tuotteet-link">Tuotteet</NavLink></li>
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
