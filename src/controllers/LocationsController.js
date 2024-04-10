import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.GetLocations)
            .get('/:locationId/missions', this.GetMissionLocations)
    }

    async GetLocations(request, response, next) {
        try {
            const searchQuery = request.query
            const locations = await locationsService.GetLocations(searchQuery)
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }

    async GetMissionLocations(request, response, next) {
        try {
            const locationId = request.params.locationId
            const missions = await missionsService.GetMissionLocations(locationId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
}