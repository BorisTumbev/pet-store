import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/404";
import Register from "./components/pages/Register";
import Pets from "./components/pages/Pets";


const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/pets" component={Pets} />
            <Route component={Error404} />
        </Switch>
    </div>
);

export default BaseRouter;
