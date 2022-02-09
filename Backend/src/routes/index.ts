import { Express } from "express";
import authRouter from "./auth";
import roomRouter from "./room";
import needAuth from "../middleware/needAuth";

export default (app: Express): void => {
    app.use('/auth', authRouter);
    app.use('/room', roomRouter);
}