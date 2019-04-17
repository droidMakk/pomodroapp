import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { routes } from "./map";

interface PrivateRouteState {
	isAuthenticated: Boolean;
}

export class PrivateRoute extends React.Component<RouteProps, PrivateRouteState> {
	constructor(props: RouteProps) {
		super(props);

		this.state = {
			isAuthenticated: true
		};
	}

	render() {
		let { component: Component, ...rest } = this.props;

		return this.state.isAuthenticated ? (
			<Route {...rest} render={props => <Component {...props} />} />
		) : (
			<Redirect to={routes.login} />
		);
	}
}
