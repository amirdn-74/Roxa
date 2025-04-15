import { Application } from "./foundation/Application";
import webRoute from "./sandbox/routes/web";

const app = new Application();

app.withRoutes([webRoute]).serve();
