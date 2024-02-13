import { AppDataSource } from "../data-source"
import { Tag } from "../entities/Tag"

const TagRepository = AppDataSource.getRepository(Tag)

export { TagRepository }