import React, {Component} from "react";
import {render} from "react-dom";
import HomePage from "./HomePage";
import Cv from "./Cv";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

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
                    <Route path="/cv" component={Cv}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
