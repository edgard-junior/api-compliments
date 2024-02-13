import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/UsersRepositories";
import { FindOneOptions, FindOptionsWhere } from "typeorm";
import { User } from "../entities/User";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const { user_id } = request;
    const findOptions: FindOneOptions<User> = {
        where: {
            id: user_id,
        } as FindOptionsWhere<User>,
    };

    const { admin } = await UserRepository.findOne(findOptions)

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}