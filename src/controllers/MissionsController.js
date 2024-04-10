import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class MissionsController extends BaseController {
    constructor() {
        super('api/missions')
        this.router
            .get('', this.GetMissions)
            .post('', this.PostMission)
    }

    async GetMissions(request, response, next) {
        try {
            const searchQuery = request.query
            const missions = await missionsService.GetMissions(searchQuery)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async PostMission(request, response, next) {
        try {
            const missionData = request.body
            const mission = await missionsService.PostMission(missionData)
            response.send(mission)
        } catch (error) {
            next(error)
        }
    }
}