import { Category } from "./category"

export class Skill {
    id!: number
    name!: string
    Description!: string
    subSkills!: Array<string>
    category!: Category
    picture!: string
    evaluation!: number
    certificate!: boolean
    startDate!: Date
}