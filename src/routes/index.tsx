import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { LoginScreen, ProfileScreen } from "../screens";
import { routes } from "./map";
import { PrivateRoute } from "./PrivateRoute";

export function AppRouter() {
	return (
		<Switch>
			<Redirect exact from={"/"} to={routes.login} />
			<Route path={routes.login} component={LoginScreen} />
			<PrivateRoute path={routes.profile} component={ProfileScreen} />
		</Switch>
	);
}
