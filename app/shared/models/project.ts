import { Budget } from "@/app/shared/models/budget"
import { Category } from "@/app/shared/models/categories"
import { Faq } from "@/app/shared/models/faqs"
import { Organization } from "@/app/shared/models/organizations"
import { Position } from "@/app/shared/models/positions"
import { SubCategory } from "@/app/shared/models/subcategories"
import { User } from "@/app/shared/models/user"
export enum EProjectStatus{
"PUBLISHED",
}
export interface Project {
    id: Number
    title: string
    organization: Organization
    projectLeader: User
    category: Category
    subCategory: SubCategory
    startDate: Date
    budget: Budget
    totalHours: number
    description: string
    goals: string[]
    faqs: Faq[]
    status: EProjectStatus
    creationDate: Date
    positions: Position[]
    totalApplicationsAmount:number
    publishedAt: Date
}