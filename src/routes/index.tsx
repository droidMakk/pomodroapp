import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { LoginScreen } from "../screens";
import { routes } from "./map";

export function AppRouter() {
	return (
		<Switch>
			<Redirect exact from={"/"} to={routes.login} />
			<Route path={routes.login} component={LoginScreen} />
		</Switch>
	);
}
