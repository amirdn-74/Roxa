import { Constructor } from "../../general/types";
import { ServiceNotFoundException } from "../exceptions/ServiceNotFoundException";
import { BaseService } from "./contracts/BaseService";

export class ServiceContainer {
	protected _services: Map<string, Constructor> = new Map();

	bind(service: Constructor, name?: string) {
		const _name = name ? name : service.name;

		this._services.set(_name, service);
	}

	resolve<T>(service: Constructor, name?: string): T {
		const _name = name ? name : service.name;

		if (!this._services.has(_name)) throw new ServiceNotFoundException(_name);

		const _service = this._services.get(_name);

		return <T>new _service!();
	}
}
