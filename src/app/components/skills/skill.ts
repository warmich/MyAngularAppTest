import { Category } from "./category"

export interface Skill {
    id: number
    name: string
    description: string
    subSkills: Array<string>
    category: Category
    picture: string
    evaluation: number
    certificate: boolean
    startDate: Date
}