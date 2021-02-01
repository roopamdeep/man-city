import React, { Component } from "react";
import "./Resources/css/app.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import Home from "./components/home";
function Routes() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact component={Home} path="/"></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default Routes;
