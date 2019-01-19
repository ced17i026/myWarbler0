import React, { Component } from 'react';
import {Navbar} from "./Navbar";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import initializeStore from "../store";
import Main from "./Main";
const store = initializeStore();
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Main />
          </div>
        </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
