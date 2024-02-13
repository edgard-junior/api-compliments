import { ComplimentsRepository } from '../repositories/ComplimentsRepositories';

class ListUserSendComplimentsService {

    async execute(user_id: string) {

        const compliments = await ComplimentsRepository.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments;

    }

}

export { ListUserSendComplimentsService }