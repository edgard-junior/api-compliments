import { ComplimentsRepository } from "../repositories/ComplimentsRepositories";
import { UserRepository } from "../repositories/UsersRepositories";
import { FindOneOptions, FindOptionsWhere } from "typeorm";
import { User } from "../entities/User";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_receiver, user_sender, message }: IComplimentRequest) {

        const findOptions: FindOneOptions<User> = {
            where: {
                id: user_receiver,
            } as FindOptionsWhere<User>,
        };

        if (user_sender === user_receiver) {
            throw new Error("Incorrect user receiver");
        }

        const userReceiverExists = await UserRepository.findOne(findOptions);

        if (!userReceiverExists) {
            throw new Error("User receiver does not exists");
        }

        const compliment = ComplimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await ComplimentsRepository.save(compliment);
        return compliment;

    }
}

export { CreateComplimentService }