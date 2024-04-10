import { Schema } from "mongoose";


export const RatSchema = new Schema({
    name: { type: String, required: true },
    callsign: { type: String, required: true },
    picture: { type: String, required: true },
    specialties: [{ type: String, required: true }]
},
    {
        toJSON: { virtuals: true }
    }
)

RatSchema.virtual('energyLevel').get(() => {
    //return `${this.callsign}'s real identity is ${this.name}`
    return `SUPER SAIYAN RAT`
})