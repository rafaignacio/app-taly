import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginComponent from "./components/LoginComponent";
import { StartComponent } from "./components/StartComponent";
import { RegisterComponent } from "./components/RegisterComponent";
import { ReportComponent } from "./components/ReportComponent";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/start" component={StartComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route path="/report" component={ReportComponent} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
