import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";


export class RatsController extends BaseController {
    constructor() {
        super('api/rats')
        this.router.get('', this.GetRats)
        this.router.get('/:ratId/missions', this.GetRatMissions)
    }

    async GetRats(request, response, next) {
        try {
            const searchQuery = request.query
            const rats = await ratsService.GetRats(searchQuery)
            response.send(rats)
        } catch (error) {
            next(error)
        }
    }

    async GetRatMissions(request, response, next) {
        try {
            const ratId = request.params.ratId
            const missions = await missionsService.GetRatMissions(ratId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
}