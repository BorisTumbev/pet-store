import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/404";


const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={Error404} />
        </Switch>
    </div>
);

export default BaseRouter;
