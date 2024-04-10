import { dbContext } from "../db/DbContext.js"


class RatsService {
    async GetRats(searchQuery) {
        const rats = await dbContext.Rats.find(searchQuery)
        return rats
    }

}

export const ratsService = new RatsService