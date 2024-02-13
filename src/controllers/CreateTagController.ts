import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";
import "express-async-errors";

class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const createTagService = new CreateTagService();

        try {
            const tag = await createTagService.execute(name);
            return response.json(tag)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({
                    error: error.message
                })
            }
        }
    }
}

export { CreateTagController }