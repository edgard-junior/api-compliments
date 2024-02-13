import { UserRepository } from "../repositories/UsersRepositories";
import { FindOneOptions, FindOptionsWhere } from 'typeorm';
import { User } from "../entities/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {

        const findOptions: FindOneOptions<User> = {
            where: {
                email: email,
            } as FindOptionsWhere<User>,
        };

        const user = await UserRepository.findOne(findOptions)
        if (!user) {
            throw new Error("Email/Passoword incorrect")
        }

        const passwordMath = await compare(password, user.password)
        if (!passwordMath) {
            throw new Error("Email/Passoword incorrect")
        }

        const token = sign(
            {
                emai: user.email
            }, "3d7f66b6042c02df971ae6cd942b28d8",
            {
                subject: user.id,
                expiresIn: "1d"
            }) //md5-hash

        return token;

    }
}

export { AuthenticateUserService }