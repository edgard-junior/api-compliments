import { Request, Response } from "express"
import { ListTagsService } from "../services/ListTagService";

class ListTagsController {

    async handle(request: Request, response: Response) {
        const listTagsService = new ListTagsService();

        const tags = await listTagsService.exec();

        return response.json(tags);
    }

}

export { ListTagsController }