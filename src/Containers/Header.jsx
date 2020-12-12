import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import '../assets/styles/Header.scss'
export default function Header() {
  return (
    <header>
      <Navbar />
      <Hero />
    </header>
  );
}
