import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import Default from "./Components/Default";
import Nasa from "./Components/Nasa";
import Unsplash from "./Components/Unsplash";
import Welcome from "./Components/Welcome";
import Facebook from "./Components/Facebook";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";
import Albums from "./Components/Albums";
import Photos from "./Components/Photos";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function App() {
  console.log(localStorage.getItem("loggedIn"));
  return (
    <div className="App bg-muted">
      <React.Fragment>
        <NavBar />
        <Switch>
          <ProtectedRoute exact path="/" component={Nasa}></ProtectedRoute>
          <ProtectedRoute path="/posts" component={Posts}></ProtectedRoute>
          <ProtectedRoute path="/albums" component={Albums}></ProtectedRoute>
          <ProtectedRoute
            path="/photos/:id"
            component={Photos}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/comments"
            component={Comments}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/unsplash"
            component={Unsplash}
          ></ProtectedRoute>
          <Route path="/login" component={Facebook}></Route>
          <ProtectedRoute exact path="/" component={Welcome}></ProtectedRoute>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
