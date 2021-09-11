import React from "react";
import About from "./Pages/About";
import Landing from "./Pages/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Psicoeducativos from "./Pages/Psicoterapeuticos";
import Empresariales from "./Pages/Empresariales";
import Asesoria from "./Pages/Aseroria";
function App() {
  const location = useLocation();
 
    useLayoutEffect(() => {
    window.scrollTo(0, 0);
    }, [location.pathname]);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route
              path="/programas/psicoeducativos"
              component={Psicoeducativos}
            />
            <Route
              path="/programas/empresariales"
              component={Empresariales}
            />
            <Route path="/asesoria" component={Asesoria} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
