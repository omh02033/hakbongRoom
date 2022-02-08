import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());
app.use(cors({ credentials: true }));

export default app;