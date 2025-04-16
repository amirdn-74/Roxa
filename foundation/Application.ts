import express, { Application as ExpressApplication } from "express";
import { ServiceContainer } from "./container/ServiceContainer";
import { Constructor } from "../general/types";
import { Router } from "./router/Router";

export class Application {
	protected _expressApp!: ExpressApplication;

	protected _serviceContainer!: ServiceContainer;

	protected static _instance: Application;

	constructor() {
		this.createExpressApplication();
		this.createServiceContainer();
	}

	protected createExpressApplication() {
		this._expressApp = express();
	}

	protected createServiceContainer() {
		this._serviceContainer = new ServiceContainer();
	}

	withRoutes(routes: Router[]): Application {
		return this;
	}

	bind(service: Constructor, name?: string) {
		this._serviceContainer.bind(service, name);
	}

	resolve<T>(service: Constructor, name?: string) {
		this._serviceContainer.resolve<T>(service, name);
	}

	serve() {
		this._expressApp.listen(4040, () =>
			console.log("node is listening on: http://localhost:4040")
		);
	}
}
