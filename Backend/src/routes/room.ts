import { Router, Request, Response } from "express";
import * as dimiApi from "../api/dimiapi";
import knex from "../config/db";
import jwt, { Jwt } from "jsonwebtoken";
import CONF from "../config";
import { tokenInterface, DBRooms } from "../interfaces";

const router = Router();

router
.get('/', async (req: Request, res: Response) => {
    const rooms: Array<DBRooms> = await knex("room");
    res.status(200).json({ success: true, rooms });
})

export default router;