import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import "../assets/styles/Sidenav.scss";

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  enableScroll();
}
export default function Sidenav() {
  //www.youtube.com/watch?v=CXa0f4-dWi4
  useEffect(() => {
    const close = document.getElementById("goback");
    close.onclick = (event) => {
      closeNav();
    };
  }, []);

  return (
    <div className="sidenav" id="mySidenav">
      <a href="#" id="goback"></a>
      <img src={logo} alt="" className="logo" />
      <ul className="sidenav--list">
        <li>
          <NavLink activeClassName="active" exact to="/" onClick={closeNav}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            exact
            to="/about"
            onClick={closeNav}
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            exact
            to="/programas/psicoeducativos"
            onClick={closeNav}
          >
            Programas psicoeducativos
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            exact
            to="/programas/empresariales"
            onClick={closeNav}
          >
            Programas empresariales
          </NavLink>
        </li>
        <li>
          <NavLink to="/asesoria" activeClassName="active" onClick={closeNav}>
            Asesor&iacute;a virtual
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
