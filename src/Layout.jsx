import React from "react";
import Header from "./Containers/Header.jsx";
export default function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
}
