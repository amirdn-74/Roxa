import { Request, Response } from "express";
import { Router } from "../../foundation/router/Router";
import SomeServiceFacade from "../../foundation/SomeServiceFacade";

const route = new Router({
    prefix: '/app/panel/'
});

route.get('/roxa', (req: Request, res: Response) => {
    SomeServiceFacade.sayHello();
    res.send('Hello Roxa!');
});

export default route;