import React from "react";
import Header from "./Containers/Header.jsx";
import Footer from "./Components/Footer";
export default function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
    //This is just a comment
  );
}
