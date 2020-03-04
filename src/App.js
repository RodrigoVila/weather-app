import React, { Fragment } from "react";
import "./App.css";
import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import Cities from "./components/Cities";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Router>
        <ul>
          <li>
            <Link to="/main">Ciudad Actual</Link>
          </li>

          <li>
            <Link to="/bogota">Bogota</Link>
          </li>

          <li>
            <Link to="/toronto">Toronto</Link>
          </li>

          <li>
            <Link to="/barcelona">Barcelona</Link>
          </li>

          <li>
            <Link to="/milan">Milan</Link>
          </li>

          <li>
            <Link to="/amsterdam">Amsterdam</Link>
          </li>
        </ul>

        <Switch>
          <Fragment>
            <div className="main-container">
              <div className="info-container">
                <Route exact path="/main">
                  <CurrentCity />
                  <div className="forecast-container">
                    <Forecast city="olivos" />
                  </div>
                </Route>
                <Redirect from="/" to="/main" />

                <Route path="/Bogota">
                  <Cities city="bogota" />
                  <div className="forecast-container">
                    <Forecast city="bogota" />
                  </div>
                </Route>

                <Route path="/toronto">
                  <Cities city="toronto" />
                  <div className="forecast-container">
                    <Forecast city="toronto" />
                  </div>
                </Route>

                <Route path="/barcelona">
                  <Cities city="barcelona" />
                  <div className="forecast-container">
                    <Forecast city="barcelona" />
                  </div>
                </Route>

                <Route path="/milan">
                  <Cities city="milan" />
                  <div className="forecast-container">
                    <Forecast city="milan" />
                  </div>
                </Route>

                <Route path="/amsterdam">
                  <Cities city="amsterdam" />
                  <div className="forecast-container">
                    <Forecast city="amsterdam" />
                  </div>
                </Route>
              </div>
            </div>
          </Fragment>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
