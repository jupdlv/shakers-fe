import { Skill } from "@/app/shared/models/skills"
import { Specialties } from "@/app/shared/models/specialities"


export class Position {
    id: Number
    title: String
    skills: Skill[]
    specialities: Specialties[]

    constructor(
        id: Number,
        title: String,
        skills: Skill[],
        specialities: Specialties[]
    ) {
        this.id = id
        this.title = title
        this.skills = skills
        this.specialities = specialities
    }

}