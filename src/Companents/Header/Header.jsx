import React,{ useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/pokimon.png";
import bg from "../../images/photo-1613771404721-1f92d799e49f.jpeg";
import { Context } from '../../PokimonyContext/Context';
import "./Header.css";

  const Header = () => {
    const { searchText, setSearchText } = React.useContext(Context);
    // console.log(searchText);

    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
  });

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
            <input
              class="search-input form-control-search"
              value={searchText}
              onChange={(e)=> setSearchText(e.target.value)}
              type="text"
              placeholder="Enter Your favorite pokemon"
            />
          </div>
        </div>
      </header>
      <section className="image-holder">
        <img src={bg} alt="" className="bg" />
      </section>
    </>
  );
};
export default Header;
