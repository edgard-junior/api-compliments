import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authtoken = request.headers.authorization;

    if (!authtoken) {
        return response.status(401).end();
    }

    const [, token] = authtoken.split(" ")

    try {
        const { sub } = verify(token, "3d7f66b6042c02df971ae6cd942b28d8") as IPayload;

        request.user_id = sub;

        return next();
    } catch (error) {
        return response.status(401).end();
    }
}