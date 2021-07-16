import React, {Component, Suspense, lazy} from "react";
import {render} from "react-dom";
import HomePage from "./HomePage";
const Cv = lazy(() => import('./Cv'));
const Portfolio = lazy(() => import('./Portfolio'));
const Contact = lazy(() => import('./Contact'));
const About = lazy(() => import('./About'));

import {HashRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="center">
                <Router>
                    <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/cv" component={Cv}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                    </Suspense>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
