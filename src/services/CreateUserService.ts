import { User } from "../entities/User";
import { UserRepository } from "../repositories/UsersRepositories";
import { FindOneOptions, FindOptionsWhere } from 'typeorm';
import { hash } from "bcryptjs";
import { response } from "express";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute({ name, email, admin = false, password }: IUserRequest) {

        const findOptions: FindOneOptions<User> = {
            where: {
                email: email,
            } as FindOptionsWhere<User>,
        };

        if (!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await UserRepository.findOne(findOptions)

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8);

        const user = UserRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await UserRepository.save(user);

        return user;
    }

}

export { CreateUserService }