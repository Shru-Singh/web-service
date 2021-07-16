import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contactus";

const ReactRouterSetup = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                 <Home/>
                </Route>
                 <Route exact path="/about">
                 <About/>
                </Route>
                  <Route exact path="/services">
                 <Services/>
                </Route>
                  <Route exact path="/contact">
                 <Contact/>
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterSetup;