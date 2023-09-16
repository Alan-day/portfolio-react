import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <h1 class="navbar__username">Alan Szafarczyk</h1>
        <ul class="navbar__list">
          <li class="navbar navbar__list--element">
            <a href="#">Home</a>
          </li>
          <li class="navbar navbar__list--element">
            <a href="#about">About</a>
          </li>
          <li class="navbar navbar__list--element">
            <a href="#projects">Projects</a>
          </li>
          <li class="navbar navbar__list--element">
            <a href="#research">Research</a>
          </li>
          <li class="navbar navbar__list--button">
            <a href="https://www.linkedin.com/in/alan-szafarczyk-06996b165/">
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
