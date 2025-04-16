
export abstract class BaseService<T extends BaseService<T>> {
    constructor(...args: any[]) {
        this.register();
    }

    abstract register(): T;
}