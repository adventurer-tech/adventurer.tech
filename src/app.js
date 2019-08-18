import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";

import Home from "./containers/home";
import About from "./containers/about";
import Cases from "./containers/cases";
import Join from "./containers/join";
import Opinion from "./containers/opinion";
import Service from "./containers/service";
import { Layout } from "antd";

import { Footer, Header } from "./components/layout";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/cases" component={Cases} />
            <Route path="/join" component={Join} />
            <Route path="/opinion" component={Opinion} />
            <Route path="/service" component={Service} />
            <Route path="/" component={Home} />
          </Switch>

          <Footer />
        </Layout>
      </Router>
    );
  }
}

export default (process.env.NODE_ENV === "development" ? hot(App) : App);
