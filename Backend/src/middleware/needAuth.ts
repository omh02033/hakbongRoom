import { Request, Response, NextFunction } from "express";
import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';
import CONF from "../config";

interface tokenInterface {
    userId: string;
    identity: any;
    roleId: string;
}

export default (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization || undefined;
    if(!token) return res.send(false);
    jwt.verify(token, CONF.jwt.key as string, (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
        if(!err) {
            // if("TD".indexOf((decoded as tokenInterface).roleId) !== -1) {}
            req.auth = decoded as tokenInterface;
            next();
        } else return res.send(false);
    });
}