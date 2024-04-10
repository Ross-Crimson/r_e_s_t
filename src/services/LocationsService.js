import { dbContext } from "../db/DbContext.js"


class LocationsService {
    async GetLocations(searchQuery) {
        const locations = await dbContext.Locations.find(searchQuery)
        return locations
    }
}

export const locationsService = new LocationsService