import { TagRepository } from "../repositories/TagsRepositories"

class ListTagsService {

    async exec() {

        const tags = await TagRepository.find();

        return tags;

    }
}

export { ListTagsService }