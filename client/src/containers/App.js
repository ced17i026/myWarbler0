import React, { Component } from 'react';
import Navbar from "./Navbar";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import initializeStore from "../store";
import Main from "./Main";
import {addUser} from "../store/actions/auth";
import jwtDecode from "jwt-decode";
import {setTokenHeader} from "../services/api";
const store = initializeStore();
if(localStorage.length > 0){
  let userData = jwtDecode(localStorage.jwtToken);
  if(userData){
    store.dispatch(addUser(userData));
    setTokenHeader(localStorage.jwtToken);
  }
}
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
