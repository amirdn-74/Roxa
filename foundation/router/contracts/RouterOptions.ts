import { RequestHandler } from "express";

export interface RouterOptions {
    prefix?: string;
    middleware?: RequestHandler | RequestHandler[];
}