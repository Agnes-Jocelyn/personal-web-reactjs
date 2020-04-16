import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Index from "./components/Index";
import Portfolio from "./components/Portfolio";
import Article from "./components/Article";
import HireMe from "./components/Hireme";
import Footer from "./components/Footer";
import "./components/Style.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
        <Route path="/hire">
            <HireMe />
          </Route>
        <Route path="/article">
            <Article/>
          </Route>
        <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
