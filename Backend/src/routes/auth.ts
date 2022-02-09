import { Router, Request, Response } from "express";
import * as dimiApi from "../api/dimiapi";
import knex from "../config/db";
import jwt, { Jwt } from "jsonwebtoken";
import CONF from "../config";
import { tokenInterface } from "../interfaces";

const router = Router();

router
.post('/login', async (req: Request, res: Response) => {
    const { uid, pwd } = req.body;
    if(!uid) return res.status(400).json({ success: false, message: "아이디를 입력해주세요." });
    if(!pwd) return res.status(400).json({ success: false, message: "비밀번호를 입력해주세요." });
    const dimiUser = await dimiApi.login(uid, pwd);
    if(!dimiUser) return res.status(400).json({ success: false, message: "아이디 또는 비밀번호가 일치하지 않아요." });
    let identity;
    switch(dimiUser.user_type) {
        case 'S':
            return res.status(400).json({ success: false, message: "선생님 권한만 로그인 서비스를 이용할 수 있어요." });
        case 'D':
        case 'T':
            const teacher = (await dimiApi.getTeacher(dimiUser.username))!;
            identity = teacher;
            break;
        case 'O':
        default:
            return res.status(400).json({ success: false, message: "인증된 사용자만 이용할 수 있어요." });
    }
    const token = await jwt.sign({
        userId: identity.user_id,
        roleId: dimiUser.user_type,
        identity
    }, CONF.jwt.key as string, CONF.jwt.options);
    res.status(200).json({ success: true, message: "디미고 로그인에 성공했어요.", token });
})

.get('/isLogin', (req: Request, res: Response) => {
    const token = req.headers.authorization;
    if(!token) return res.status(200).json({
        login: false,
        data: null
    });
    
    const decoded: tokenInterface | jwt.JwtPayload | string = jwt.verify(token, CONF.jwt.key as string);
    if("TD".indexOf((decoded as tokenInterface).roleId) !== -1) {
        res.status(200).json({
            login: true,
            data: decoded
        });
    } else {
        res.status(200).json({
            login: false,
            data: null
        });
    }
})

export default router;