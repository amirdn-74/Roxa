import { Application } from "../Application";

export abstract class Facade {
    protected static serviceName: string;

    static proxy<T extends object>(): T {
        const _name = this.name || this.serviceName;

        const service = Application.resolve<T>(_name);

        return new Proxy(service, {
            get(target: T, prop: string) {
                if (prop in target) return (target as any)[prop];

                throw new Error(`Method "${prop}" does not exist on ${service}.`);
            }
        }) as T;
    }
}