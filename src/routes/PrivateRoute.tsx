import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { routes } from "./map";

interface PrivateRouteState {
	isAuthenticated: Boolean;
}

export class PrivateRoute extends React.Component<RouteProps, PrivateRouteState> {
	constructor(props: RouteProps) {
		super(props);

		// TODO: Set Authentication
		this.state = {
			isAuthenticated: true
		};
	}

	render() {
		let { component , ...rest } = this.props;
		let Component: any = component;

		return this.state.isAuthenticated ? (
			<Route {...rest} render={props => <Component {...props} />} />
		) : (
			<Redirect to={routes.login} />
		);
	}
}