import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import "express-async-errors";

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        try {
            const user = await createUserService.execute({ name, email, admin, password })
            return response.json(user);
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({
                    error: error.message
                })
            }
        }
    }
}

export { CreateUserController };