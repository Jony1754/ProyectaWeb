import React from "react";
import Navbar from "../Components/Navbar";
import Sidenav from "../Components/Sidenav";
import "../assets/styles/Header.scss";
export default function Header() {
  return (
    <header>
      <Sidenav />
      <Navbar />
    </header>
  );
}
