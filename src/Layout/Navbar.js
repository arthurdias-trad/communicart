import React from "react";
import wordLogo from "../word-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
        <img src={wordLogo} alt="Logo Communicart" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Cadastre-se
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Como funciona
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link button text-white">
              Fazer login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
