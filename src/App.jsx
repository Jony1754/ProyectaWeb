import React from "react";
import About from "./Pages/About";
import Landing from "./Pages/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Psicoeducativos from "./Pages/Psicoterapeuticos";
import Empresariales from "./Pages/Empresariales";
import Asesoria from "./Pages/Aseroria";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/programas/psicoeducativos"
              component={Psicoeducativos}
            />
            <Route
              exact
              path="/programas/empresariales"
              component={Empresariales}
            />
            <Route exact path="/asesoria" component={Asesoria} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
