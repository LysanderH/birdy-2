import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddBird from "./pages/AddBird"
import Map from "./pages/Map"
import Profile from "./pages/Profile"
import MyCaptures from "./pages/MyCaptures"
import User from "./pages/User"
import Encyclopedia from "./pages/Encyclopedia";
import CapturedBird from "./pages/CapturedBird";
import Bird from "./pages/Bird";

// Utils
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/add-bird" component={AddBird} />
          <PrivateRoute path="/map" component={Map} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute exact path="/captures" component={MyCaptures} />
          <PrivateRoute exact path="/captures/:bird" component={CapturedBird} />
          <PrivateRoute path="/user" component={User} />
          <PrivateRoute path="/encyclopedia" component={Encyclopedia} />
          <PrivateRoute path="/encyclopedia/:bird" component={Bird} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
