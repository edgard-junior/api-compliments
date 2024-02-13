import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/db.sqlite",
    entities: ["src/entities/*.ts"],
    synchronize: true,
    logging: false,
    migrations: ["src/database/migrations/*.ts"]
})