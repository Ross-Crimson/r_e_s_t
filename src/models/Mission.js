import { Schema } from "mongoose";
import { RatSchema } from "./Rat.js";
import { LocationSchema } from "./Location.js";


export const MissionSchema = new Schema({
    codename: { type: String, required: true },
    objective: { type: String, required: true },
    year: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },

    ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
    locationId: { type: Schema.ObjectId, required: true, ref: 'Location' }

}, { toJSON: { virtuals: true } })

MissionSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Location',
    foreignField: '_id',
    justOne: true
})

MissionSchema.virtual('rat', {
    localField: 'ratId',
    ref: 'Rat',
    foreignField: '_id',
    justOne: true
})