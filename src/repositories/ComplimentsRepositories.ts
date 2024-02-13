import { AppDataSource } from "../data-source"
import { Compliment } from "../entities/Compliments"

const ComplimentsRepository = AppDataSource.getRepository(Compliment)

export { ComplimentsRepository }