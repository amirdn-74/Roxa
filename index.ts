import { Application } from "./foundation/Application";
import web from "./sandbox/routes/web";

const app = new Application();

app.withRoutes([web]).serve();
