import { Industry } from "@/domain/models/industry"

export class Organization {
    id: number
    name: string
    logo: string
    industry: Industry
    constructor(
        id: number,
        name: string,
        logo: string,
        industriy: Industry
    ) {
        this.id = id
        this.name = name
        this.logo = logo
        this.industry = industriy
    }

}