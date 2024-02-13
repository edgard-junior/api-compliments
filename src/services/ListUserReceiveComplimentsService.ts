import { ComplimentsRepository } from '../repositories/ComplimentsRepositories';

class ListUserReceiveComplimentsService {

    async execute(user_id: string) {

        const compliments = await ComplimentsRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments;

    }

}

export { ListUserReceiveComplimentsService }