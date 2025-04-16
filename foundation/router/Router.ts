import { BaseService } from "../container/contracts/BaseService";
import {Router as ExpressRouter, RequestHandler} from 'express';
import { RouterOptions } from "./contracts/RouterOptions";

export class Router {
    protected _expressRouter: ExpressRouter;

    protected _prefix: string = '';

    protected _middlewares: RequestHandler | RequestHandler[] = [];

    constructor(options?: RouterOptions) {
        this._expressRouter = ExpressRouter();

        if (options?.prefix) this._prefix = options.prefix;
        if (options?.middleware) this._middlewares = options.middleware;
    }

    get(path: string, ...handlers: RequestHandler[]) {
        this._expressRouter.get(this.parseRoutePath(path), handlers);
    }

    post(path: string, ...handlers: RequestHandler[]) {
        this._expressRouter.post(this.parseRoutePath(path), handlers);
    }

    put(path: string, ...handlers: RequestHandler[]) {
        this._expressRouter.put(this.parseRoutePath(path), handlers);
    }

    patch(path: string, ...handlers: RequestHandler[]) {
        this._expressRouter.patch(this.parseRoutePath(path), handlers);
    }

    delete(path: string, ...handlers: RequestHandler[]) {
        this._expressRouter.delete(this.parseRoutePath(path), handlers);
    }

    protected parseRoutePath(path: string): string {
        const _path = this._prefix + '/' + path;
        return _path.replace(/\/+/g, '/');
    }

    getNative(): ExpressRouter {
        return this._expressRouter;
    }
}
