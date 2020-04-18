import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Index from "./components/Index";
import Portfolio from "./components/Portfolio";
import Article from "./components/Article";
import Item from "./components/Item";
import Readmore from "./components/Readmore";
import HireMe from "./components/Hireme";
import Footer from "./components/Footer";
import "./components/Style.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/hire">
            <HireMe />
          </Route>
          <Route path="/article" exact component={Article}>
          <Route path="/Article" component={Item} exact />
          <Route path="/Item" component={Readmore} exact />
            <Article/>
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
