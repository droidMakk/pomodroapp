import React, { ReactNode } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Input } from "../../components/common";

interface LoginProps {}

interface LoginState {
	loginClicked: boolean;
	loginDisabled: boolean;
	inputs: ILoginFields;
}

interface ILoginFields {
	username: string;
	password: string;
}

export interface ILoginScreen {
	title: string;
	subTitle: string;
	state: LoginState;
	handleInput: (type: string) => (e: React.FormEvent<HTMLInputElement>) => void;
	validateInput: (inputs: ILoginFields) => boolean;
	footer: ReactNode;
}

export class LoginScreen extends React.Component<LoginProps, LoginState> implements ILoginScreen {
	title = "Login";
	subTitle = "Enter your credentials to get started!";
	state: LoginState = {
		loginClicked: false,
		loginDisabled: false,
		inputs: { username: "", password: "" }
	};

	handleInput = (type: string) => {
		console.info("TYPE", type);
		return (e: React.FormEvent<HTMLInputElement>) => {
			console.info("VALUE", e.currentTarget.value);

			let state = this.state;
			state.inputs = {
				...state.inputs,
				[type]: e.currentTarget.value
			};
		};
	};

	validateInput = (inputs: ILoginFields): boolean => {
		let isSubmittable = true,
			testRegex = /^$|\s+/;

		isSubmittable = !testRegex.test(inputs.username) && !testRegex.test(inputs.password);

		return isSubmittable;
	};

	footer = () => (
		<span>
			<Button label="Login" icon="pi pi-times" className="p-button-secondary" disabled={false} />
		</span>
	);

	handleSubmit = (hasError: boolean, e: React.FormEvent<HTMLFormElement>) => {
		let formdata = new FormData(e.currentTarget);
		console.info("FORM VALUES", formdata.get("username"), formdata.get("password"));
	};

	render() {
		return (
			<div className="login-content-holder content-section implementation">
				<div className="content-section implementation">
					<Title />
					<Card title={this.title} subTitle={this.subTitle} style={{ width: "360px" }} className="ui-card-shadow" footer={this.footer}>
						<div>
							<form
								onSubmit={e => {
									this.handleSubmit(true, e);
								}}
								action={"javascript:void(0);"}
							>
								<Input name="username" type="text" label="Username" required />
								<Input name="password" label="Password" type="password" required />
								<Button label="🔑  Login" type="submit" />
							</form>
						</div>
					</Card>
				</div>
			</div>
		);
	}
}

const Title = () => (
	<h1 style={{ fontSize: "50px" }}>
		🍅
		<span> Pomodro</span>
	</h1>
);
