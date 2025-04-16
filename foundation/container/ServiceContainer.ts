import { Constructor } from "../../general/types";
import { ServiceNotFoundException } from "../exceptions/ServiceNotFoundException";
import { BaseService } from "./contracts/BaseService";

export class ServiceContainer {
	protected _services: Map<string, any> = new Map();

	bind(service: Constructor, name?: string) {
		const _name = name ? name : service.name;

		this._services.set(_name, (new service()));
	}

	resolve<T>(service: Constructor | string): T {
		let _name = '';

		if (typeof service == 'string') _name = service;
		else _name = service.name;

		if (!this._services.has(_name)) throw new ServiceNotFoundException(_name);

		const _service = this._services.get(_name);

		return <T>_service;
	}
}
