import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/pokemon-25th-anniversary-logo-710x398-removebg-preview.png';
import bg from '../../images/202204_banner_graduation_desktop.jpg';
import './Header.css';

 const Header = () => {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle("sticky" , window.scrollY > 0)
        })


    return (
        <>
            <header className="header">
                <div className="header__wrap container">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/"> Pokimony </Link>
                    </div>
                    <div class="parant-search-div header__nav">
                        <i className="bx bx-search"></i>
                        <input class="search-input form-control-search" type="text" placeholder="Enter Your favorite pokemon" />
                    </div>
                </div>
            </header>
            <section className="image-holder">
                <img src={bg} alt="" className="bg"/>
                <div class="carousel-inner relative">
                    <h1>Welcome to Pokimony World, Explore your favorite Pokemons.</h1>
                    <p>Find your favorite Pokemon and learn more about it, have fun.</p>
                </div>
            </section>

        </>
    );
}
export default Header