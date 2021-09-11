import React, { useEffect } from "react";
import "../assets/styles/Navbar.scss";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import user from "../assets/icons/user.svg";

import { Link, NavLink } from "react-router-dom";
import hamb_menu from "../assets/icons/hamb_menu.svg";

export default function Navbar() {
  useEffect(() => {
    const open = document.getElementById("hamb_menu");
    open.onclick = (event) => {
      document.getElementById("mySidenav").style.width = "100%";
      disableScroll();
    };
  }, []);
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  return (
    <nav>
      <img src={hamb_menu} alt="" className="hamb_menu" id="hamb_menu" />
      <img src={logo} alt="" className="header--logo" />
      <ul className="header--navbar">
        <li>
          <NavLink activeClassName="active" exact to="/#/">
            Inicio
          </NavLink>
        </li>
        <li className="programs">
          <a href="/#/">Programas</a>
          <ul className="programs--list">
            <li>
              <NavLink activeClassName="active" to="/#/programas/psicoeducativos">
                Psicoterapéuticos
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/#/programas/empresariales">
                Empresariales y Psicoeducativos
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink activeClassName="active" to="/#/about">
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/#/asesoria">
            Asesor&iacute;a virtual
          </NavLink>
        </li>
      </ul>
      <ul className="navbar--social-branding">
        <li>
          <a href='https://www.facebook.com/Proyecta-Potenciales-Humanos-100640651833333/'>
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/psicoproyecta/' id="instagram">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/company/proyecta-potenciales-humanos' id="linkedin">
            <img src={linkedin} alt="" />
          </a>
        </li>

        {/* <li>
          <Link to="/account">
            <img src={user} alt="" />
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
