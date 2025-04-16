import express, { Application as ExpressApplication } from "express";
import { ServiceContainer } from "./container/ServiceContainer";
import { Constructor } from "../general/types";
import { Router } from "./router/Router";
import { SomeService } from "./SomeService";

export class Application {
	protected _expressApp!: ExpressApplication;

	protected _serviceContainer!: ServiceContainer;

	protected static _instance: Application;

	constructor() {
		this.createExpressApplication();
		this.createServiceContainer();

		Application.bind(SomeService);
	}

	protected createExpressApplication() {
		this._expressApp = express();
	}

	protected createServiceContainer() {
		this._serviceContainer = new ServiceContainer();
	}

	withRoutes(routes: Router[]): Application {
		routes.forEach(route => {
			this._expressApp.use(route.getNative());
		});
		return this;
	}

	static bind(service: Constructor, name?: string) {
		Application._instance._serviceContainer.bind(service, name);
	}

	static resolve<T>(service: Constructor |string) {
		console.log(this._instance);
		return Application._instance._serviceContainer.resolve<T>(service);
	}

	serve() {
		this._expressApp.listen(4040, () =>
			console.log("node is listening on: http://localhost:4040")
		);
	}
}
