import { UserRepository } from "../repositories/UsersRepositories"
import { instanceToPlain } from "class-transformer";

class ListUserService {
    async exec() {
        const users = await UserRepository.find();
        return instanceToPlain(users);
    }
}

export { ListUserService }