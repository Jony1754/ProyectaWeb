import React from "react";
import "../assets/styles/Navbar.scss";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import user from "../assets/icons/user.svg";

import { Link } from "react-router-dom";

import hamb_menu from "../assets/icons/hamb_menu.svg";
export default function Navbar() {
  return (
    <nav>
      <img src={hamb_menu} alt="" className="hamb_menu" />
      <img src={logo} alt="" className="header--logo" />
      <ul className="header--navbar">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li className="programs">
          <Link>Programas</Link>
          <ul className="programs--list">
            <li>
              <Link to="/programas/psicoeducativos">Psicoeducativos</Link>
            </li>
            <li>
              <Link to="/programas/empresariales">Empresariales</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">Nosotros</Link>
        </li>
        <li>
          <a href="">Asesor&iacute;a virtual</a>
        </li>
      </ul>
      <ul className="navbar--social-branding">
        <li>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="#" id="instagram">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#" id="linkedin">
            <img src={linkedin} alt="" />
          </a>
        </li>

        <li>
          <a href="">
            <img src={user} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
