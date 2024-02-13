import { Tag } from "../entities/Tag";
import { FindOneOptions, FindOptionsWhere } from 'typeorm';
import { TagRepository } from "../repositories/TagsRepositories";

class CreateTagService {

    async execute(name: string) {
        if (!name) {
            throw new Error("Name incorrect");
        }

        const findOptions: FindOneOptions<Tag> = {
            where: {
                name: name,
            } as FindOptionsWhere<Tag>,
        };

        const tagAlreadyExcists = await TagRepository.findOne(findOptions)

        if (tagAlreadyExcists) {
            throw new Error("Tag already exists")
        }

        const tag = TagRepository.create({
            name
        });

        await TagRepository.save(tag);

        return tag;
    }

}

export { CreateTagService }