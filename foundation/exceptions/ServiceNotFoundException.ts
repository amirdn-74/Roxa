export class ServiceNotFoundException extends Error {
	message: string = "";

	constructor(service: string) {
		super();

		this.message = `service {${service}} has not been bound to the container.`;
	}
}
