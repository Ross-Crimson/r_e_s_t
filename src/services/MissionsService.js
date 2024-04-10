import { dbContext } from "../db/DbContext.js"


class MissionsService {
    async GetMissions(searchQuery) {
        const missions = await dbContext.Missions.find(searchQuery).populate('rat', 'callsign').populate('location')
        return missions
    }

    async GetRatMissions(ratId) {
        const ratMissions = await dbContext.Missions.find({ ratId: ratId }).populate('location')
        return ratMissions
    }

    async GetMissionLocations(locationId) {
        const missionLocations = await dbContext.Missions.find({ locationId: locationId }).populate('rat', 'callsign')
        return missionLocations
    }

    async PostMission(missionData) {
        const mission = await dbContext.Missions.create(missionData)
        await mission.populate('rat', 'callsign')
        await mission.populate('location')
        return mission
    }

}

export const missionsService = new MissionsService