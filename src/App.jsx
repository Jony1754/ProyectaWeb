import React from "react";
import About from "./Pages/About";
import Landing from "./Pages/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
