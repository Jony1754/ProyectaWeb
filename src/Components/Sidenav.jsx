import React from "react";
import logo from "../assets/images/logo.svg";
export default function Sidenav() {
  return (
    <div className="sidenav" id="mySidenav">
      <a href="javascript:void(0)" id="goback"></a>
      <img src={logo} alt="" className="logo" />
      <ul className="sidenav--list">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Programas</a>
        </li>
        <li>
          <a href="">Nosotros</a>
        </li>
        <li>
          <a href="">Asesor&iacute;a virtual</a>
        </li>
      </ul>
    </div>
  );
}
