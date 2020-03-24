import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./Store/index";
import { Provider } from "react-redux";
import Login from "./Pages/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route path="/login" exact component={Login}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
